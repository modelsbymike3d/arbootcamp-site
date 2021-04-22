---
title: 'Super easy freckles in Lens Studio'
metaTitle: 'Super easy freckles in Lens Studio'
metaDescription: "Learn how to easily add freckles to the user's face using the Face Mesh!"
metaImage: /snapchat-beginner/easy_freckles/freckles_thumbnail.jpg
software: 'Lens Studio'
software_version: '3.1'
author: 'Michael Porter'
snapchat: 'modelsbymike3d'
instagram: 'modelsbymike3d'
twitter: 'modelsbymike3d'
youtube: 'https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg'
homepage: 'https://modelsbymike3d.com'
---

`youtube:OKTgCRxE_h0`

In this tutorial we'll go over how to easily create freckles. You can preview this effect by [clicking here](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=67fa25dccb5d4936855685b61101fe17&metadata=01) or by scanning the snapcode below.

![Snapcode for example virtual background lens](../../snapchat-beginner/easy_freckles/snapcode.svg)

## Creating the freckles

Now, this is a Lens Studio tutorial, not a Photoshop or Illustrator tutorial, so I won't go into detail as to how to actually create the freckles. I am assuming you have access to, and familiarity with, some sort of graphics program.

- Start by going to the [Lens Studio Face Mesh Guide page](https://lensstudio.snapchat.com/guides/face/face-effects/face-mesh/) and scroll down to the `Download the Face Mesh UV` section. Right click on the image and save it to your computer.
- Open up your graphics program. I personally use the [Affinity](https://affinity.serif.com/en-us/) line of software, but you can use Photoshop, Illustrator, GIMP, Inkscape, etc. Whatever you have and are comfortable with will work.
- Use the Face Mesh UV as a guide for placing your freckles. A UV map is a 2D representation of a 3D object. The image we downloaded from the Lens Studio website is a guide for the Face Mesh.
- Once you are happy with your design, export it as a PNG file. For freckles we need the transparency, so a JPEG file won't work.
- I recommend exporting your design in all white if it is a single color design. If it is a multi-color design then it's fine to leave the colors. The benefit to a white design is that over in Lens Studio it will be easy to set the color.

## Setting up the scene

For this effect we are going to start with a blank project. We really only need to add a [Face Mesh](https://lensstudio.snapchat.com/guides/face/face-effects/face-mesh/) in the Objects Panel and import our freckles image in the Resources Panel.

## Add the freckles

In the Resources Panel, find the `Face Mesh Default` material and select it. Now, over in the Inspector Panel, swap out the Base Texture texture for your freckle image. That's it! You can change the base color to adjust the color of the freckles and add some shine with the Metal and Roughness sliders. It really is that easy. The hardest part is probably downloading the Face Mesh UV guide and creating your design.

## Finishing up

Add a [Face Retouch](https://lensstudio.snapchat.com/guides/face/face-effects/face-retouch/), [Color Correction](https://lensstudio.snapchat.com/guides/2d/post-effect/), or anything else you want.

## Further reading

- [Face Mesh](https://lensstudio.snapchat.com/guides/face/face-effects/face-mesh/)
