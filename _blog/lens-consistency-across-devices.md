---
contributor: April Miller
contributor_site: https://rehack.com
contributor_snapchat: ""
contributor_instagram: ""
contributor_twitter: https://twitter.com/rehackmagazine
contributor_youtube: ""
contributor_facebook: ""
contributor_linkedin: "https://www.linkedin.com/in/april-j-miller"
title: 5 Tips for Ensuring Lens Consistency Across Device Sizes
description: "Those who are new to the platform can find navigating Lens Studio to be challenging. Snapchat's AR lens technology is more advanced than many users realize. Plus, after you finally have your unique design finished, you'll have to ensure it's compatible with any device someone could use Snapchat on. Luckily, you can make this part of the process easy."
path: lens-consistency-across-devices
image: /images/blog/lens-consistency-across-devices.jpg
date: "2022-02-01"
author_bio: "April Miller is an XR tech writer for ReHack Magazine with a passion for educating readers on the technology's promising future."
---

Since its launch in 2011, Snapchat has become one of the most popular social media apps in the world, averaging over 300 million daily users. Influencers, businesses and creatives use its custom lens function to create unique interactions with millions of people. Snapchat's Lens Studio allows anyone to create their own custom lens for others to use in their snaps.

Those who are new to the platform can find navigating Lens Studio to be challenging. Snapchat's [AR lens technology](https://rehack.com/iot/how-do-augmented-reality-applications-work/) is more advanced than many users realize. Plus, after you finally have your unique design finished, you'll have to ensure it's compatible with any device someone could use Snapchat on. Luckily, you can make this part of the process easy.

## 1. Use Device Simulation

One of the easiest ways to check your lens's compatibility is to use the built-in device simulation feature in Lens Studio. This will conveniently allow you to try out your lens on various screen sizes, no matter what device you use to test it.

You can do this from Lens Studio by going to the Preview panel and scrolling down to the Device Simulation option. This is a good first step during and right after the lens creation process. Test all the simulated devices available and keep track of any that don't turn out right. Then, go back and see what is wrong with those particular screen sizes.

## 2. Check Photo and Video Mode

It's no exaggeration to say the popularity of AR tech like Snapchat lenses has skyrocketed among users in recent years. In fact, the AR, VR and MR market is [predicted to be worth over $30 billion](https://www.hzo.com/blog/waterproof-augmented-reality-products/) by 2030. These creations need to maximize functionality for creators to become a part of this exciting trend.

Snapchat lenses need to work in both photo and video mode. A user should be able to record a video while the lens UI remains responsive or the mask accurately tracks facial or body movements. While technically you can create a Snapchat lens that is only meant to be used in photo mode, it will miss out on the traffic video lenses receive.

Test a lens in video mode by going to the Preview panel in Lens Studio and setting the background to a video. Lens Studio features some you can use, or you can add your own preview clips or even use your computer's camera. Try the lens with various preview videos, and make sure to include previews featuring multiple people at the same time.

## 3. Use Pin to Edge

If you discover that your lens is not consistent across different screen sizes, there's no need to worry. This is often easier to fix than it might seem. Typically, sizing issues occur with UI, animation or other sticker-like lenses more often than mask-style lenses, which use the face for tracking and scaling.

If you find your lens is not staying in the right place on some screen sizes, you'll want to try using the Pin to Edge feature in Lens Studio. Go to the Transform tab for the object you want to fix. In the menu for Screen Transform, you will find an option for Pin to Edge, as well as Fix Size.

Pin to Edge allows you to set the padding, or empty space, between your object and the edge of any user's screen. This way, it will be oriented the same no matter what device a user has. Fix Size sets the object's size to be consistent regardless of the item it's being used on. You might have to use both settings to get your lens to work the way you want.

## 4. Check Screen Region Settings

There is one more feature you can try if using Pin to Edge or Fix Size does not make your Snapchat lens work right. One Lens Studio user [had this exact problem](https://support.lensstudio.snapchat.com/hc/en-us/community/posts/360075616651-How-could-I-make-my-UI-fit-every-screen-size) — their UI lens was not situating consistently on different screen sizes, even with Pin to Edge.

You will need to locate or add the Screen Region component to your lens on Lens Studio to fix this. After it's added, this menu will show up under your Orthographic Camera menu where Screen Transform was located.

Select the “Safe Render” setting in the Screen Region menu. This will guarantee your lens will not overlap with any of Snapchat's built-in UI elements.

## 5. Choose the Right Stretch Mode

Snapchat lenses can be used in landscape as well as portrait or selfie mode. It can be easy to forget about this function since Snapchat is mainly known for portrait-mode content. However, a lens that works in landscape will attract attention from a larger group of users. For example, you can use Snapchat lenses on desktop apps like Zoom or Microsoft Teams.

Make sure your lens is set up correctly for landscape and portrait modes by selecting the right Stretch Mode setting for your lens. There are [a few different options](https://support.lensstudio.snapchat.com/hc/en-us/community/posts/360060220471--Example-Project-Make-a-Snap-Camera-Lens-), but “fill/fit height” or “fill/fit width” are usually the best to go with. Fit height will fit the full vertical height of your lens onto any screen size. Fit width will fit the full horizontal width of your lens instead.

## Getting Creative With AR

Snapchat lenses are a great way to create fun connections with any audience. Whether you want to interact with potential customers or just get creative with your friends, AR lenses let you share memories in unique ways. These tips will ensure your next Lens Studio project works with everyone's devices.
