# QTML
**QTML** is an HTML framework that aims to to simplify web design with the use of pre-made classes.<br/>
It is very easy to use and also tries to adapt websites for a better mobile experience.<br/>
*This "framework" is far from good and finished, it is just something that I wrote to use personally.*

You can view the `qtml.css` file to see all the variables that you can reference (if you want to use the variables on other non-supported elements). 

[Template HTML File](https://github.com/alvin677/QTML/blob/main/examples/template.html) *start with this file*<br/>

**Icon Resources**<br/>
[FontAwesome](https://fontawesome.com/)<br/>
[FlatIcon](https://www.flaticon.com/)<br/>

**Made with QTML** (`CTRL+U` *to view source code on the website*)<br/>
[Cofs.fun](https://cofs.pkings.net) *roblox related website*<br/>
[PKings.net](https://pkings.net) *video platform, W.I.P*<br/>

You may also take a look at the **'examples'** folder in this Github Repo.

# Documentation

**Docs Contents**<br/>
- [Setup](#setup)
- [Introduction](#introduction)
- [Themes](#themes)
- [Colors](#colors)
- [Elements](#elements)
- [Utility](#utility)
- [Animations](#animations)

## Setup
**Setup/Template**<br/>
Prepare your web page with the Template:<br/>
```html
<!DOCTYPE html>
<html lang="en" qtml-mode="light" qtml-theme="white">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>QTML Template</title>
        <link href="https://cdn.jsdelivr.net/gh/alvin677/qtml@latest/qtml.css" rel="stylesheet">
    </head>
    
    <body>

    </body>
</html>
```
**Simple Button**<br/>
Inside of the `body`, create a `button` and apply the `simple` class:<br/>
```html
    <body>
        <button class="simple">Hello World!</button>
    </body>
```
![image](https://github.com/alvin677/QTML/assets/112005397/85560f84-cee6-4fe3-b93d-a7a7416d6149)

## Introduction
The following classes; `simple`, `primary` and `secondary` can be applied to certain elements to change their styles.<br/>
Head over to [Elements](#elements) for a list of supported classes for each element.

**Common Classes**<br/>
Some classes might be more commonly used than others, here is a short list of useful ones:<br/>
`container` `center` `primary`

**Reset Styling**<br/>
A couple of elements are intially given style data when linking the framework.
The following elements are<br/>
`body` `i` `footer` `hr` and `*` (the scrollbar is also affected)

## Themes
**Available Themes**<br/>
`purple` `cyan` `red` `magenta` `yellow` `blue` `burple` `aqua` `white` `black` `gray` `darkgray`

**Theme Modes**<br/>
`light` `dark`

## Colors
All colors are classes that can be applied to elements.

**Color Palette**<br/>
`purple`
`cyan`
`red`
`magenta`
`yellow`
`blue`
`burple`
`aqua`
`gray`
`darkgray`
`black`
`white`

`accent` - theme relative

**Background Colors**<br/>
`purple-bg`
`cyan-bg`
`red-bg`
`magenta-bg`
`yellow-bg`
`blue-bg`
`burple-bg`
`aqua-bg`
`gray-bg`
`darkgray-bg`
`black-bg`
`white-bg`

`accent-bg` - theme relative

**Border Colors**<br/>

`purple-border`
`cyan-border`
`red-border`
`magenta-border`
`yellow-border`
`blue-border`
`burple-border`
`aqua-border`
`gray-border`
`darkgray-border` 
`black-border`
`white-border`

`accent-border` - theme relative

## Elements
All supported elements and their available classes.

**Footer**<br/>
`center`

**Button**<br/>
`simple` `primary` `secondary`<br/>
`large` `small`

**Input**<br/>
`primary`<br/>
`large` `small`

**Span**<br/>
`primary` `secondary` `status` `success` `notify` `error` `warning`<br/>
`large` `small`

**a**<br/>
`primary` `secondary`<br/>
`large` `small`

**i**<br/>
`primary` `secondary`<br/>
`large` `small`

**Div**<br/>
`outline` `border`<br/>`notification` *notification class puts the div outside of the right bottom corner of the screen*<br/>`container` *while container is not exclusive to the div element, you will find it commonly used with it*

**Iframe**<br/>
`primary`

**Textarea**<br/>
`primary`

**Table**<br/>
`primary`

**Hr**<br/>
`primary`

## Utility
All the utility classes that you may apply to elements.

`container` *mostly used on the div element, position elements correctly*<br/>
`center` *used to center an element*<br/>
`color` *set color to default text color (based on mode)*<br/>
`transparent` *set background color to transparent*<br/>
`disabled` *disable an element*<br/>

**Glow**<br/>
`glow` *make element glow*<br/>
`glow-hover` *make element glow when hovering*<br/>
`shadow` *apply shadow around element*<br/>

**Gradient**<br/>
`gradient` *make gradient text*<br/>
`gradient-bg` *make gradient background*<br/>
 `reverse-gradient` *gradient text but reversed*<br/>

**Text**<br/>
`text-sans` *sans font*<br/>
`text-serif` *serif font*<br/>
`text-mono` *monospace font*<br/>
`text-big` *enlarge text*<br/>
`text-header` *header-like text*<br/>
`text-space` *modify letter spacing*<br/>
`text-glow` *make text glow*<br/>
`text-glow-hover` *make text glow when hovering*<br/>
`text-left` *align text to left*<br/>
`text-center` *align text to the middle*<br/>
`text-right` *align text to the right*<br/>

`bold` *font weight 700*<br/>
`underline` *underline the text*<br/>
`underline-hover` *underline when hovering text*<br/>

`drop-shadow` *make a drop shadow*<br/>

**Border, Scale, Display and Position**<br/>
`sharp` *sharp border radius*<br/>
`round` *smooth border radius*<br/>
`noborder` *remove border*<br/>

`scale` *scale element*<br/>
`scale-hover` *scale element when hovering*<br/>

`in-flex` *inline flex display*<br/>
`in-block` *inline block display*<br/>
`flex` *flex display*<br/>
`block` *block display*<br/>
`hide` *display none*<br/>

`grid` *grid display*<br/>
`wrap` *flex wrap*<br/>
`gap` *gap*<br/>

`relative` *position relative*<br/>
`absolute` *position absolute*<br/>
`fixed` *position fixed*<br/>

`invisible` *set visibility to hidden*<br/>
`visible` *set visibility to visible*<br/>

`column` *flex direction column*<br/>
`row` *flex direction row*<br/>

`top` *vertically align on the top*<br/>
`middle` *vertically align in the middle*<br/>
`base` *vertically align on the baseline*<br/>

`select` *allow text selection*<br/>
`noselect` *disable all selection*<br/>
`pointer` *make cursor a pointer when hovering*<br/>

`auto` *automatically set width and height to 100%*<br/>
`auto-w` *automatically set width*<br/>
`auto-h` *automatically set height*<br/>

## Animations
All animations are classes that you apply to elements.

**Text Pulse**<br/>
`pulse` *pulse the text with accent color, works with `hr` element as well*<br/>

**Fade**<br/>
`fade-in` *fade in animation*<br/>
`fade-out` *fade out animation*<br/>

**Scale**<br/>
`grow` *grow element from 0 to 1*<br/>
`shrink` *shrink element until gone*<br/>
`beat` *grow and shrink repeatedly*<br/>

**Gradient**<br/>
If an element has the `gradient` or `reverse-gradient` class applied, you can add the `animate` class to animate it.

## Updates
Ideas and what will be added/done:
- `blur` class??
- make sure checkboxes and such work fine
- `label` support
