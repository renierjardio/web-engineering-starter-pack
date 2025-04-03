wait(1000)
    .then(() => {
        console.log('2');
        return wait(1000);
    })
    .then(() => {
        console.log('1');
        return wait(1000);
    })
    .then(() => {
        console.log('Happy New Year!!');
    });
