console.log("this side mack");

async function main() {
    let response = await fetch("http://127.0.0.1:5500/songs");
    let text = await response.text()
    console.log(text);
}

main();
