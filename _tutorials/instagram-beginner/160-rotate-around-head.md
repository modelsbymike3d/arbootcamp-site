---
title: 'Make objects rotate around the head in Spark AR'
metaTitle: 'Make objects rotate around the head in Spark AR'
metaDescription: 'In this Spark AR tutorial you will learn that making objects rotate around the head is super easy to do. All it takes is a little scene setup and the click of a button.'
metaImage: /instagram-beginner/rotate-around-head/thumbnail.jpg
software: 'Spark AR Studio'
software_version: 'v109'
author: 'Michael Porter'
snapchat: 'modelsbymike3d'
instagram: 'modelsbymike3d'
twitter: 'modelsbymike3d'
youtube: 'https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg'
homepage: 'https://modelsbymike3d.com'
---

`youtube:8Ezbm9mjAuk`

In this Spark AR tutorial you'll learn that making objects rotate around the head is super easy to do. All it takes is a little scene setup and the click of a button. You can see an example of this effect in action [by clicking here](https://www.instagram.com/ar/1393628470978921/) or by scanning the code below.

![QR code leading to an example effect for Instagram with objects rotating around the head](../../instagram-beginner/rotate-around-head/qr-code.png)

## Setting up the scene

Let's start by importing a couple things down in the Assets Panel. The first thing I want to do is open up the AR Library and search for the "Head Occluder." Once that is imported, import your 3D object(s). In my case I'm just going to import a sphere from the AR Library.

Next up I'm going to add a Face Tracker and a Null Object to my scene. Drag the "headOccluder" from the Assets Panel up to the face tracker and then nest the "nullObject0" under the face tracker and below the head occluder. Adjust the position of the null object to where you want the center of rotation to be and then adjust the position of your nested 3D object

![Scene setup for rotating objects around the head in Spark AR](../../instagram-beginner/rotate-around-head/scene-setup.jpg)

## Add the rotation

Select the null object, and then way over in the top right of Spark AR click on "Actions," go to "Animate," and then select "Spin." This will open up the patch editor and your object should now start spinning. You can adjust the speed of the rotation by changing the "Duration" value on the Loop Animation patch. You can add as many 3D objects as you want to the scene and they will also rotate if they are parented to the null object.

![Patch setup for rotating objects around the head in Spark AR](../../instagram-beginner/rotate-around-head/patch-setup.jpg)

## Further reading

- [Actions](https://sparkar.facebook.com/ar-studio/learn/articles/fundamentals/actions)
- [Patch Editor](https://sparkar.facebook.com/ar-studio/learn/patch-editor)
- [Face Tracker](https://sparkar.facebook.com/ar-studio/learn/articles/people-tracking/face-tracker)
- [Occluders](https://sparkar.facebook.com/ar-studio/learn/articles/3D/occluders)
- [3D Objects](https://sparkar.facebook.com/ar-studio/learn/articles/3D/3D-objects)
- [Null Objects](https://sparkar.facebook.com/ar-studio/learn/articles/3D/null-objects)
