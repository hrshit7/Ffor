# Ffor - Food Delivery App Using React

/**
 * AppLayout
 * 1. Header
 * -logo
 * -Nav items
 * 2. Body 
 * -search
 * -RestaurantContainers
 *   -- restra carts
 *     -img
 *     -name
 *     -cusine
 *     -rating
 *     -timing
 * 3. footer 
 * -copyright 
 * -links
 */

 

 There are Two types of Export/Import


 -Default Export/Import

 export default Component;
 import Component from "path";


 -Named Export/Import

 export const Component;
 import {Component} from "path";




# React Hooks 
(Normal Js Utility Function)
  - useState() => Super Powerful React variable
  - useEffect() => used to get data from servers and rerender on the webpage

# React Fiber
  - concept of Rerendering

# Shimmer
 - for better experience of visitors

# Types of Routing 
 - Client Side = No need to fetch, beacuse all components already fetched.
 - Server Side = if we have to make call to server and the page loads.

# Redux toolkit
- Install @reduxjs/toolkit  and react-redux
- Build our own store
- connect our store to our app
- Slice(cartSlice)
- Dispatch(action)
- Selector
