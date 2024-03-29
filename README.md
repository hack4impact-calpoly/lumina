# **Lumina**

## **Team**

The Lumina project team consists of 6 Cal Poly students, including:

- Kenzie Rutherford - Project Manager
- Skyler Han - Co-tech Lead
- Vincent Pheng - Co-tech Lead

## **Usability Testing on Mobile**

This is pretty much only useful when you want to test the usability of a page with a touchscreen. If you just want to know what your page will look like on a mobile-sized screen, see the next section.

1) Find out your computer's IPv4 Address (google)
2) Type that IPv4 address into your phone's browser
3) Add ":3000" at the end

Example: "192.168.1.234:3000"

## Mobile UI Testing

You can see how your site will look on a mobile device without going on your phone through your desktop browser. As far as I am aware, it's only possible on firefox.

1) Open up the developer console
2) In the top right, you'll see an icon that looks like a phone and a tablet. Click that
3) That should change your current page to a scalable version that allows you to test different dimensions and screen sizes
4) Refresh the page.
5) Now you have access to the developer console for debugging responsiveness.

## **Chakra UI**

### **What is Chakra UI?**

Chakra UI is a CSS component library for React that is intended to help streamline CSS styling in react projects. In other words, it's supposed to be a work around to CSS files by introducing custom components (such as `<Box>`) that are intended to replace built in HTML components (such as `<div>`). We'll get into why this replacement helps us later.

Let's be clear, our usage of Chakra UI is not because we could do more with Chakra UI. Fundamentaly everything we do in Chakra UI is still converted into regular CSS so it's not like it's opens new doors on what we **can** do. What it does do is allow us to do 90-95% of the features and UI with about 50-60% of the work required if we were doing it manually.

I guess inadvertenly since Chakra UI is really quite easy to implement into our code, it does kind of allow us to do more since so much of the heavy lifting is done for us so we are inclined to do more. Like Chakra UI has a `<Drawer>` component which is essentially a component that slides in when you activate a trigger, making the page feel more dynamic with pretty much no extensive work (I can't even begin to imagine the amount of work needed to do something like that in raw CSS)

### **Replacement Table**

Below is a table for the most common HTML tags/components and what the corresponding Chakra UI tag/component is.

| HTML Tag/Component       | New Chakra UI Tag/Component          |
|--------------------------|--------------------------------------|
| `<div>`                   | `<Box>`                               |
| `<h1>`, `<h2>`, `<h3>`, etc... | `<Heading>`* (specify level within tag) |
| `<input>`                  | `<Input>`                              |
| `<button>`                | `<Button>`                            |
| `<input type="checkbox">`  | `<Checkbox>`                          |
| `<input type="radio">`    | `<Radio>`                              |
| `<p>`                      | `<Text>`                              |

Essentially, everytime you find yourself using a built in HTML tag, google that tag + "Chakra UI" and you'll likely find a Chakra UI equivalent. Simply changing the tag to the Chakra UI equivalent is already going to be doing the most heavly lifting (tbh vanilla Chakra UI looks pretty good), but if you want to get into component customization, see the next section.

Keep in mind that not every built in tag has a Chakra UI equivalent, like `<form>` doesn't have a Chakra UI equivalent.

***Takeaway: AVOID USING BUILT IN HTML TAGS IF YOU CAN***

\* = To specify a certain heading level, do `<Heading as='h2'>` for the equivalent `<h2>`

### **What we can do with Chakra UI and why it's better than raw CSS**

*Well how do I do XYZ in Chakra UI?*

Look at the Wiki. The wiki pages for Chakra UI are layed out really nicely and there's always a handy table to show you what properties each component has and how you can manipulate them and how that affects how that component looks.

For example lets say you want to change the top margin of a specific `<Heading>` component to be 5px, well that's actually super simple! All you need to do is add a `mt="5px"` (`mt` is short for `margin-top`) to the component so it'll looks like `<Heading mt="5px">` and *voilà*, that's it! No need to mess with `id` or `class`!

*Why is it better than raw CSS?*

Cause writing raw CSS and dealing with CSS files **ssssssuuuuuuucccccckkkkkssss** and literally anything that can help us create beautiful pages without dealing with that is a big improvement. As to why it's better than other UI frameworks like Material UI/React Bootstrap? I found Chakra UI to be much easier to onboard to and immediately get started on. There is just less fluff that you need to learn to get started with Chakra UI beyond replacing your old tags with Chakra UI ones and if you need to get deeper into customization, the wiki is super helpful.

Also React Boostrap is like barely better than raw CSS because you still need to write all the CSS yourself, you can just avoid CSS files if you're careful. Still not worth it though.

### **Additional Chakra UI Resources**

There are a ton of other really cool things that you can do in Chakra UI that I haven't gotten to yet such as theme extension and introducing color schemes, so below are a few links to the Chakra UI wiki (a really good Wiki btw) on where to learn more about the advanced things you can do with Chakra UI:

**Wiki**: <https://chakra-ui.com/>

I legitimately think it's useful for everyone to take like half an hour to just look at all the components that Chakra UI comes with because more than likely you'll find something really cool or exactly what you are looking for/need later on and implementing is going to be a breeze (there are a ton of examples too!).

**Chakra Icons**: <https://chakra-ui.com/docs/media-and-icons/icon>

**Heading Component Wiki**: <https://chakra-ui.com/docs/typography/heading>

**Detailed information about component properties**: <https://chakra-ui.com/docs/features/style-props>

**Theme Extension and color schemes**: <https://chakra-ui.com/docs/theming/customize-theme>
