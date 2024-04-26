# QTML
**QTML** is an HTML framework that aims to to simplify web design with the use of pre-made classes.

[Template HTML File](https://github.com/alvin677/QTML/blob/main/template.html) *start with this file*<br/>
[FontAwesome](https://fontawesome.com/) *cool icons*<br/>

**Made with QTML** `CTRL+U` *to view source code on the website*<br/>
[Cofs.fun](https://cofs.pkings.net) *roblox related website*
<br/>
# Documentation
The following classes; `simple`, `primary` and `secondary` can be applied to certain elements to change their styles.<br/>
List of elements that support one or more of the classes:<br/>`button` `a` `span` `input` `i` `iframe`.

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

## Colors (classes)
**Color Palette**<br/>
```
purple
cyan
red
magenta
yellow
blue
burple
gray
darkgray
black
white
accent - theme relative
```
**Background Colors**<br/>
```
purple-bg
cyan-bg
red-bg
magenta-bg
yellow-bg
blue-bg
burple-bg
gray-bg
darkgray-bg
black-bg
white-bg
accent-bg - theme relative
```
**Border Colors**<br/>
```
purple-border
cyan-border
red-border
magenta-border
yellow-border
blue-border
burple-border
gray-border
darkgray-border 
black-border
white-border
accent-border - theme relative
```

## Elements and their supported classes
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
`outline` `border` `notification` <br/>`container` *while container is not exclusive to the div element, you will find it commonly used with it*

**Iframe**<br/>
`primary`

## Utility classes
`container` *mostly used on the div element, position elements correctly*<br/>
`center` *used to center an element*<br/>
`color` *set color to default text color (based on mode)*<br/>
`drop-shadow` *make a drop shadow*<br/>

**Glow**<br/>
`glow` *make element glow*<br/>
`glow-hover` *make element glow when hovering*<br/>

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
`bold` *font weight 700*<br/>

**Border, Scale, Display and Position**<br/>
`sharp` *sharp border radius*<br/>
`round` *smooth border radius*<br/>

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

## Examples
**Simple Button**<br/>
```html
```

## Framework Variables
```css
:root {
    --qtml--font: 'Arial', sans-serif;

    --qtml--bg: #161616; /* background color */
    --qtml--bg-secondary: #191919; /* secondary background color */

    --qtml--color: #ffffff; /* text color */
    --qtml--color-secondary: #cccccc; /* secondary text color */

    --qtml--accent: #fcfcfc; /* accent color */
    --qtml--accent-hover: #ffffff; /* accent hover color */

    --qtml--outline: 2px solid;
    --qtml--outline-color: #404040;
    --qtml--outline-hover: #606060;
    
    --qtml--element-background: transparent;
    --qtml--margin: 10px;
    --qtml--padding: 1.5vh 2.5vh;
    --qtml--border-radius: 5px;
    --qtml--line-height: 1.2;
    --qtml--transition: 0.3s;
    --qtml--gap: 6px;
    --qtml--letter-spacing: 1px;

    --qtml--icon-size: 3vh;
    --qtml--font-size: 3vh;
    --qtml--button-font-size: 2vh;
    --qtml--font-size-mobile: 16px;
    --qtml--scale: 1.2;
    --qtml--round: 10px;

    --qtml--shadetext: #71717a; /* secondary span */
    --qtml--text-big: 9vh;
    --qtml--text-header: 5vh;
    --qtml--fade-speed: 3s;
    --qtml--animation-speed: 1s;
    --qtml--gradient-animation-speed: 5s;

    --qtml--scrollbar-background: transparent;
}
```
