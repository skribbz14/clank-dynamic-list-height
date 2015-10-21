# clank-dynamic-list-height
Clank Dynamic List Height is an AngularJS 1.x module that, when applied to an element, will add up the total height of given elements children and then inject a &lt;style> tag with a css max-height property. This allows for you to transition max-height without having to guess.

To use the dynamic height directive apply the attribute "clank-dynamic-list-height" to the 
element that will need the max-height.

```html
<ul class="example_menu" clank-dynamic-list-height>
```



This will create and inject a style tag into the DOM that will declare the max-height of the 
element, based on it's children's combined height. The style tag will apply the max-height only 
when the 'opened' class is on the element.

```css
.example_menu.opened 
```
will be the selector with the max-height on it.

If you would prefer to not use the default 'opened' class and would like to specify your own 
class name you can do so by giving the clank-dynamic-list-height a value.

```html
<ul class="example_menu" clank-dynamic-list-height="enabled">
```

In the example above the selector that will be generated will now look like this ".example_menu.enabled { max-height: XXXpx; }"



You may also specify a breakpoint for the dynamic height to kick in. If the breakpoint is set the dynamic height
will only be applied when the screen is less or equal to the given height. 

```html
<ul class="example_menu" clank-dynamic-height clank-dynamic-height-bp="414">
```


@TODO - Rework the breakpoint function to allow for both height and width and make it mobile first.
