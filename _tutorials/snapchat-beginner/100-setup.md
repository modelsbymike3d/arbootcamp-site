---
title: 'Introduction to Lens Studio'
metaTitle: 'Introduction to Lens Studio'
metaDescription: "Lens Studio is Snapchat's tool for creating lenses. It's super powerful and super flexible. While it's been designed to be easy to use, here's a quick overview of how the software is layed out."
metaImage: /snapchat-beginner/setup/setup_thumbnail.jpg
software: 'Lens Studio'
software_version: '3.0'
author: 'Michael Porter'
snapchat: 'modelsbymike3d'
instagram: 'modelsbymike3d'
twitter: 'modelsbymike3d'
youtube: 'https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg'
homepage: 'https://modelsbymike3d.com'
---

## Before you begin

If you're gonna make lenses (Snapchat's name for AR filters), you're gonna need a Snapchat account. Download the app and make one if you haven't already.

## Download and install Lens Studio

Next step is to [download Lens Studio](https://lensstudio.snapchat.com/). The current version as of this writing is 3.0.1. You don't need a high-end computer to use Lens Studio, but please check the system requirements before you buy a computer specifically for making lenses. The better the computer, the better Lens Studio will run. And don't forget that you'll probably be using some sorts of graphics programs to create assets for your lenses, so make sure your computer can run those too.

## Open up Lens Studio

Let's get started! Open up Lens Studio and you'll be greeted with the welcome screen. You probably won't be spending too much time here, but it's still good to get to know. The main banner in the middle contains useful tips/templates/tutorials, so be sure to check those out. At the top right you can sign in and then view your lenses that you've created. The templates are super useful, and I use them all the time, but we're also going to learn how to make a lot of them from scratch. For now let's just click on the "New Project" button.

![Lens Studio launch screen](../../snapchat-beginner/setup/ls-launch-screen.jpg)

Once you create a new project, you'll be taken to the main editor. Get used to seeing this window, because this is where all the magic happens. Feel free to resize the areas, and you can also drag and drop the various panels into new areas. If you change the layout and need to get back to this one, go to Window->Panels->Default Layout.

![Lens Studio main editor screen](../../snapchat-beginner/setup/ls-new-project.jpg)

## The panels

### Objects panel

![Lens Studio objects panel](../../snapchat-beginner/setup/ls-objects.jpg)

The objects panel is where you organize the different elements that make up your AR scene. This is where you add cameras, 3D objects, images, etc.

### Resources panel

![Lens Studio resources panel](../../snapchat-beginner/setup/ls-resources.jpg)

The resources panel is where you import and manage the various 3D models, graphics, scripts, materials, etc. that make up your lens.

### Scene config panel

![Lens Studio scene config panel](../../snapchat-beginner/setup/ls-scene-config.jpg)

The scene config panel is where you can change what gets displayed and in what order. We won't be in here too often, but it is an important place. Probably most important here are the live target and the capture target. The live target is what the user sees, and the capture target is what they record. If you have any sort of user interface, you'll probably be displaying it through the live target so that the recording is muddled by the UI.

### Scene panel

![Lens Studio scene panel](../../snapchat-beginner/setup/ls-scene.jpg)

The scene panel is where you lay out your actual effect. This is where you position your 3D models and images.

### Material editor panel

![Lens Studio material editor panel](../../snapchat-beginner/setup/ls-material-editor.jpg)

The material editor lets you create some pretty neat material. A material, by the way, is what controls how an object looks e.g. color, shininess, etc. There are plenty of built-in materials you can use, but you can create some pretty neat stuff here. It is a node-based editor similar to that of Blender or Unity.

### Script editor panel

![Lens Studio script editor panel](../../snapchat-beginner/setup/ls-script-editor.jpg)

Advanced effects usually require some sort of scripting. Lens Studio comes with a built-in editor, or you can use an external code editor. Don't worry if you aren't a coder, we'll go over a lot of what you need to now to still create awesome lenses.

### Inspector panel

![Lens Studio inspector panel](../../snapchat-beginner/setup/ls-inspector.jpg)

The inspector panel changes based on what you have selected in the objects panel. This is where you can change the different properties of the cameras, materials, images, etc.

### Logger panel

![Lens Studio logger panel](../../snapchat-beginner/setup/ls-logger.jpg)

The logger will tell you if there are any errors with your lens. You can also print out information from your scripts to help with troubleshooting.

### Preview panel

![Lens Studio preview panel](../../snapchat-beginner/setup/ls-preview.jpg)

The preview panel is where you can preview your lens. You can switch between still photos and video, and there are several different models/scenes to choose from depending on what sort of lens you are working on. You can also add your own footage. At the bottom you can choose the type of device to make sure your lens works on different sized devices.
