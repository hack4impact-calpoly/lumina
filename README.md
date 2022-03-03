![example workflow](https://github.com/hack4impact-calpoly/lumina/blob/actions/.github/workflows/node.js.yml/badge.svg)
# **Lumina :)** 

## **Team**
The Lumina project team consists of 6 Cal Poly students, including:
- Parker Landsman - Project Manager
- Skyler Han - Tech Lead
- Barret Lo - Software Developer
- Michelle Tan - Software Developer
- Veronica Guzman - Software Developer
- Vincent Pheng - Software Developer

## **UI Testing on Mobile**

1) Find out your computer's IPv4 Address (google)
2) Type that IPv4 address into your phone's browser
3) Add ":3000" at the end

Example: "192.168.1.234:3000"

## **UI Tenants**

Figured that if we had some over arching rules and guides to how we handle UI/Frontend work, it might be really helpful so that everyone is on the same page. This would allow us to easily switch out devs as well from backend to frontend work without having them be completely lost.

The following are some rules that all devs working on frontend should try to follow:

### **1) Modularity**

If you end up seeing that you're using the same group of components over and over again, consider abstracting that out into a single custom react component.

As an example, look at the sign up page. The `<FormInput>` component was custom created because the code within that component (the `<FormControl>`, `<Input>`, `<FormLabel>`, and `<FormErroMessage>` components ) was being duplicated constantly and it ended up creating a very long file. To circumvent this, that `<FormControl>` parent and all it's children was abstracted out into the `<FormInput>` component and the code was refactored to use that component instead, massively shortening our code and make the file much more readable.

This also has the effect of allowing other components to use it without much effort. Simply import the custom component and fill in the necessary properties and *voilà* that's it! Making a modular component will help out other devs massively so please be active and look at when you can abstract out certain duplicate components!

### **2) Concise**

Keep each file short! This way no dev has to scroll through and read hundreds of lines of code to understand what you're trying to do, and you don't have to scroll through all that when debugging a specific component. To cut down on code length, try abstracting out certain components.

### **3) Animation**

This is a pretty *extra* tenant but having small animations like a button that moves up when you hover over it can halp make the page feel much more lively and dynamic. No need to go over the top with too much animation, you don't need to include anything beyond buttons and components that slide in (See the `<Drawer>` component in Chakra UI)

PS. The button animation is already done for you! There is a `<Button>` variant called "animated" and to make your button animated simply add `<Button variant="animated">` and that's it!

### **4) Cards**

We have a custom `<Card>` component which is essentially a `<Box>` with a shadow. Please try to use this whenever you can! For some reason, Cards are all the rage in UI nowadays becaues it creates this illusion where the Card component is lifted off the page, making the page more modern and dynamic rather than a static collection of components. 

Using `<Card>` doesn't make sense for everything, so please use your best judgement on whether or not a card is appropriate for a certain situation.

### **Essentially**

When working on the frontend, keep these questions in mind:

1) Can I make my code more organized/cleaner/shorter?
2) Can I make the page more lively and dynamic without going over the top? 

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
| `<input type="radio"> `    | `<Radio>`                              |
| `<p>`                      | `<Text> `                              |

Essentially, everytime you find yourself using a built in HTML tag, google that tag + "Chakra UI" and you'll likely find a Chakra UI equivalent. Simply changing the tag to the Chakra UI equivalent is already going to be doing the most heavly lifting (tbh vanilla Chakra UI looks pretty good), but if you want to get into component customization, see the next section.

Keep in mind that not every built in tag has a Chakra UI equivalent, like `<form>` doesn't have a Chakra UI equivalent.

***Takeaway: AVOID USING BUILT IN HTML TAGS IF YOU CAN***

\* = To specify a certain heading level, do `<Heading as='h2'>` for the equivalent `<h2>`
### **What we can do with Chakra UI and why it's better than raw CSS**

*Well how do I do XYZ in Chakra UI?*

Look at the Wiki! The wiki pages for Chakra UI are layed out really nicely and there's always a handy table to show you what properties each component has and how you can manipulate them and how that affects how that component looks.

For example lets say you want to change the top margin of a specific `<Heading>` component to be 5px, well that's actually super simple! All you need to do is add a `mt="5px"` (`mt` is short for `margin-top`) to the component so it'll looks like `<Heading mt="5px">` and *voilà*, that's it! No need to mess with `id` or `class`!

*Why is it better than raw CSS?*

Cause writing raw CSS and dealing with CSS files **ssssssuuuuuuucccccckkkkkssss** and literally anything that can help us create beautiful pages without dealing with that is a big improvement. As to why it's better than other UI frameworks like Material UI/React Bootstrap? I found Chakra UI to be much easier to onboard to and immediately get started on. There is just less fluff that you need to learn to get started with Chakra UI beyond replacing your old tags with Chakra UI ones and if you need to get deeper into customization, the wiki is super helpful.

Also React Boostrap is like barely better than raw CSS because you still need to write all the CSS yourself, you can just avoid CSS files if you're careful. Still not worth it though.

### **Additional Chakra UI Resources**

There are a ton of other really cool things that you can do in Chakra UI that I haven't gotten to yet such as theme extension and introducing color schemes, so below are a few links to the Chakra UI wiki (a really good Wiki btw) on where to learn more about the advanced things you can do with Chakra UI:

**Wiki**: https://chakra-ui.com/

I legitimately think it's useful for everyone to take like half an hour to just look at all the components that Chakra UI comes with because more than likely you'll find something really cool or exactly what you are looking for/need later on and implementing is going to be a breeze (there are a ton of examples too!).

**Chakra Icons**: https://chakra-ui.com/docs/media-and-icons/icon

**Heading Component Wiki**: https://chakra-ui.com/docs/typography/heading

**Detailed information about component properties**: https://chakra-ui.com/docs/features/style-props

**Theme Extension and color schemes**: https://chakra-ui.com/docs/theming/customize-theme