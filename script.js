// const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(["Hello world!"]);
//         }, 1000);
//     });
      
//     promise.then(values => {
//     //console.log(values)
// 	document.getElementById("output").innerText = values;
//     });

function updateOutput() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

updateOutput().then((message) => {
  document.getElementById("output").innerText = message;
});

