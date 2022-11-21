---
title: 3D for Augmented Reality
description: So you want to add grain to your filter but don't know where to find some? We've got you covered.
path: general/3d-for-augmented-reality
image: /images/guides/general-grain.jpg
platform: General
software:
---

The great thing about augmented reality (AR) is that it combines lots of different disciplines into one. The bad thing about AR is that it combines lots of different disciplines into one. You'll find 3D graphics, 2D graphics, programming, design, and machine learning all coming together to create awesome experiences. But most people aren't experts in all those fields. This guide will specifically address the 3D portion of AR. I'll walk you through all the concepts you need to know so that you'll have a foundation to build upon and keep learning 3D graphics. If you are already an experienced 3D artist, you may still find this guide useful because it will cover some of the nuances of preparing 3D assets for AR.

> I will be using Blender as my 3D software of choice, but this is NOT a Blender tutorial. I will show what I am doing in the software so that you can then lookup tutorials for any knowledge gaps you have or find corresponding tutorials for your 3D software of choice.

> My focus for AR is on social AR for Snapchat, TikTok, Instagram, and Facebook. The principles I cover here will also apply to WebAR or custom AR apps, but I will be going over limitations and requirements of the specific social AR platforms.

The guidelines I share here will be a mix of information from the various platforms themselves along with some things I learned along the way. As you prepare your 3D assets, please refer to the guides for the platform you are building for in case things have changed since I wrote this guide. In general 3D asset creation is the same for all the platforms but they differ in some details. I'll try to note this when possible. Here are the platform-specific guides:

* [Lens Studio (Snapchat)](https://docs.snap.com/lens-studio/references/guides/adding-content/3d/exporting-content/overview)
* [Effect House (TikTok)](https://effecthouse.tiktok.com/learn/guides/3d/3d-asset-preparation/)
* [Meta Spark (Instagram/Facebook)](https://sparkar.facebook.com/ar-studio/learn/articles/creating-and-prepping-assets/creating-3D-objects-for-spark-ar-studio)

## The 3D mesh

Let's start with the mesh. Maybe you are going to model or sculpt it yourself, or maybe you'll downloaded a model from somewhere like [TurboSquid](https://www.turbosquid.com/) or [SketchFab](https://sketchfab.com/). Here are a few things to keep in mind.

### Triangle Count

A 3D mesh consists of various polygons connected together. Usually these are quads or triangles. Each platform lists their limits in triangle count, so that is the value we are going to use here. Lens Studio has a soft limit of 100k triangles, but they recommend no more than 60k if the object is animated (and only 3k for cloth simulation). Meta Spark recommends 50k per object with 150k total per effect, and Effect House is the lowest at 20k triangles per model and 60k total per effect. That's all a bunch of very dry information, but essentially you want to keep things as low-poly as reasonably possible.

If you sculpted some awesome 3D character in Zbrush, you are going to have to do some retopologizing to get that poly count low enough. If you are downloading a character from TurboSquid, take a look at the poly count; if it is too high you'll have to do some tweaking to make it all fit. Creating assets for AR is much more similar to creating game-ready assets than it is to creating assets for film or TV.

If you are having trouble getting your poly count low enough, you can try baking a high poly mesh onto a low poly mesh to create a normal map and preserve some of that detail. But also remember that people are viewing these effects on a phone screen. If you have an intricate headdress or hat, the poly count is usually sufficient to preserve all that detail, especially if paired with a normal map. If you are creating a full body effect, remember that the user will be standing away from the screen and that the final image or video will be max full HD resolution - Snapchat, IG, and TikTok are not recording at 4K so you can get away with less detail than you might think.

### Formats

If you stick with obj, fbx, and gltf you will be good to go. If your object has any animations, don't use obj because that format doesn't support animated meshes. I usually stick with fbx.

### Modifiers

This tip may be Blender specific, but the lesson holds for users of any 3D software. One technique for creating face filters is to add blendshapes/shapekeys/morphkeys to a mesh. So what you do is you take your base mesh and create a shapekey (called Basis in Blender). Then you can create a new shapekey, give it a name, then adjust individual vertices. The main use case is to allow the user to animate a 3D face; I might have shapekeys for an open mouth, raised eyebrows, etc. So why is this under the modifiers section? In Blender we have the subdivision surface modifier. This smooths the geometry by adding subdivisions and is fairly common to add. The problem with this is that you cannot export shapekeys with the subdivision surface modifier. The fbx export will work, but the shapekeys will not be included. You might say to just apply the modifier and then export, but Blender doesn't let you apply this modifier if there are shapekeys (or blendshapes, I forget what Blender calls them). So if you want to create the shapekeys, you first need to apply the subdivision surface modifier. If you find yourself in this situation there is a [process you can follow here](https://blender.stackexchange.com/questions/56795/script-outdated-shape-keys-and-applying-subdivision-surface-modifier/209214#209214) or you can check out this [addon](https://blendermarket.com/products/skkeeper), although I have not personally tried it and I don't know if it still works with Blender 3.X.

The moral of this story is to do simple, minimal tests of any feature you haven't used yet to iron out the wrinkles. It is no fun to create 50 shapekeys on a mesh only to find out you can't export them because you have a subdivision surface modifier on the mesh. 
