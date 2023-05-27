const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Hello world!"]);
        }, 1000);
    });
      
    promise.then(values => {
		let text=document.createElement("div");
		text.innerText=values;
		document.body.append(text);
    //console.log(values);
    });
