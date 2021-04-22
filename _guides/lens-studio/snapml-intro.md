---
title: Getting started with SnapML
description: Want to get started with machine learning in Lens Studio but don't know how? SnapML is still pretty new, but there are some awesome resources you can use to get started.
path: lens-studio/snapml-intro
image: /images/guides/snapml-intro.jpg
platform: Snapchat
software: Lens Studio
---

Want to add some machine learning to your lenses with SnapML but don't know how? Don't worry! You don't need to be a machine learning expert to get started. In fact, it's possible to get started with zero background in machine learning or programming and without spending a dime. Let's see how!

## No code - Fritz AI

[Fritz AI](https://www.fritz.ai/) is an online platform that lets you create machine learning models without the need to write a single line of code. It is a paid platform, but they do offer a free tier. When you sign up, select `Studio` for the type and then choose the `Sandbox` subscription. Besides being a no-code solution, what's so great about Fritz AI? They actually have an entire workflow specifically for SnapML! For the style transfer template, all you need to do is create your project, choose your image, wait for it to train, and then you can download a Lens Studio project file. You will have to setup a few things in the file for it to work, but the project comes with instructions on everything you need to do. I gave it a try and it was a super painless experience. I definitely recommend giving Fritz AI a try.

## Lens Studio templates

Lens Studio also [provides several SnapML templates](https://lensstudio.snapchat.com/guides/machine-learning/lens-templates/) with step-by-step tutorials on how to customize and use them. It isn't as straightforward as clicking a few buttons like in Fritz AI, but it still isn't too difficult at all. All the models for their templates can be trained using [Google Colab](https://colab.research.google.com/). Training a machine learning model is best done with an Nvidia graphics card, but not everyone has one of those. Google Colab is cloud-based so they provide all the hardware you need to train machine learning models, and they also have a free tier that is usually more than adequate for your SnapML needs.

## Pre-built models

The [ONNX Model Zoo](https://github.com/onnx/models) is a great resource of pre-trained, ready to use models. Not all models are small enough to fit inside a lens, nor are all the models compatible with SnapML, but it is still a great starting place. For my [Bingo lens](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5e432fc7161d483aa833294bcb6dfa25&metadata=01) I started with the SqueezeNet model and retrained the classifier on a different dataset, so even if the model isn't exactly what you need, it can still be better than starting from scratch.

## Setting out on your own

Both Fritz AI and the Lens Studio templates are great, but their ease of use comes with a loss of flexibility. If you are a power user, you may need to train models from scratch on your own. Here are a few tips for working with SnapML.

- **_Model sizes_** - SnapML models are limited to 10 MB. Now, there are a few quirks with this. Lens Studio does some sort of conversion when they read the models, and there's an optional compression option when you import, so you can load models that are initially larger than 10 MB. It might take a little trial and error to dial in your model sizes.
- **_Model format_** - SnapML only supports the `onnx` and `pb` formats, so make sure you can convert your model to either of those formats.
- **_Layer compatibility_** - Not all layer types are supported by SnapML, and some are supported only on certain architectures (CPU vs GPU). Lens Studio provides a [list of CPU/GPU compatibility](https://lensstudio.snapchat.com/guides/machine-learning/compatibility/) for various layers, but I'm not sure if there's a list of all the layers supported by SnapML in general. What I recommend is once you've settled on a model architecture, to train it briefly and export it to make sure all the layers can be read by Lens Studio. That way you won't waste hours or days of training only to find out your model isn't compatible with Lens Studio!
- **_Layer scaling_** - Image textures in Lens Studio work on a 0-255 scale, but your model probably works on a 0-1 scale. You may need to set the scale on your inputs to 0.00392 (convert your scale from 0-255 to 0-1) and then on the outputs set the scale to 255 (convert from 0-1 to 0-255). This will of course depend on your particular model, but it is something you need to keep in mind.

## In closing

Machine learning is becoming more and more accessible to end users, and it is possible to get started without having a background in machine learning. Jump in, play with the templates, and then learn what you need as you go! Good luck creating! Who knows, maybe you'll be the one to create the next big hit like the [Anime filter](https://www.theverge.com/2020/10/20/21525427/snapchat-earnings-q3-2020-anime-lens-3-billion-uses)!
