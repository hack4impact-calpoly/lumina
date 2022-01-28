# **Lumina :)** 

## **Team**
The Lumina project team consists of 9 Cal Poly students, including:
- Parker Landsman - Project Manager
- Skyler Han - Tech Lead
- Barret Lo - Software Developer
- Gary Huarng - Software Developer
- Michelle Tan - Software Developer
- Veronica Guzman - Software Developer
- Vincent Pheng - Software Developer

## **Chakra UI**

### **What is Chakra UI?**

Chakra UI is a CSS component library for React that is intended to help streamline CSS styling in react projects. In other words, it's supposed to be a work around to CSS files by introducing custom components (such as \<Box>) that are intended to replace built in HTML components (such as \<div>). We'll get into why this replacement helps us later

### **Replacement Table**

Below is a table for the most common HTML tags/components and what the corresponding Chakra UI tag/component is.

| HTML Tag/Component       | New Chakra UI Tag/Component          |
|--------------------------|--------------------------------------|
| `<div> `                   | `<Box> `                               |
| `<h1>`, `<h2>`, `<h3>`, etc... | `<Heading>` (specify level within tag) |
| `<input>`                  | `<Input>`                              |
| `<button> `                | `<Button> `                            |
| `<input type="checkbox">`  | `<Checkbox> `                          |
| `<input type="radio"> `    | `<Radio>`                              |
| `<p>`                      | `<Text> `                              |

Essentially, everytime you find yourself using a built in HTML tag, google that tag + "Chakra UI" and you'll likely find a Chakra UI equivalent. Simply changing the tag to the Chakra UI equivalent is already going to be doing the most heavly lifting (tbh vanilla Chakra UI looks pretty good), but if you want to get into component customization, see the next section.

***Takeaway: AVOID USING BUILT IN HTML TAGS***

### **What we can do with Chakra UI and why it's better than raw CSS**

*Well how do I do XYZ in Chakra UI?*

Look at the Wiki! The wiki pages for Chakra UI are layed out really nicely and there's always a handy table to show you what properties each component has and how you can manipulate them and how that affects how that component looks.

For example lets say you want to change the top margin of a specific `<Heading>` component to be 5px, well that's actually super simple! All you need to do is add a `mt="5px"` (`mt` is short for `margin-top`) to the component so it'll looks like `<Heading mt="5px">` and *voilà*, that's it! No need to mess with `id` or `class`!

*Why is it better than raw CSS?*

Cause writing raw CSS and dealing with CSS files **ssssssuuuuuuucccccckkkkkssss** and literally anything that can help us create beautiful pages without dealing with that is a big improvement. As to why it's better than other UI frameworks like Material UI? I found Chakra UI to be much easier to onboard to and immediately get started on. There is just less fluff that you need to learn to get started with Chakra UI beyond replacing your old tags with Chakra UI ones and if you need to get deeper into customization, the wiki is super helpful.

### **Additional Chakra UI Resources**

There are a ton of other really cool things that you can do in Chakra UI that I haven't gotten to yet such as theme extension and introducing color schemes, so below are a few links to the Chakra UI wiki (a really good Wiki btw) on where to learn more about the advanced things you can do with Chakra UI:

**Wiki**: https://chakra-ui.com/

**Heading Component Wiki**: https://chakra-ui.com/docs/typography/heading

**Theme Extension and color schemes**: https://chakra-ui.com/docs/theming/customize-theme