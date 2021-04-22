---
title: Getting started in 3D for AR
description: You can get started in AR without any experience with 3D design. However, 3D objects and effects can take your AR experiences to the next level. Here are a few tips and resources to help get you started!
path: general/getting-started-3d
image: /images/guides/getting-started-3d.jpg
platform: General
software:
---

## Where to start

I remember feeling so overwhelmed when I started learning 3D graphics. From choosing the software to modeling, texturing, rigging, animating, and lighting, there are so many things to learn. I'm no 3D expert, but I know enough to be dangerous. Here are my tips and recommendations for getting started in 3D with an emphasis on designing for augmented reality. This guide is by no means comprehensive, but it serves as a good starting-out point.

## The software

The best 3D software will be the software you have access to. My personal pick is [Blender](https://www.blender.org/). It is open source and completely free to use. Is it any good? It sure is! It is starting to [make its way into feature film production](https://www.youtube.com/watch?v=iZn3kCsw5D8). That might not matter too much to you if you want to make better AR experiences, but the Blender community is also super helpful and tons of creators are making awesome tutorials.

While I personally like Blender, it isn't your only option. There are several paid options, but if you are a student you may be able to get a copy at a discount. [Cinema 4D](https://www.maxon.net/en-us/) seems to be fairly popular, as do [Maya](https://www.autodesk.com/products/maya/overview) and [3DS Max](https://www.autodesk.com/products/3ds-max/overview). Whatever option you go with, DO NOT PIRATE SOFTWARE. If you don't have the money, stick with Blender. Once you learn the principles of 3D graphics, it won't be too hard to switch to another platform.

## Learning the basics

Once you have the software, you need to learn it! If you are just getting started in Blender, I recommend the [donut tutorial by Blender Guru](https://www.youtube.com/playlist?list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U). If you aren't using Blender, just find a course or playlist applicable to your software of choice.

`youtube:NyJWoyVx_XI`

Some topics that I recommend learning are:

- **_Modeling_** - Simply put, this is creating 3D objects. It doesn't matter if you model with shapes and polygons or go with the sculpting route. However, no matter how you create your models, you need to make sure they aren't too complex. Most AR is experienced through mobile phones, and not everyone has the most high-end device. After you get the hang of modeling, start looking into video game asset optimization. A lot of the same principles will apply to making AR-ready models.
- **_Texturing_** - Make your models look nice! This can be as simple as creating a material, applying an image texture, or using something like [Substance Painter](https://www.substance3d.com/products/substance-painter/) to draw in all the detail. For AR, you'll want to stick with 2k resolution (2048x2048) and below (lots of the AR creation tools limit you to 2k anyway). Depending on how many textures you have, you may need to go all the way down to 256x256 depending on where the texture is used. Also, try to stick with JPG vs PNG images. JPG images can have compression artifacts, but the file size difference is huge.
- **_Rigging_** - If your model needs to move, it needs to be rigged. Rigging is the process of adding a virtual skeleton to your model.
- **_Animating_** - Making it move! Once you have your model rigged, you are now ready to animate it! If rigging and animating aren't your thing, check out [Mixamo](https://www.mixamo.com/#/). With Mixamo, you upload your humanoid model and it does the rest! Mixamo will create the rig and then you can choose an animation. None of the animations are super complex, but they often are perfect for AR experiences. I'm personally not great at rigging and animating, so I turn to Mixamo fairly often for my Snapchat and Instagram filters.
- **_Lighting_** - Bring it all together. The final lighting will be setup in your AR creation software (Lens Studio, Spark AR, etc), but it's nice to setup some lighting while creating your 3D asset so you can see how it looks. This step is mostly about making your model look as good as it can.

## Helpful resources

You don't have to do everything yourself. There are lots of existing resources to help you get started in 3D. It's definitely good to at least be familiar with each step of the process, but sometimes you might lack the experience or the time. Not great at modeling? No problem, you can download a 3D model. Not great at animating? No problem either (depending on the animation that is). Here are a few resources to help you get started.

### Modeling resources

- [Turbosquid](https://www.turbosquid.com/) has a lot of 3D models that are either free to download or are paid. Make sure you check the license on the model to make sure you can use it for your use case. Also, hi-poly models might need a little work to make them AR-ready, just something to be mindful of.
- [Sketchfab](https://sketchfab.com/) also has a ton of great models available for download/purchase. As with Turbosquid, make sure you check the license and complexity of the model.

### Texturing resources

- [Textures.com](https://www.textures.com/) has a ton of great textures. High resolution images are available for purchase, but the low resolution images are free. The great thing about AR is that you'll be wanting the low resolution images anyway to keep file sizes down.
- [Texture Haven](https://texturehaven.com/) is a collection of 100% free, tileable textures.
- [cgbookcase](https://www.cgbookcase.com/textures/) has another great collection of free textures.

### Rigging and animating resources

- [Mixamo](https://www.mixamo.com/#/) is probably the go-to. If you have ever used a Snapchat lens or Instagram filter, chances are you've come across an effect that used an animation from Mixamo. It takes care of the rigging and animation for you.

### Lighting resources

- [HDRI Haven](https://hdrihaven.com/) is the place to go for HDRI images. An HDRI is an environment map that lights your model. Both Lens Studio and Spark AR have some built-in environment maps, but it's always helpful to load one into your 3D software to see how your model is looking.
- [Lighting Mastery Course](https://www.youtube.com/watch?v=Ys4793edotw) by Blender Guru does a pretty good job of demonstrating and explaining various aspects of lighting a 3D model or scene.

## Final thoughts

There is a ton to learn when it comes to 3D graphics, but hopefully this guide helps serve as a starting point. When it comes to AR, the main considerations are model complexity (keep it simple), file sizes (don't use too high resolution textures), and enjoyability (is it something people want to watch/experience). While you are going through tutorials, also watch out for things that are too specific to your software package. Remember, everything needs to be exported and then loaded into the AR creation software, and not everything is compatible with the export/import process. This will come down to the specifics of your 3D software and probably some trial and error as you are learning.

Always remember to stick with it! It will get frustrating at times, but the experiences you'll be able to create by incorporating 3D elements will be so much more immersive. You can also create some pretty cool effects with really simple 3D elements, so there's no need to wait until you feel you are proficient with the software. Just jump in there and get started! Happy learning!
