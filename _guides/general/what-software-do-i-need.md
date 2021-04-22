---
title: What software do I need for creating augmented reality?
description: You don't need much to get started in augmented reality, but there are some things you won't be able to do without the help of external software. Here are my recommendations.
path: general/augmented-reality-software
image: /images/guides/people-software.jpg
platform: General
software:
---

To create augmented reality (AR) experiences, you are going to need some software! This list is by no means exhaustive, but it is a good resource for starting out and finding some suggestions.

## Augmented reality

Let's start with the most obvious, the AR creation software! This is where you are going to have the least amount of choice because each platform has its own software.

### Social AR

Social AR refers to AR embedded within a social media app. The big players here are Snapchat and Instagram, although you can also build for Facebook/Messenger. TikTok also has some AR creation software, but it is not widely available yet. If you are getting started in AR, I recommend starting here because it is both easy and free. Most WebAR and integrated solutions require money and/or more technical knowledge, so Social AR is a good way to test the waters before jumping in too deep.

- **_Lens Studio_** - Want to build AR experiences for Snapchat? Lens Studio has you covered! Lens Studio is developed internally by Snapchat and may just be the most full-featured AR software out there. You can build something as simple as putting freckles on someone's cheeks all the way up to an [AI powered game of bingo](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5e432fc7161d483aa833294bcb6dfa25&metadata=01). You can [download Lens Studio here](https://lensstudio.snapchat.com/download/) for either Windows or Mac. Make sure you check the system requirements; you don't need a high-end computer to run Lens Studio, but the better your computer, the better Lens Studio will run.

- **_Spark AR Studio_** - Also referred to as just Spark AR, this is Facebook's software for creating AR experiences for Instagram, Facebook, and Messenger. It is not nearly as powerful as Lens Studio and they have more restrictions as far as what you can submit. For the most part a filter built for Instagram will also work on Facebook/Messenger and vice versa, but there are a few features that don't work between platforms. You also can't upload your filter to all three platforms simultaneously. You'll have to upload to Instagram and to Facebook/Messenger separately. Why? I'm not quite sure. You can [download Spark AR here](https://sparkar.facebook.com/ar-studio/download/) for Mac or Windows. Just as with Lens Studio, the better your computer, the better Spark AR will run.

### WebAR

WebAR uses a mobile web browser for the AR experience rather than a standalone app. The pros to this approach are reach because no app download is required, and integration with your website. You can run the AR experience directly on your site so it is easier to integrate calls-to-action and also way faster to update due to the lack of a review process (as there is with Social AR). A big downside is performance though because web browsers don't have the same access to the device as do native apps.

