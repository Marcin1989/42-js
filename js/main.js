








function addText() {
    let pTekst = document.getElementById("tekst");
    pTekst.innerText = "Nauka programowania";
}
document.getElementById("dodaj").onclick = addText;


function removeText() {
    let pTekst = document.getElementById("tekst")
    pTekst.innerText = "";
}
document.getElementById("usun").onclick = removeText;
