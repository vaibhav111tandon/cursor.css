# cursor.css
![GitHub](https://img.shields.io/github/license/vaibhav111tandon/cursor.css.svg)

#### You can install the file
```html
<head>
  <link rel="stylesheet" href="cursor.css">
  <script src="script.js" type="text/javascript">
</head>
```

#### Instead of installing you can also use the cdn
```html
<link href="https://cdn.jsdelivr.net/gh/vaibhav111tandon/cursor.css@latest/cursor.css" rel="stylesheet" type="text/css">
<link href="https://cdn.jsdelivr.net/gh/vaibhav111tandon/cursor.css@latest/script.js" type="text/javascript">
```

#### Usage

Create a div element with the class name cursor

```html
<div class="cursor"></div>
```
Now for applying various types of the styles and animations there are various classes

For a simple orange outlined circle around the cursor we can apply classes to div as
```html
<div class="cursor circle outline large warning"></div>
```

Here, 
class `circle` denotes that the shape is circle
class `outline` denotes that the circle is not solid instead an outlined one
class `large` denotes the size of the circle
class `warning` denotes the color of the circle(in this case the color of the outline)


Shapes        |       Class      |
--------------|------------------|
circle        |circle            |
rectangle     |rect              |
----------------------------------


Sizes         |       Class      |
--------------|------------------|
small         |small             |
normal        |normal            |
large         |large             |
----------------------------------


Colors          |       Class      |
----------------|------------------|
primary(blue)   |primary           |
success(green)  |success           |
warning(orange) |warning           |
danger(red)     |danger            |
secondary(gray) |secondary         |
------------------------------------


Other                                   |          Class         |
----------------------------------------|------------------------|
To make the outlined shape              |outline                 |
To make the cursor disappear from shape |none                    |
------------------------------------------------------------------

Animations                              |         Class          |
----------------------------------------|------------------------|
pulse(on selected shape)                |pulse                   |
vibrate-horizontal(on selected shape)   |vibrate-h               |
vibrate-vertical(on selected shape)     |vibrate-v               |
------------------------------------------------------------------


To make your name act as a cursor
```html
<div class="cursor large none success">MYNAME</div>
```
