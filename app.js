//debouncing in javasript
const data = () => {
    console.log("feth data");
}

const doSomeMagic = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);


        }, delay);
    }
}
const betterFunction = doSomeMagic(getData, 300);
