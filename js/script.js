
// QUI FACCIO RIENTRARE TUTTO DENTRO  IL BOTTONE PER SPEDIRE I DATI
const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function () {
    const result = document.getElementById("result");

    //PRENDO I VALORI
    // QUI KILOMETRI
    const kiloInput = document.getElementById("kilo");
    const kilo = kiloInput.value;
    const KMprice = 0.21
    // QUI NOME E COGNOME
    const nameAndSurnameInput = document.getElementById("nameAndSurname");
    const nameAndSurname = nameAndSurnameInput.value;
    // CONTROLLO I RISULTATI
    console.log(nameAndSurname, kilo);
    // APPLICO SCONTI 
    const etaSelect = document.querySelector("#eta");
    const etaSelezionata = etaSelect.value;

    let priceScounted = ""
    if (etaSelezionata === "minorenne") {
        priceScounted = (kilo * KMprice) * 0.8;
    } else if (etaSelezionata === "over65") {
        priceScounted = (kilo * KMprice) * 0.6;
    } else {
        priceScounted = (kilo * KMprice)
    }
    console.log(priceScounted.toFixed(2));
    // STAMPO RISULTATO
    result.innerHTML = `Signor/a ${nameAndSurname} il tuo biglietto costa ${priceScounted.toFixed(2)}€`;

})
const nullBtn = document.getElementById("null-btn");   
nullBtn.addEventListener("click", function () {
    location.reload()
})