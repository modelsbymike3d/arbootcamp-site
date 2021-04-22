---
title: 'Make objects rotate around the head using tweens'
metaTitle: 'Make objects rotate around the head using tweens'
metaDescription: 'In this Lens Studio tutorial you will learn how easy it is to make objects rotate around the head using the built-in tween scripts - no custom coding required. All it takes is adding your objects and using the right settings on the tween scripts.'
metaImage: /snapchat-beginner/rotate-around-head/thumbnail.jpg
software: 'Lens Studio'
software_version: '3.4'
author: 'Michael Porter'
snapchat: 'modelsbymike3d'
instagram: 'modelsbymike3d'
twitter: 'modelsbymike3d'
youtube: 'https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg'
homepage: 'https://modelsbymike3d.com'
---

`youtube:NyESG8jb5FQ`

In this Lens Studio tutorial you will learn how easy it is to make objects rotate around the head using the built-in tween scripts - no custom coding required. All it takes is adding your objects and using the right settings on the tween scripts. You can preview an example effect using this technique by [clicking here](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=ac05ed980b15450495430f16c5443429&metadata=01) or by scanning the snapcode below.

![Snapcode for example lens with objects rotating around the head](../../snapchat-beginner/rotate-around-head/snapcode.png)

## Setting up your scene

We don't need much to get an object rotating around the user's head. Add a Head Binding, a Tween Manager, and a Scene Object. Delete the examples that are found under the Tween Manager and then move it up to the top of the scene. Rename the Scene Object, nest it under the Head Binding, and then position it where you want the center of rotation to be.

![Setting up our scene for rotating objects around the head in Lens Studio](../../snapchat-beginner/rotate-around-head/scene-setup.jpg)

## Add the object

Import the 3D object(s) that you want to move around the head. In this example I'm just going to add a Sphere in the Objects Panel. Make your object a child of the Scene Object and move it and scale it accordingly. You want your 3D object to be offset from the center of rotation.

![Setting up our object offset in Lens Studio](../../snapchat-beginner/rotate-around-head/object-offset.jpg)

## Add the tween

Select the Scene Object that is serving as the center of rotation and add a Script Component in the Inspector Panel. For the script select "TweenTransform." Here are the settings we want to use for it:

- Change the type to "Rotate"
- Set the movement type to "Offset"
- Set a value for the "Y" (the second box) offset. I started with a value of 10
- Check the "Additive" box
- Change the loop type to "Loop" (you should now see the object continue moving around the head)
- Change the easing function to "Linear"
- Change the easing type to "In / Out"
- Adjust the Time or Y offset to control the speed of the movement

![Tween settings for constant rotation around the head in Lens Studio](../../snapchat-beginner/rotate-around-head/tween-settings.jpg)

The tween scripts aren't good at doing full 360 degree rotation, so instead of trying to get a full rotation like that, we instead use the offset option. Each time the tween runs, it just adds that amount of rotation. The additive option makes sure we don't reset the rotation each time and then by looping the tween we get the continuous motion. You can parent as many objects as you wish to the center of rotation and they'll all rotate together.

There is a face occluder included with the head binding that will hide the objects when they pass behind the head. You can play around with its scale a little bit and adjust the starting positions of the 3D objects to get a cleaner looking effect. Unfortunately the face occluder doesn't take into account hair, so sometimes you'll see your objects going in front of the user's hair before being hidden by the occluder.

![Weird occlusion when hair is involved](../../snapchat-beginner/rotate-around-head/occlusion.jpg)

## Further reading

- [Tweens](https://lensstudio.snapchat.com/templates/world/tween/)
- [3D Object Import](https://lensstudio.snapchat.com/guides/3d/3d-object-import/)
- [Head Binding](https://lensstudio.snapchat.com/guides/face/face-effects/head-attached-3d-objects/)
