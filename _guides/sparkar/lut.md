---
title: Color effects with LUTs in Spark AR Studio
description: Instagram lets you add filters when you post, but what about for AR effects? Learn how to create your own color effects using LUTs in Spark AR!
path: sparkar/color-effects
image: /images/guides/sparkar-lut.jpg
platform: Instagram
software: Spark AR
---

If you've ever used Instagram, I'm sure you're familiar with filters. Filters are a quick and easy way to adjust the colors and tones of your images and videos. Instagram makes this super easy by providing presets when you are creating a post, but what about for your augmented reality filters? Fortunately there are plenty of resources out there to help make this process super easy. A popular way to do this is with a lookup table, or LUT for short.

> Be sure to test your color effect on people with varying skin tones. Some LUTs that look good on people with lighter skin will sometimes make darker skin turn very orange. Spark AR has done a good job of including both male and female individuals of various ethnicities in the [video selector in the toolbar](https://sparkar.facebook.com/ar-studio/learn/articles/fundamentals/navigating-the-interface#the-toolbar-and-menu-bar). Use this to make sure your effect looks good on everyone.

## Using LUTs

If you are a photographer, you probably have at least a few Lightroom presets. It is pretty easy to take your presets, turn them into LUTs, and then use those LUTs within Spark AR. This tutorial by Till walks you through the whole process, from exporting the LUT to importing into Spark AR and finally submitting your finished effect.

`youtube:ltLyDMl3FKo`

For some pre-made LUTs, take a look at this tutorial by Josh Beckwith. He's graciously [provided several pre-made LUTs](https://github.com/positlabs/spark-lut-patch) that you can download and use in your own filters. As he demonstrates in the video, you can use LUTs to not only create some nice aesthetic effects, but also some pretty zany effects too.

`youtube:lxF-ecbkbr4`

Now, using a LUT doesn't guarantee you'll get good results, so watch the following video for some more tips and tricks to get a good looking result.

`youtube:9xM1rbc4y-E`

## Doing it manually

This method is a little more complicated, but you can use the patch editor in Spark AR to create color effects without relying on outside software. While it's a more complicated setup, you can integrate specific aspects of your color correction more deeply with the rest of your effect (e.g. change it based on user interaction). For a breakdown of how to do this manually, [Spark AR themselves provide a short tutorial on the subject](https://sparkar.facebook.com/ar-studio/learn/tutorials/color-filters/).
