const converteButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor em real
    const currencyValueConverted = document.querySelector(".currency-converted"); //outras moedas
    console.log(currencySelect.value)
    const dollarToday = 5.2;
    const euroToday = 5.9;
    const bitcoinToday = 116528.90;


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dollarToday);

    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);

    
}

function changeCurrency(){
        
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    
    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar";
        currencyImg.src = "./assets/usd.png";}

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/Euro.svg";}
        
    if (currencySelect.value == "BTC") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.svg";}

    convertValues();   
    }

currencySelect.addEventListener("change", changeCurrency); 
converteButton.addEventListener("click", convertValues);