const pressed = [];
const cheatCode = "fight";

function displayVid() {
    if(pressed === 'fight') {
        return popup.display = flex;
    }
}

window.addEventListener('keyup', (e) => { //keyup detects when you press and release, this is a keyup (e)vent. addEventListener listens for keyup  
    console.log(e.key); //this tells us the name of the key that was pressed
    pressed.push(e.key);//all keyups are being sent up to the array
    pressed.splice(-cheatCode.length - 1, pressed.length - cheatCode.length);//splice looks for the number of characters,
        if (pressed.join('').includes(cheatCode)) { //then we make it into a string
            console.log("FIGHT!");
            setTimeout(function () {
                console.log(document.querySelector("#test").style.display = "flex")
            }, 0000);
            setTimeout(function () {  
                window.location = "https://www.retrogames.cc/arcade-games/street-fighter-ii-champion-edition-street-fighter-2-920513-etc.html"}, 9000) //redirects to the url
        }
        console.log(pressed);
});



