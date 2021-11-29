---
title: "Link an object's rotation to a facial expression"
description: "In this tutorial we'll go over how to control an object's rotation using facial expressions. We'll use the face expressions API to get an expression weight (e.g. how open someone's mouth is) and then drive the rotation of a separate object (e.g. the rotation of a jaw bone)."
image: /images/tutorials/snapchat-intermediate/link-to-expressions/thumbnail.jpg
path: snapchat-intermediate/link-to-expressions
software: "Lens Studio"
software_version: "4.7.2"
author: "Michael Porter"
snapchat: "modelsbymike3d"
instagram: "modelsbymike3d"
twitter: "modelsbymike3d"
youtube: "https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg"
homepage: "https://modelsbymike3d.com"
---

`youtube:2MV5IUsXOQY`

In this tutorial we'll go over how to control an object's rotation using facial expressions. We'll use the face expressions API to get an expression weight (e.g. how open someone's mouth is) and then drive the rotation of a separate object (e.g. the rotation of a jaw bone).

## Scene setup

I am starting out with a rigged 3D skull that I imported, so make sure you have some sort of 3D object to work with. It has a single bone that controls the jaw rotation and that is what I want to control via the user's face expressions.

In addition to your 3D object, you will also need to add a Face Mesh in the Objects Panel and also a Script in the Resources Panel. Once you've created your script go ahead and add it to your scene. The Face Mesh comes with a default material that you probably won't want visible in your final lens; leave it for now, we'll come back to it later.

![Setting up our scene in Lens Studio to control an object's rotation via a face expression](/images/tutorials/snapchat-intermediate/link-to-expressions/scene-setup.jpg)

## Getting the expression weight

Open up your script for editing and let's get started! This will be a pretty straightforward script. First we need to import the face mesh as a RenderMeshVisual and our target object that we want to rotate.

```javascript
// @input Component.RenderMeshVisual faceMesh
// @input SceneObject target
```

To access the face expressions, we need to access `mesh.control` on the face mesh and then grab the weight of the expression we want. The weights range from 0-1 and a full list of the expressions Lens Studio supports can be [found here](https://lensstudio.snapchat.com/api/classes/Expressions/). In my case I want to access the `JawOpen` weight to control the jaw bone on my skull model. I'm also going to print out the weight to check and make sure it is working. Once you add the following code and save the script, you might notice an error in the Logger. That is because we are missing the script inputs. Select the script in the Objects Panel and choose the face mesh and your target object for the input parameters. Also change "On Awake" to "Frame Updated" for when the script should run. You should now see some values being printed in the Logger Panel (make sure you also choose an "open mouth" preview video).

```javascript
// @input Component.RenderMeshVisual faceMesh
// @input SceneObject target

var weight = script.faceMesh.mesh.control.getExpressionWeightByName(
  Expressions.JawOpen
);
print(weight);
```

## Hiding the face mesh

Now that we are getting the expression weights, let's hide the face mesh so it is not visible. We can't delete it because we are getting the expression weight from it, but we don't want it visible in our effect. A great way to hide things from view is to put them on a layer that the camera is not rendering. However, if you put the face mesh on a new layer, the weight value in the logger will stop updating - it gets stuck on the last value. For whatever reason, we can only access the expression weights if the face mesh is actually rendered to the scene.

Just to avoid any potential issues down the road, I am going to leave the face mesh on its own layer. However, I am going to select the camera and add the face mesh layer to it. Next I am going to select the face mesh's material and change the alpha channel on the base color to 0 to make it fully transparent. Now we are getting our expression weight again and the face mesh is hidden.

## Rotating our target object

Let's get our target object rotating. Our plan of action is to change the local rotation because the world rotation is being controlled by the head binding.

First up is to map the 0-1 weight value to the rotation range for our target object. If I select the jaw bone, it's current x rotation is -138 degrees. If I rotate it so the mouth is open, it is about -115 degrees. I'll take the difference of those two values, multiply them by the weight, and then add the minimum value to get the proper mapping. Next I need to map degrees to radians and I'll also grab the original rotation values so that we maintain the existing y and z rotations. Then I'll set the rotation of my target object. It might be a bit easier to follow looking at the below code.

```javascript
// @input Component.RenderMeshVisual faceMesh
// @input SceneObject target

var rotMin = -138;
var rotMax = -115;

var weight = script.faceMesh.mesh.control.getExpressionWeightByName(
  Expressions.JawOpen
);
print(weight);

var rotationDegrees = (rotMax - rotMin) * weight + rotMin;
var rotationRadians = (rotationDegrees * Math.PI) / 180;
var originalRotation = script.target
  .getTransform()
  .getLocalRotation()
  .toEulerAngles();
script.target
  .getTransform()
  .setLocalRotation(
    quat.fromEulerAngles(
      rotationRadians,
      originalRotation.y,
      originalRotation.z
    )
  );
```

## In closing

Once you add the above code, your script is finished! Feel free to adjust the `rotMin` and `rotMax` values to match your own object and desired preferences. Getting the expression weight is probably the simplest part of the whole process; it's getting the weight mapped to your desired range that might take a little work.

You are also not limited to just rotating objects - you can control positions, scales, and material parameters just to name a few. Happy creating!

## Further reading

- [Available Face Expressions](https://lensstudio.snapchat.com/api/classes/Expressions/)
- [Scripting](https://lensstudio.snapchat.com/guides/scripting/scripting-overview/)
- [Lens Studio API](https://lensstudio.snapchat.com/api/)
