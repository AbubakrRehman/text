console.log("this is log.js")

export default function log(text) {
    console.log(text);
}

let i = 0;
while (i < 10000) {
    console.log("value of i", i++);
}