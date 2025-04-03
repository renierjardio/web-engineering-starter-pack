async function countdown() {
    console.log('5…');
    await wait(1000);

    console.log('4…');
    await wait(1000);

    console.log('3…');
    await wait(1000);

    console.log('2…');
    await wait(1000);

    console.log('1…');
    await wait(1000);

    console.log('Happy New Year!');
}
