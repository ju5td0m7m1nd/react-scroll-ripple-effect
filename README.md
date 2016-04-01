# React Scroll Ripple Effect

## What is this?
> This is a light commponet of dot ripple effect
> which will be triggered by scroll to the specific section. 

## Example


```
git clone https://github.com/ju5td0m7m1nd/react-scroll-ripple-effect.git

cd ./react-scroll-ripple-effect/

npm install

npm start
```
And the example will be at the http://localhost:4000/

*OR*

See [Online Demo](http://www.ju5td0m7m1nd.com/entertainment)

## Usage

To hook this component, it need to find a DOM with *id = scrollhook*
``` html
<div id="scrollhook"></div>
```
the component will automatically generate corresponding amount of dots
to the *section* with class name equals to *page*

``` html
<section class="page"></section>
```
With the setting above, the component will work smoothly.

