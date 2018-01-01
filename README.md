### swap-props
A simple library for swapping property values to each other within an object

####Usage
Assume that we have a simple object (literal) in JS:
```js
let obj = {
  a: 'b',
  b: 'a'
}
```

And want to exchange the values between properties as swapping the value of a with the value of b properties:
```js
obj = swapProps(obj, [a], [b])

// result : 
// let obj = {
//   a: 'a',
//   b: 'b'
// }
```

####Licence
MIT