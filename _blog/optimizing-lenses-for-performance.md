---
contributor: April Miller
contributor_site: https://rehack.com
contributor_snapchat: ""
contributor_instagram: ""
contributor_twitter: https://twitter.com/rehackmagazine
contributor_youtube: ""
contributor_facebook: ""
contributor_linkedin: "https://www.linkedin.com/in/april-j-miller"
title: 8 Tips for Optimizing Your Lens for Peak Performance
description: "Optimizing augmented reality (AR) lenses on Lens Studio or SparkAR is easy with a few simple tricks. AR lenses have become extremely popular on social media, and creating original ones can be a fun and creative way to connect with online audiences and communities. "
path: optimizing-lenses-for-performance
image: /images/blog/optimizing-lenses-for-performance.jpg
date: "2022-03-10"
author_bio: "April Miller is an XR tech writer for ReHack Magazine with a passion for educating readers on the technology's promising future."
---

Optimizing augmented reality (AR) lenses on Lens Studio or SparkAR is easy with a few simple tricks. AR lenses have become extremely popular on social media, and creating original ones can be a fun and creative way to connect with online audiences and communities.

However, if an AR lens isn't optimized correctly, it won't perform well for users and may not even be eligible for uploading on some sites. These strategies will help [optimize your augmented reality lens for success](https://rehack.com/iot/how-do-augmented-reality-applications-work/), whether you are using Lens Studio or SparkAR.

## Optimizing in Lens Studio

Lens Studio is Snapchat's in-house lens creation software. People using it should be aware that Snapchat has specific requirements for uploading lenses to its app. They have to be 8MB or smaller to be uploaded and cannot take up more than 120 MB of RAM when downloaded to users' devices. Strategic optimization can help meet these goals.

### 1. Minimize Technical Specs

Unnecessarily large file sizes can quickly put lenses over Snapchat's memory limits. Bulky audio, graphics and images also make lenses harder for devices to run, so [minimizing these elements](https://support.lensstudio.snapchat.com/hc/en-us/articles/360031554471-How-do-I-optimize-my-Lens-if-it-s-over-8-MB-in-size-) is important. Snapchat recommends all audio files be in mono .mp3 format. Images should be compressed as much as possible without ruining the quality. 3D elements should be kept to 10,000 triangles maximum.

### 2. Simplify and Streamline

It's important to remember that AR and VR are extremely different technologies. An AR lens should add virtual elements to the real world, not attempt to replace them. Lenses with intense graphics demands will struggle heavily on many devices. Keep lenses simple and straightforward to optimize the file size of the lens and make it easier for people to use.

### 3. Minimize Animated Textures

Animated textures can be a fun way to make a lens stand out online. Unfortunately, they also consume a lot of memory and processing power. You can still use them in your lenses, but be mindful of how much they are used. For example, lens experts suggest [only animating the specific parts](https://medium.com/lens-studio/tips-and-tricks-e69f1092d0f4) of an image that visibly move. You can even use Lens Studio's tween or UV scrolling functions in place of animated textures.

### 4. Use JPG Images if Possible

Many people aren't aware that JPG format images take up much less space than PNG. The two file types are often used interchangeably for still images. However, when it comes to optimizing AR lenses, always go with JPG. It compresses images more, making them easier to render. Only use PNG for images that need to be transparent since JPG does not support this function.

## Optimizing in SparkAR

Lens Studio is not the only software for making AR lenses. As of 2016, Snapchat was the [third largest social media platform](https://www.ecoatm.com/blogs/news/time-americans-spend-on-phones) in average daily viewing time, but Instagram is close behind and TikTok is rapidly on the rise. SparkAR has emerged as a great alternative to compete with Lens Studio. Creators can use these tailored tips to optimize their SparkAR lenses.

### 1. Reduce Capabilities and Segmentation

When you add effects in SparkAR, certain technical features, called capabilities, are automatically included, such as face tracking. Capabilities can greatly impact lens performance if too many are added. If your lens has a large file size or isn't running well, [check the number of capabilities](https://sparkar.facebook.com/ar-studio/learn/articles/fundamentals/technical-guidelines/#reducing-the-impact-of-capabilities-and-features) in the project properties menu and see if you can remove any. Additionally, remember not to use segmentation and face tracking on the same lens since the two combined are extremely processor intensive.

### 2. Use the SparkAR Toolkit

SparkAR [has a specially designed optimization tool](https://sparkar.facebook.com/ar-studio/learn/articles/creating-and-prepping-assets/toolkit-for-blender) that can be extremely helpful for those who like to create their animations and objects in Blender. The SparkAR Toolkit can be downloaded from SparkAR's website and installed as an Add-On within Blender. The Toolkit will optimize Blender projects for SparkAR, reducing weight and improving performance.

### 3. Minimize Alpha Channel Textures

Alpha mapping can improve the appearance of lenses, but it isn't always necessary. It can significantly impact a lens's performance, so minimizing it is always a good idea. It is important to remember that alpha channel texture recommendations differ between devices and types. Make sure to [check the recommended settings](https://developers.facebook.com/docs/ar-studio/docs/compression) for certain items before compressing your lens.

### 4. If It Works, Reuse It

Creating an AR lens is a complex, processor-intensive activity. Try reusing an element or texture that performs well in action. You can often reuse the same components within the same lens, as well. A recurring theme with AR is simplification. Creating a great experience doesn't require detailed graphics and dozens of unique assets. Focusing on the quality of elements in your lens over the quantity will boost performance and improve accessibility.

## Creating Peak Performance Lenses

AR lenses are a fun, interactive way to refresh your social media content and participate in online communities. Creating a lens designed for peak performance starts with intensive optimization. Diving into the specs and layers of your project may seem tedious at first, but it will lead to much better performance and improve the creation process in the future. Well-optimized lenses will be easier and more enjoyable to use, leading to a rewarding creator experience on any platform.