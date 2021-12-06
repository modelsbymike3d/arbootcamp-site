---
title: "Shadertoy to SparkSL Conversion"
description: "SparkSL is a super powerful feature of Spark AR - with it you can create your own shaders with code. However, there are some key differences between SparkSL and GLSL which can make converting existing shaders tricky. This tutorial will go over the process of converting a shader from Shadertoy to Spark's own SparkSL."
image: /images/tutorials/instagram-advanced/shadertoy/thumbnail.jpg
path: instagram-advanced/shadertoy
software: "Spark AR Studio"
software_version: "v127"
author: "Michael Porter"
snapchat: "modelsbymike3d"
instagram: "modelsbymike3d"
twitter: "modelsbymike3d"
youtube: "https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg"
homepage: "https://modelsbymike3d.com"
---

`youtube:-uNhzkUSPH8`

SparkSL is a super powerful feature of Spark AR - with it you can create your own shaders with code. However, there are some key differences between SparkSL and GLSL which can make converting existing shaders tricky. This tutorial will go over the process of converting a shader from Shadertoy to Spark's own SparkSL. You can view an example of this type of filter [by clicking here](https://www.instagram.com/ar/873168960041924/) or by scanning the code below.

![QR code leading to a crosshatch effect built using SparkSL](/images/tutorials/instagram-advanced/shadertoy/qr-code.png)

## SparkSL

What is SparkSL? [SparkSL](https://sparkar.facebook.com/ar-studio/learn/sparksl/sparksl-overview) is a superset of GLSL 1.0 which is a shading language; it defines how light interacts with an object. Generally in Spark AR you would use image textures and material parameters to change how something looks. With SparkSL you get a lot more control, albeit with the added complexity of having to write it in what is basically C.

The great thing about being based on GLSL is that there are many shaders available on [Shadertoy](https://www.shadertoy.com/). However, there are some key differences which means that you cannot simply copy and paste code from Shadertoy. Spark's official documentation isn't exactly detailed, but there is a [fantastic GitHub repo](https://github.com/aferriss/sparksl-shader-examples) with lots of helpful code examples. I am no GLSL expert, but that repo helped me convert a Shadertoy shader to SparkSL and I want to share what that process is like.

## The original shader

I decided to go with a cool effect I didn't think I could do through the patch editor, yet was simple enough for my first time trying SparkSL. I found an awesome [crosshatch](https://www.shadertoy.com/view/MdX3Dr) shader that I successfully converted. Feel free to use this same shader to follow along.

## Getting the code into Spark AR

Head over to Spark AR, save your project, add a shader code asset, and click the "Edit" button in the Inspector Panel. This will open the file in your computer's default code editor. I am using VS Code and I've installed the [Spark AR extension](https://sparkar.facebook.com/ar-studio/learn/scripting/vs-code-extension) which gives code highlighting and autocomplete suggestions for their shader code (.sca files). Make sure the Console is visible (via the View menu) and make a small change to the example code. You should see a message in the console about compilation finishing successfully. If you see the message, you are good to go! If you don't see the message, you may have opened the shader code for editing before you saved your project. Your opened code is a temporary file so you'll want to click the "Edit" button again to open the correct file.

Now copy the code from Shadertoy and replace the example code in your code editor. Spark will automatically monitor the file for changes and re-compile when changes are detected (e.g. when you save the file). You should now see an error in the console - that is expected at this point.

## Fixing the errors

It is not glamorous, but really your best approach is to fix the errors one by one as you see them in the console. My first error happens at line 35 and has to do with the undeclared identifier 'iResolution'. Shadertoy supplies a few different inputs to the shaders automatically, but no such thing happens with SparkSL. All I need to do for this particular error is make sure my image resolution is defined. Fortunately there is an example of this in the previously mentioned GitHub repo down at the very bottom of the Readme. To define my resolution, I am going to add `vec2 iResolution = std::getRenderTargetSize();` to the `lookup` function. Now when I save my file I see a different error, so at least we've resolved the resolution issue.

This next issue says that "texture" is undeclared. In GLSL, we access image info using the texture function, but SparkSL works fairly different in this respect. The first thing I am going to do is add the texture as another input to the function with `std::Texture2d myTex`. Next I am going to use `myTex.sample(uv.xy)` instead of the texture function. Once I save my file, the texture error should disappear. My `lookup` function now looks as follows:

```C
float lookup(std::Texture2d myTex, vec2 p, float dx, float dy)
{
    vec2 iResolution = std::getRenderTargetSize();
    vec2 uv = (p.xy + vec2(dx * d, dy * d)) / iResolution.xy;
    vec4 c = myTex.sample(uv.xy);

	// return as luma
    return 0.2126*c.r + 0.7152*c.g + 0.0722*c.b;
}
```

## The main function

Before we keep fixing errors, let's take a quick look at the `mainImage` function. In GLSL, we define the `out` and `in` variables. In SparkSL, we just specify the arguments that the function is called with and return a value. In my experience I can use the `out` and `in` keywords and the shader patch shows the inputs and outputs, but when I try using it I get an error, so I just use function arguments for the inputs and provide a return value. In our case we are going to call this function with a texture argument, so replace the in portion with `std::Texture2d myTex` (omit the in). You should now see an undeclared identifier error for 'fragCoord' that you can fix with the following code: `vec2 fragCoord = fragment(floor(std::getRenderTargetSize() * std::getVertexTexCoord()));` (from the GitHub repo examples).

Change the return type of the function from `void` to `vec4` and then you'll also want to go to the very bottom of the `mainImage` function and make sure `fragColor` is defined as a vec4 and then return that value.

## Plug and chug

At this point you'll just be going through each error and fixing them one by one. Anything referring to "iChannel0" is going to be the input texture. Also, since we changed the arguments for the `lookup` function, you'll want to be sure to pass `myTex` as an argument when you call that function. Don't worry, the console will be there to tell you where the errors are. Once you get to the "global variables mush be const-declared" errors, just add `const` in front of any variable definitions that happen outside a function.

## Using the patch

Once you get your code to compile successfully, create an asset patch and wire it up! I used the camera texture for my input and used the output to set the texture for a rectangle.

## Further reading

- [SparkSL](https://sparkar.facebook.com/ar-studio/learn/sparksl/sparksl-overview)
- [SparkSL Shader Examples GitHub](https://github.com/aferriss/sparksl-shader-examples)
- [Shadertoy](https://www.shadertoy.com/)
