function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getSalutation() {
    switch (getRandomInt(3)) {
        case 0:
            return("Hello");
        case 1:
            return("Bonjour");
        case 2:
            return("Demat");
    }
}
// console.log("hello world");

async function main() {
	
    const string1 = getSalutation();
    const string2 = "World";
    const string3 = "!";
    const res = string1  + " " +string2 + " " + string3;
    console.log(res);   
}

main()
    .catch(err => {
        console.error("Error.");
        console.error(err && err.stack || err);
    });