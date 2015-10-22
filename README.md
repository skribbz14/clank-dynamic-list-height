Clank Dynamic List Height is an AngularJS 1.x module that, when applied to an element, will add up the total height of its children and then inject a &lt;style&gt; tag with a css max-height property. This allows for you to transition max-height without having to guess what the height will be.

## How to use
To use the dynamic height directive apply the attribute "clank-dynamic-list-height" to the element that will need the max-height style created for it.
```html
<ul class="example_menu" clank-dynamic-list-height>
```
This will create and inject a style tag into the DOM that will declare the max-height of the element, based on it's children's combined height. The style will be applied when the 'opened' class is on the element.

```css
<style>.example_menu.opened { max-height:XXpx }</style> 
```

## Custom class
If you would prefer to not use the default 'opened' class and would like to specify your own class name you can do so by giving the "clank-dynamic-list-height" attribute a value.

```html
<ul class="example_menu" clank-dynamic-list-height="enabled">
```

The above example will output the style below.

```css
<style>.example_menu.enabled { max-height:XXpx }</style> 
```

## Breakpoint
You may also specify a breakpoint for the dynamic height to kick in. If the breakpoint is set the dynamic height will only be applied when the screen is less or equal to the given height. 

```html
<ul class="example_menu" clank-dynamic-height clank-dynamic-height-bp="414">
```

## Currently still working on
- Rework the breakpoint function to allow for both height and width.
- The ability to specify whether the breakpoint will be for mobile or desktop.
