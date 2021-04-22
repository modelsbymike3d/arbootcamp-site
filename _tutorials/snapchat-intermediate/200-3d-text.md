---
title: 'Create customizable 3D text in Lens Studio'
metaTitle: 'Create customizable 3D text in Lens Studio'
metaDescription: 'Lens Studio does not have native 3D text, but we can still fake the effect with some pretty convincing results! Learn how to use the Text Texture resource and a little scripting to create this effect!'
metaImage: /snapchat-intermediate/3d-text/3d_text_thumbnail.jpg
software: 'Lens Studio'
software_version: '3.1'
author: 'Michael Porter'
snapchat: 'modelsbymike3d'
instagram: 'modelsbymike3d'
twitter: 'modelsbymike3d'
youtube: 'https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg'
homepage: 'https://modelsbymike3d.com'
---

`youtube:A2J0Ruf9cHw`

In this tutorial we'll go over how to create 3D text inside of Lens Studio. You can see an example of this by [clicking here](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e8090cbca14843d2875638c04fc605b9&metadata=01) or by scanning the snapcode below.

![Snapcode for lens with 3D text](../../snapchat-intermediate/3d-text/snapcode.png)

## Inspiration

I came across [ztext.js](https://bennettfeely.com/ztext/) the other day and thought it was pretty cool. I noticed that the illusion of depth comes from duplicating the text many times and offsetting the layers. With enough layers, it all runs together and looks continuous. Since Lens Studio doesn't have any actual 3D text, we can use the same technique of multiple layers to fake the effect.

## Setting up the scene

### Scene Objects

For this effect we are going to start with a blank project. In the [Objects Panel](https://lensstudio.snapchat.com/guides/general/panels/), add a Face Image and then delete the 'Look At' component in the Inspector Panel. The Look At component keeps the image facing the camera square-on, but in our case that will mask our eventual 3D effect.

### Scene Resources

Now let's head on down to the Resources Panel. We need to add the following items:

- `Text Texture` - This is the source of the text that we are going to be using. Usually when working with text we either add a Text object or Screen Text in the Objects Panel, but for this we want to use a texture because this will let us apply different materials to it. Go ahead and put some placeholder text in here for now.
- `Main Material` - This is going to the material for the face of our text. You can use whichever material you want. To keep things simple, you can start out with just an Unlit material and modify or replace it later.
- `Shadow Material` - This is going to be the material that lies behind the face of our text and gets applied to each of our layers making up the effect. I recommend using just an Unlit material for this.
- `Script` - Create a new script and name it whatever you want. Our script will be reusable in other projects, so some sort of name like 'text3D' or something might be a good idea.
- `Font` - This is optional, but go ahead and load in a custom font if you want. Lens Studio has a few built-in fonts, or you can download and import a font of your choice. For this tutorial I am going to use the 'Pacifico' font which is built-in and can be imported directly through the Resources Panel.

## Scripting

> There are multiple ways to accomplish what we want to do. This method is what works best for me.

### The inputs

To make our script reusable and customizable, we need a few inputs.

- `SceneObject parent` - This is the parent object that all our layers will live under.
- `SceneObject textImage` - This is going to be the image which has our text applied to it and will be the base for the effect.
- `Asset.Texture textTexture` - Though not strictly required for 3D text, by providing the Text Texture as input we can dynamically change what our text reads.
- `float offset = 0.02` - The spacing between the layers. We'll default to a value of 0.02 which gives pretty smooth results.
- `int numLayers = 50` - How many layers we want to use for the effect. I've found that 50 layers gives a pretty good feeling of depth, but feel free to adjust to your preferences.
- `Asset.Material shadowMat` - We are going to give our Face Image our Main material, but then apply our Shadow material to each of the layers. This helps differentiate between the front face of the text and our layers.
- `bool autoUpdate` - This is just a flag we can toggle on/off while setting up our scene. When we publish our lens we'll want to turn this off.

Your script should so far look like this:

```javascript
// -----JS CODE-----
// @input SceneObject parent
// @input SceneObject textImage
// @input Asset.Texture textTexture
// @input float offset = 0.02
// @input int numLayers = 50
// @input Asset.Material shadowMat
// @input bool autoUpdate
```

### Initializing the layers

Our first order of business will be to create the different layers. We are going to iterate through the number of layers we specify in our script input, copy the Face Image, change the material, and then save it to an array. This block of code will look like the following:

```javascript
var instances = [];

function init() {
  for (var i = 0; i < script.numLayers; i++) {
    var newObj = script.parent.copySceneObject(script.textImage);
    var imgComp = newObj.getComponent('Component.Image');
    imgComp.mainMaterial = script.shadowMat;
    instances.push(newObj);
  }
}
```

### Offsetting the layers

Now that we have our layers created, we need to offset them. For this step we'll take our instances and then offset them by a small amount behind our Face Image. We are also going to make sure we set their scales, but this is only needed for the autoUpdate flag. In our line of code were we shift the z position, you'll notice that we add 1 to the index. This is to make sure our first layer does not lie on top of our original Face Image.

```javascript
function position() {
  for (var i = 0; i < instances.length; i++) {
    var newObj = instances[i];
    var transform = script.textImage.getTransform();
    var pos = transform.getLocalPosition();
    pos.z = pos.z - (i + 1) * script.offset;
    newObj.getTransform().setLocalPosition(pos);
    newObj.getTransform().setLocalScale(transform.getLocalScale());
  }
}
```

### Adding the auto update

We only need to create our layers once when the lens is turned on. However, while editing our lens, it will be helpful to have our 3D effect update as we move and scale our Face Image. For that, we just add an "UpdateEvent" and call our `position` function if the flag is enabled. When you are ready to publish your lens, just turn off the autoUpdate flag. If you forget it won't be the end of the world, but depending on how many other scripts you are running you might start noticing an impact. We'll also go ahead and make our function calls to init() and position() when our script runs.

```javascript
script.createEvent('UpdateEvent').bind(function() {
  if (script.autoUpdate) {
    position();
  }
});

init();
position();
```

### Customizing the text

Last, but not least, let's take a look at how to programmatically set the text value on the Text Texture. If we were using a Text Component, we would just have to assign our text to the `text` property, but since this is a Text Texture, the `text` property is found inside the `control` property. For this example I'm going to pull the user's display name from the [UserContextSystem](https://lensstudio.snapchat.com/api/classes/UserContextSystem/) and use that for our text value.

```javascript
global.userContextSystem.requestDisplayName(function(displayName) {
  print('Hello ' + displayName);
  script.textTexture.control.text = displayName;
});
```

### The finished script

Here is our finished script.

```javascript
// -----JS CODE-----
// @input SceneObject parent
// @input SceneObject textImage
// @input Asset.Texture textTexture
// @input float offset = 0.02
// @input int numLayers = 50
// @input Asset.Material shadowMat
// @input bool autoUpdate

var instances = [];

function init() {
  for (var i = 0; i < script.numLayers; i++) {
    var newObj = script.parent.copySceneObject(script.textImage);
    var imgComp = newObj.getComponent('Component.Image');
    imgComp.mainMaterial = script.shadowMat;
    instances.push(newObj);
  }
}

function position() {
  for (var i = 0; i < instances.length; i++) {
    var newObj = instances[i];
    var transform = script.textImage.getTransform();
    var pos = transform.getLocalPosition();
    pos.z = pos.z - (i + 1) * script.offset;
    newObj.getTransform().setLocalPosition(pos);
    newObj.getTransform().setLocalScale(transform.getLocalScale());
  }
}

script.createEvent('UpdateEvent').bind(function() {
  if (script.autoUpdate) {
    position();
  }
});

init();
position();

global.userContextSystem.requestDisplayName(function(displayName) {
  print('Hello ' + displayName);
  script.textTexture.control.text = displayName;
  // The display name inside of Lens Studio is 'Snap User'
  // but Snapchat doesn't like the word 'Snap' appearing
  // in previews. Uncomment the following line, create your
  // preview, and then comment it back out.
  // script.textTexture.control.text = 'My Name'
});
```

## Configuring your scene

Now that our script is ready, let's get it added to our scene!

### Setup the Text Texture

All you need to do here is set the font and text (if you aren't setting it programmatically) in the Inspector Panel. Leave the color as white because we'll be setting the color on the material.

### Setup the materials

For both the Main and Shadow materials, set the blend mode to `Alpha Test` and the Base Texture to the Text Texture. Choose a base color for the Main material and then a darker version of the same color for the Shadow material. Most of the other settings won't matter for the Shadow material, but feel free to add specular lighting to the Main material if you want. You can also turn on Tone Mapping if you want the material to match your camera lighting a little better.

### Setup the Face Image

Now head on up to the Objects Panel and select the Face Image. Set the material to the Main material you created and you should be good to go. If you just see a solid color, try switching the blend mode between Normal and Alpha Test. Once it looks fine you should be good.

### Add the script

You can add the script to whichever Scene Object you like. I like to add mine to the camera. Once you've added your script, fill in the parameters:

- Head Binding as the Parent
- Face Image as the Text Image
- Text Texture as the Text Texture
- You can adjust the Offset and Num Layers as you see fit
- Shadow material for the Shadow Mat

At this point you should be seeing your 3D text! If not, make sure there aren't any errors in your script.

## Further reading

- [ztext](https://bennettfeely.com/ztext/)
- [Images](https://lensstudio.snapchat.com/guides/2d/image/)
- [Panels](https://lensstudio.snapchat.com/guides/general/panels/)
- [Materials](https://lensstudio.snapchat.com/guides/3d/materials/)
- [UserContextSystem](https://lensstudio.snapchat.com/api/classes/UserContextSystem/)
- [Scripting](https://lensstudio.snapchat.com/guides/scripting/scripting-overview/)
- [Lens Studio API](https://lensstudio.snapchat.com/api/)
