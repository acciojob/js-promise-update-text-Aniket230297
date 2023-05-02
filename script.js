const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Hello world!"]);
        }, 1000);
    });
      
    promise.then(values => {
    console.log(values[0]);
    });
