---
title: Finding grain textures
description: So you want to add grain to your filter but don't know where to find some? We've got you covered.
path: general/finding-grain
image: /images/guides/general-grain.jpg
platform: General
software:
---

Lot's of AR filters add grain to the final effect, but to do that you need to first have some sort of grain images or video to add.

## Getting the images

Film grain comes in two versions - static images or video. Video works, but you'll need to trim it down and make sure you export it in a format that's compatible with the software you are using for your AR (Spark AR, Lens Studio, etc), so we are going to stick with images.

There is a [nice little pack of film grain textures on Behance](https://www.behance.net/gallery/59398743/Film-Grain-Textures-FREE-PACK) that is free to download and use. Film Composite is another source for film grain and they [have an entire section of free grain images and videos](https://www.filmcomposite.com/free-film-assets). Or you can look for other sources of film grain. Do not, however, just do a Google search and download whatever looks good. You won't go to jail or anything, but you'll most likely be violating someone's copyright and that is not good. If you are making a filter for a client, you definitely should not do that. Find a free resource or pay for one, but don't blindly download.

## Edit the images

Lots of the grain images you'll find are going to be too high resolution. Open up your favorite image editor (Photoshop, Affinity Photo, GIMP, etc) and create a new image. Go with something like 1440x2560, 1080x1920, or 720x1280. For a single, static grain image, 1440x2560 is fine, but if you want dynamic grain, I wouldn't go above 720x1280 because you'll start to run into file size limit issues. If you are going with a single image, just load in your image and export it as a JPG file. If you want to use multiple images for moving grain, let's keep going.

Since the grain images are hopefully a higher resolution than our desired final image, we can use a small number of images to produce a large number of frames for the grain animation. What do I mean by this? Let's say you have 6 different grain images, each on a different layer. Take a layer, duplicate it, and then move it so that a different part of the image is visible in the frame. Repeat this as many times as you want for as many layers as you want. If I do this 2 times for all 6 of my original layers, I'll now have 18 different frames for my grain (the original plus 2 copies for each of my 6 layers). Even if you have just one grain image, you can still apply this same technique. Duplicate your layer and move and flip it so that each frame looks different.

Now that you have multiple layers of grain, each layer looking different, it's time to export. The process is different for each graphics program, so I'll leave that up to you to do. Here's a [guide for doing it in Photoshop](https://helpx.adobe.com/photoshop/using/export-artboards-layers.html), [in Affinity Photo](https://affinity.help/designer/en-US.lproj/index.html?page=pages/ExportPersona/exportPersona.html?title=Exporting%20using%20Export%20Persona), and [in GIMP](https://khalim19.github.io/gimp-plugin-export-layers/).

## Import into your AR software

Now that you have multiple frames of grain, all that's left is importing them as an image sequence into your software of choice.

### Importing into Lens Studio

For Lens Studio you can follow the below tutorial, but instead of just importing an image, make sure you [import your frames as an image sequence](https://lensstudio.snapchat.com/guides/2d/2d-animation/) and use that for the grain texture.

`youtube:TABYa8KUDQU`

### Importing into Spark AR

The following video goes over how to import grain into Spark AR.

`youtube:JzY7G6zNbRE`
