//your JS code here. If required.
const promise1 = Promise.resolve("Hello, world!");
const ele=document.getElementById("output");
promise1.then((value) => {
  
 ele.innerHTML= value;
}, 1000);

