---
title: "Big Head effect in Lens Studio"
metaTitle: "Big Head effect in Lens Studio"
description: "Learn about using texture projection to project the face texture onto the head mesh!"
image: /images/tutorials/snapchat-intermediate/big-head/thumbnail.jpg
path: snapchat-intermediate/big-head
software: "Lens Studio"
software_version: "4.1"
author: "Michael Porter"
snapchat: "modelsbymike3d"
instagram: "modelsbymike3d"
twitter: "modelsbymike3d"
youtube: "https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg"
homepage: "https://modelsbymike3d.com"
---

`youtube:EoF2eQnYjT8`

In this tutorial we'll learn how to create a "Big Head" lens using texture projection. You can see an example of this by [clicking here](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6ecba5496e67490497446050f29ff1ed&metadata=01) or by scanning the snapcode below.

![Snapcode for lens with a big head effect](/images/tutorials/snapchat-intermediate/big-head/snapcode.png)

## Creating the background

The first step will be to remove the camera view from the background. Select the camera and in the Inspector Panel change the Clear Color Option to either "Color" or "Texture." With the texture option you can either load in an image to use as the camera input or get a little fancy and set up a separate render target (which I won't be covering here). For this tutorial I'm going to go with the color option to keep things simple and go with a nice sky blue.

![Setting the camera input to a sky blue color](/images/tutorials/snapchat-intermediate/big-head/background.jpg)

## Creating the head

In the Objects Panel add a Head Mesh. Select the newly created Face Mesh in the Resources Panel and enable the Eye Geometry and Mouth Geometry options.

That was pretty easy, but let's make it look like the user's head. Create a new Unlit material, name it whatever you want, and then set it as the material for the head mesh. To get the user's face onto the mesh, we are going to take the camera texture and project it straight onto the mesh. To do so, select the Device Camera Texture as the Base Texture for the material. At this point things are going to be looking pretty ugly, so let's fix that. Change the Texture UV to "Transformed UV 2" and then enable the Transformed UV 2 option down at the bottom of the material settings and change it to "Screen UV." You should now see the face projected onto the head mesh.

![Projecting the face texture onto the head mesh](/images/tutorials/snapchat-intermediate/big-head/face-projection.jpg)

## Finishing touches

That's about it as far as creating the head portion of the lens. To finish your scene, import a 3D body and size it to be proportionally too small for the head. You can also import additional 3D elements to flesh out the scene.

## Further reading

- [Materials](https://lensstudio.snapchat.com/guides/3d/materials/)
