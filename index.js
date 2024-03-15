function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const salutation = [
    "Hello",
    "Bonjour",
    "Demat",
];

const target = [
    "World",
    "Friend",
    "Guys",
];

const end = [
    ".",
    "!",
    ";)",
];

function getSalutation() {
    salutationString = salutation[getRandomInt(salutation.length)];
    return salutationString;
}
// console.log("hello world");
function getTarget() {
    targetString = target[getRandomInt(target.length)];
    return targetString;
}

function getSymbol() {
    endChar = end[getRandomInt(end.length)];
    return endChar;
}

async function main() {
    const res = getSalutation()  + " " + getTarget() + " " + getSymbol();
    console.log(res);   
}

main()
    .catch(err => {
        console.error("Error.");
        console.error(err && err.stack || err);
    });