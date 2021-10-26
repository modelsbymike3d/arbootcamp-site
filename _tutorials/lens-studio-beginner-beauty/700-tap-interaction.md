---
title: "Tap Interaction"
description: "Put the user in control! Tapping the screen is a great way to switch between two choices in a lens or to let the user cycle through several choices. Learn how to do this using the behavior script and a tap to change script."
image: /images/tutorials/lens-studio-beginner-beauty/tap-interaction/thumbnail.jpg
path: lens-studio-beginner-beauty/tap-interaction
software: "Lens Studio"
software_version: "4.4"
author: "Michael Porter"
snapchat: "modelsbymike3d"
instagram: "modelsbymike3d"
twitter: "modelsbymike3d"
youtube: "https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg"
homepage: "https://modelsbymike3d.com"
---

`youtube:-v2yRfXseBc`

## Put the user in control

Sometimes when creating a lens, you might be wondering whether or not you should include a grain overlay. Or maybe you have a few different LUTs that you can't quite choose between. One option would be to create separate versions of your lens. Another option would be to include multiple options within a single lens and let the user decide what they like.

## Two choices

Let's take a look at the simplest scenario in which there are two options to choose between - perhaps it is between with or without grain, or maybe two different post effects. A super simple way to handle this situation is to use the Behavior Script. Now don't get scared by the name, we don't actually have to write any code - all the hard work has been done for us by the Lens Studio team. The Behavior Script is added through the Objects Panel and can be found under "Helper Scripts." This will add a "Behavior" object to your scene with the Behavior Script ready to be configured.

![Adding the Behavior Script in Lens Studio](/images/tutorials/lens-studio-beginner-beauty/tap-interaction/adding-behavior-script.jpg)

### Using the Behavior Script as an on/off switch

Let's start by looking at how we can use the behavior script to turn a single item on/off. This is useful if we want to enable/disable a grain overlay or enable/disable a LUT. Select the Behavior object in the Objects Panel and then take a look at the Inspector Panel. The default Trigger should be "Touch Event" with the Event Type as "Tap." This is exactly what we need, but feel free to take a look at the other triggers and event types. To enable/disable our grain or LUT, change the Response Type to "Set Enabled," click on the box next to Target and select the scene object you want to turn on/off, then change the Action to "Toggle." Now when you tap in the preview you will turn your selected object on or off each time you tap. If you want to start with your object disabled, just disable it in the Objects Panel.

![Using the Behavior Script to toggle an object on or off on tap](/images/tutorials/lens-studio-beginner-beauty/tap-interaction/behavior-toggle.jpg)

### Using the Behavior Script to switch between two objects

What if instead you want to switch between two different LUTs? Fortunately the process is nearly identical to using the behavior script as an on/off switch - we just need to add a second behavior script. You can do this by adding a component, selecting the script option, and then adding a behavior script. Or you can click on the little gear on the script component, select copy, then select paste.

![Copying a script component](/images/tutorials/lens-studio-beginner-beauty/tap-interaction/copy-script.jpg)

Once you have your second behavior script, change the "Target" of each one to be each of your LUTs (or other element you want to switch between). Then in the Objects Panel, make sure one of your LUTs is enabled and the other disabled. For example, I have two LUTs in my scene, one is named "My LUT" and the other is named "BW." My Lut starts out enabled, and BW starts out disabled. When I tap, the first behavior script will toggle My Lut to be disabled and the second behavior script will toggle BW to be enabled.

![Using two Behavior Scripts to switch between two different scene objects](/images/tutorials/lens-studio-beginner-beauty/tap-interaction/behavior-switch.jpg)

## Many choices

The behavior script is awesome. But it doesn't really work if you have more than two choices you want to let the user switch between. In this case you will need a custom script, but don't worry, I've already done all the work for you. You can download the script below, and if you are interested you can read about how to create it [here](https://arbootcamp.com/snapchat-beginner/tap-to-change).

<a href="/assets/downloads/TapToChange.lsscript" download>Download the tap to change script here</a>

Once you've downloaded the tap to change script, use the Resources Panel to import it into your project. Once you've imported the script, add it to your scene somewhere. You can create a new scene object and add it there, or you can add it to your camera. However, do not add the script to any of your LUTs (or other objects you want to cycle between). If a script is attached to an object which is disabled, it will not run. In my case I just added the script to my main camera.

Right after adding the script component you are going to see an error message in the logger. That is because we have not yet selected our script inputs. In the Inspector Panel, click on the "+ Add Value" button inside the "objects, values" section of the script. Do that for as many LUTs as you want to switch between and then assign one LUT to each input.

> Make sure you don't have any behavior scripts set to tap events if you are using this script because tapping will also trigger those.

Now when you tap in the Preview Panel you'll be able to cycle between multiple LUTs or other objects in your scene.

![Setting up the tap to change script in Lens Studio](/images/tutorials/lens-studio-beginner-beauty/tap-interaction/tap-to-change-script.jpg)

## Helpful links

- [Behavior script](https://lensstudio.snapchat.com/guides/scripting/helper-scripts/behavior/)
- [Tap to change script](https://arbootcamp.com/snapchat-beginner/tap-to-change)
