# QTML
A HTML framework to simplify web design.<br/>

# List of all available classes
Apply classes to an element using the `class` attribute<br /> 
```html 
<element class="class-here"></element>
```
**Universal classes**<br />
*Most classes can be combined to design HTML elements.*<br />
```css
.gradient
.reverse-gradient

.font-sans
.font-serif
.font-mono

.big-text
```
**Button classes**<br />
```css
.primary
.secondary

```


**Setup project file** to begin using QTML.
```html
<!DOCTYPE html>
<html lang="en" qtml-theme="purple">
  <head>
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>QTML Page</title>
        <link href="./qtml.css" rel="stylesheet">
  </head>
  
  <body>
    <h1 class = "">Hello World!</h1>
  </body>
</html>
```
<br />
**Gradient text** can easily be created using the `gradient` or `reverse-gradient` class.
```html
<h1 class = "gradient">Hello World!</h1>
```
<br />
**Larger text** can easily be created using the `big-text` class.
```html
<h1 class = "big-text">Hello World!</h1>
```
