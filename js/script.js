
// QUI FACCIO FUNZIONARE IL BOTTONE PER SPEDIRE I DATI
const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function () {
    const result = document.getElementById("result");

    //PRENDO I VALORI
    // QUI KILOMETRI
    const kiloInput = document.getElementById("kilo");
    const kilo = kiloInput.value;
    // QUI NOME E COGNOME
    const nameAndSurnameInput = document.getElementById("nameAndSurname");
    const nameAndSurname = nameAndSurnameInput.value;
    // CONTROLLO I RISULTATI
    console.log(nameAndSurname, kilo);
    // APPLICO SCONTI 

   

    result.innerHTML = `Ti chiami ${nameAndSurname} e hai scelto il colore ${kilo}`;



})
