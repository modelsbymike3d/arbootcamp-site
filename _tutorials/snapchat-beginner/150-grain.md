---
title: 'Quicky and easily add grain to your Snapchat lenses'
metaTitle: 'Quicky and easily add grain to your Snapchat lenses'
metaDescription: 'Film grain is a popular feature of lenses, and fortunately it is easy to add to your own.'
metaImage: /snapchat-beginner/grain/grain-thumbnail.jpg
software: 'Lens Studio'
software_version: '3.1'
author: 'Michael Porter'
snapchat: 'modelsbymike3d'
instagram: 'modelsbymike3d'
twitter: 'modelsbymike3d'
youtube: 'https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg'
homepage: 'https://modelsbymike3d.com'
---

`youtube:q3PtpCixl5k`

Grain is a pretty popular addition to many Snapchat lenses. Done right, it can add a vintage look to your lenses. This tutorial will show you how to quickly and easily add grain to your own lenses. You can preview an effect using grain by [clicking here](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9bbc641deec14df1a21c9f170b11ce04&metadata=01) or by scanning the snapcode below.

![Snapcode for example lens with grain](../../snapchat-beginner/grain/snapcode.png)

## Getting grain images

Before we add our grain, we of course need some sort of grain images. For a great source of free grain images, I recommend checking out [Film Composite](https://www.filmcomposite.com/free-film-assets). They have an entire collection of free grain images and videos. Once you find some grain you like, click on the thumbnail to get to the download page. For this particular lens I am going to use film scratch images, but feel free to use whichever type you like. Once you click on the thumbnail, you'll see a larger preview of the grain along with a `Blend Mode` and `Download Free` button. Take not of the blend mode because we'll need that later. Download the image and find some more that match it. If you can only find one grain image you like don't worry, we have a few tricks for generating multiple images from one.

## Formatting the grain

Using your favorite graphics editor (Photoshop, Affinity Photo, GIMP, etc), create a new image. I would not go above a final resolution of 720x1280 due to file size constraints for Snapchat lenses. Import each of your grain images as a new layer. The more layers you have, the more dynamic and less repetitive your grain will look because each layer will become a separate frame in the animation. Since the grain images we downloaded from Film Composite are much larger than the resolution we chose for our frames, it is pretty easy to supplement our number of frames. Take a layer and scale it down so it still fills the frame. Duplicate the layer and scale, move, and/or flip the layer to make a new, distinct frame. Repeat as many times and for as many layers as desired. Film Composite had six film scratch images, and I duplicated each layer twice to give me a total of 18 frames. Once you have your frames, export each layer as an image. You can do this manually by showing/hiding each layer and exporting, or you can use a more automated route -- here's how to [do it in Photoshop](https://helpx.adobe.com/photoshop/using/export-artboards-layers.html), [in Affinity Photo](https://affinity.help/designer/en-US.lproj/index.html?page=pages/ExportPersona/exportPersona.html?title=Exporting%20using%20Export%20Persona), and [in GIMP](https://khalim19.github.io/gimp-plugin-export-layers/).

## Import into Lens Studio

Head into Lens Studio and add a [2D Animation From Files](https://lensstudio.snapchat.com/guides/2d/2d-animation/) in the Resources Panel. Select all the grain frames you just exported and create the animation (you shouldn't need to change any of the settings). Now in the Objects Panel create a [Screen Image](https://lensstudio.snapchat.com/guides/2d/image/), set the fill mode to stretch, choose the new grain animation as the texture, and set the blend mode to whatever Film Composite listed on the download page. Voila! You can adjust the strength of the grain by changing the opacity of the screen image. You can also adjust the timing of the animation itself to make your grain faster or slower. To do this, select the 2D animation in the Resources Panel and change the `Duration` in the Inspector Panel.

It is a pretty straightforward process to add grain to your lenses. The hardest part might be finding the images and sizing them appropriately!

## Further reading

- [2D Animation From Files](https://lensstudio.snapchat.com/guides/2d/2d-animation/)
- [Screen Image](https://lensstudio.snapchat.com/guides/2d/image/)