- **_8th Wall_** - [The 8th Wall](https://www.8thwall.com/) is pretty good as far as WebAR goes. They have face tracking, image tracking, and floor tracking - all very necessary features for AR. However, whereas both Lens Studio and Spark AR are free to use, 8th Wall is not. It does come with a 14 day free trial, but it appears to be more suited towards agencies or large companies. If you are just a hobbyist the pricing is pretty prohibitive. But if you need to create a browser based AR experience, they are a great choice.

- **_Zappar_** - [Zappar through Zapworks](https://zap.works/webar/) is another choice for WebAR, although they also provide the ability to integrate AR directly into your own app. Starting out they do seem more affordable than 8th Wall, but I'm not sure how the pricing scales up. Definitely worth checking out though.

- **_Open Source_** - Don't want to pay for WebAR? It does become a little more tricky. There is not yet an all-in-one solution, so you'll have to pick and choose depending on what you want to do. For image tracking you can checkout [AR.js](https://ar-js-org.github.io/AR.js-Docs/) and for face tracking you can try [Jeeliz](https://jeeliz.com/). I've yet to find a good object for floor tracking, but it is on the roadmap for AR.js.

### App integration

Maybe you have your own app and you want to integrate an AR experience in there? There are a few different options to check out.

- **_Zappar_** - [Zappar through Zapworks](https://zap.works/) already got a mention for WebAR, but they also provide an SDK to add AR directly to your own app.

- **_Vuforia_** - [Vuforia](https://developer.vuforia.com/) is another set of tools for adding AR to your app. They support Unity, iOS, Android, and UWP. Once again it does cost money, but they do offer free developer licenses for trying it out first.

- **_Unity_** - Unity is a game engine, but they are also getting into augmented reality. You can build an augmented reality app purely in Unity, or [they also allow you to use Unity as a library](https://blogs.unity3d.com/2020/09/16/add-unity-powered-features-to-your-app-using-unity-as-a-library/) to add AR to your own app.

- **_Unreal_** - Unreal is another game engine providing AR capabilities. You can [definitely build an AR app with Unreal](https://docs.unrealengine.com/en-US/Platforms/AR/HandheldAR/AROverview/index.html), but I'm not sure if you can integrate that with your own app yet.

- **_Snapchat Camera Kit_** - A new offering is [Camera Kit by Snapchat](https://kit.snapchat.com/camera-kit). Basically Snapchat lets you use their camera software in your app which means you can also load in Snapchat lenses. You have to request access, but Snapchat's AR tech is some of the best out there. Definitely worth a look.

## 3D creation

Okay, so you've got your AR software of choice, but you still need something with which to augment reality. If you are already a 3D designer, you probably have your software of choice. If not, we have [a whole page](/general/getting-started-3d) with some tips for getting started in 3D.

## 2D creation

Besides 3D objects, you'll also need some 2D assets for face masks, buttons, etc. Here are a few options for you to take a look at.

### Raster graphics

Raster graphics are what you are probably most familiar with. Simply put, they are images consisting of pixels - think photographs. Since there is a set number of pixels, you can easily decrease the image size, but increasing the image size will make it blocky/blurry. Here are a few options:

- **_Photoshop_** - [Photoshop](https://www.adobe.com/products/photoshop.html) is probably the best known image editor - it's become its own verb after all! You can get it for as low as about $10 a month. Some people don't like the subscription model, but Photoshop is an industry standard and price-wise actually isn't too bad. If you are just getting started, $10 a month is a lot more reasonable than a one time payment of several hundred dollars.

- **_Lightroom_** - [Lightroom](https://www.adobe.com/products/photoshop-lightroom.html) is more for photo editing, but you can use your presets (or create new ones) to add color grades to your AR filters. I think you get Lightroom included when you get a Photoshop subscription, so it's worth learning if you ever want to apply color effects.

- **_Affinity Photo_** - [Affinity Photo](https://affinity.serif.com/en-us/photo/) is a pretty good alternative to Photoshop. I don't believe it is quite as full-featured, but it is still extremely powerful and probably more than adequate for preparing images for augmented reality. It is a one-time purchase of about \$50, so very affordable.

- **_GIMP_** - If you are looking for a no-cost editor, [GIMP](https://www.gimp.org/) is your go-to. It is pretty similar to Photoshop in terms of functionality and is powerful in its own right.

- **_Krita_** - [Krita](https://krita.org/en/) is geared more towards painting and drawing than image editing, but if that's your thing, I'd definitely check it out. Like GIMP, it is also free to download and use.

- **_Photopea_** - [Photopea](https://www.photopea.com) is a free, online Photoshop alternative. It doesn't have quite as many features as Photoshop, but it is still quite capable and can do more than you might expect from a free online tool.

### Vector graphics

Vector graphics are representations of shapes rather than a group of pixels. What this means is that you can view the image at any size and it will never get blocky or blurry. You will probably still have to export your vector images as raster images though, but you'll have the ability to choose your resolution. I would say for augmented reality you'll mostly be using vector graphics to create things like buttons or frames.

- **_Illustrator_** - Once again we have Adobe with the industry standard in the form of [Illustrator](https://www.adobe.com/products/illustrator.html). Like Photoshop you'll be paying monthly, but if you do a lot of work with Illustrator it might be worth it.

- **_Affinity Designer_** - Just like we have Affinity Photo as an alternative to Photoshop, we have [Affinity Designer](https://affinity.serif.com/en-us/designer/) as an alternative to Illustrator. Like Affinity Photo, you will only have your one-time payment of \$50.

- **_Inkscape_** - And if you are looking for a free vector graphics editor, we have [Inkscape](https://inkscape.org/). It might not be as polished as Illustrator or Affinity Designer, but it is still extremely capable and worth checking out if you don't have the money to spend on the other options.

## Other

Most AR work will probably be focused on the design, but here's some other software that you might find useful.

### Video

Now video files can get big pretty fast and that's a problem for AR. The longer an experience takes to load, the less likely someone is to use it. However, it is still useful to have some video editing software. You can use it to put together demo videos to get people interested in your effect, and some designers like to use something like After Effects to create short animations for use in their effects.

### Backups

It is always good practice to maintain a backup of your work. Whether this be an external hard drive or cloud based is up to you. I save all my work to OneDrive so that I always have a backup and can access it anywhere. This came in handy when I had to send my laptop in for repairs and borrowed my wife's computer in the interim.

## Conclusion

Both Lens Studio and Spark AR provide enough capabilities for you to get started without relying on outside software, but having 3D and 2D design software is required once you need to start generating/preparing assets. Fortunately there are a ton of options, each with many tutorials to help you get started. The only limits to what you'll be able to create are your imagination and the technical limitations of the AR platform. Have fun creating!
