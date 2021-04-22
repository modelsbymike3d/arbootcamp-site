---
title: 'Add disappearing messages to your Snapchat lenses'
metaTitle: 'Add disappearing messages to your Snapchat lenses'
metaDescription: 'Learn how to add your username to a lens and make it disappear automatically!'
metaImage: /snapchat-beginner/credits/credits_thumbnail.jpg
software: 'Lens Studio'
software_version: '3.1'
author: 'Michael Porter'
snapchat: 'modelsbymike3d'
instagram: 'modelsbymike3d'
twitter: 'modelsbymike3d'
youtube: 'https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg'
homepage: 'https://modelsbymike3d.com'
---

`youtube:SqDPwVhznp4`

In this tutorial we'll go over how to add credits to your lens/filter. Adding credits or a call-to-action to your lens could potentially help you grow your subscriber base or credit another creator with whom you've collaborated, but you don't want it to be obtrusive. Here you'll learn how to fade out the credits after several seconds and also ensure it never shows up while the user is taking a picture or video.

## Setting up the scene

For this tutorial we are going to start with a blank project, but it is easy enough to add to an existing lens. In the Objects Panel, add some [Screen Text](https://lensstudio.snapchat.com/guides/2d/text/), a [Behavior Script](https://lensstudio.snapchat.com/guides/scripting/helper-scripts/behavior/) (found in the Helper Scripts submenu), and a [Tween Manager](https://lensstudio.snapchat.com/guides/scripting/helper-scripts/tween-manager/) (also in the Helper Scripts submenu).

## Configure your text

When you added the Screen Text, you may have noticed that it was nested underneath a [Full Frame Region](https://lensstudio.snapchat.com/guides/2d/screen-transform/screen-region-device-simulation/). Select this frame region, and then over in the Inspector Panel change the Screen Region from `Full Frame` to `Safe Render`. Why? Well, the Snapchat interface will cover up parts of the top and bottom of the screen. The `Safe Render` region makes sure our content is not covered by the Snapchat UI. Once that is done, go ahead and edit your text. You can change the font, the size, the position, etc.

## Configure the scripts

When the Tween Manager is added to a scene, it brings along a bunch of examples. Find the Tween Manager in the Objects Panel and delete all the examples nested under it. If your Behavior script got nested under the Tween Manager, make sure to leave that. Move the Tween Manager to the top of the scene hierarchy and rename the Behavior script to something like 'Credits.' Your setup should look something like the below image.

![Scene setup in the Objects Panel for adding disappearing credits to a lens](../../snapchat-beginner/credits/scene_setup.jpg)

### The behavior script

Our first task will be to make sure our lens credits are never visible while the user is taking a picture or video. For that we will use the Behavior script. Select the Credits script object in the Objects Panel so that the script options are visible in the Inspector Panel.

- Change the trigger to `Recording Start`
- Change the response type to `Set Enabled`
- For the target choose your Screen Text
- Set the action to `Disable`

We'll still be adding the fade-out effect, but this behavior script makes sure that if the user takes a snap before the credits have faded out that they aren't present in the captured image/video.

![Behavior script setup for disabling an object when recording starts](../../snapchat-beginner/credits/behavior_script.jpg)

### Fading out with tweens

What is a tween? If we were normal people we'd be referring to a pre-teen, but since we are making lenses, it means something else. Tweening is short for 'inbetweening.' We have a start value and an end value and the tween script will take care of calculating all the inbetween values. These could be position, rotation, or scale values, but in our case we are going to use alpha (transparency) values.

Underneath the script options we just set for the Behavior script, click the 'Add Component' button and choose 'Script.' Click the 'Add Script' button and then find the `TweenAlpha` script. It is found in Tween -> TweenTypes -> TweenAlpha.

- For the Scene Object, choose your Screen Text
- Change the `Start` value to 1 (fully visible) and the `End` value to 0 (fully transparent)
- `Time` will be how long the transition lasts and `Delay` will be how long before the transition begins
- `Easing Function` will determine how the transition occurs. Most of the easing functions will give smooth transitions, the main difference being the speed at which the transparency changes at different stages.

A fun example to try would be a `Time` value of 0.3, a `Delay` of 3.0, and an `Easing Function` of Bounce. This gives a nice flickering out effect, but feel free to try out different easing functions, times, and delays to find what suits your lens best.

![Tween script setup for fading out an object after some amount of time](../../snapchat-beginner/credits/tween_script.jpg)

## Further reading

- [Screen Text](https://lensstudio.snapchat.com/guides/2d/text/)
- [Tween Manager](https://lensstudio.snapchat.com/guides/scripting/helper-scripts/tween-manager/)
- [Behavior Script](https://lensstudio.snapchat.com/guides/scripting/helper-scripts/behavior/)
- [Full Frame Region](https://lensstudio.snapchat.com/guides/2d/screen-transform/screen-region-device-simulation/)
