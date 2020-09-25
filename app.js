const apiKey = 'bb3bf5b43ae5b369d87d0f73';
const FROM = document.querySelector("#currency-one");
const TO = document.querySelector("#currency-two");
const AMOUNTFROM = document.querySelector("#amount-one");
const AMOUNTTO = document.querySelector("#amount-two");
const SWAP = document.querySelector("#swap");
const RATE = document.querySelector("#rate");


const handleGetCurrency = async () => {
    const FROMCURRENCY = FROM.value;
    const TOCURRENCY = TO.value;
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${FROMCURRENCY}`);
    const data = await res.json();
    const toData = data.conversion_rates[TOCURRENCY] * AMOUNTFROM.value;
    RATE.textContent = `${AMOUNTFROM.value} ${FROMCURRENCY}= ${toData} ${TOCURRENCY}`
    AMOUNTTO.value = toData.toFixed(2);
}
const handleSwapInputs = () => {
    // const temp = FROM.value;
    // FROM.value = TO.value;
    // TO.value = temp;
    [FROM.value, TO.value] = [TO.value, FROM.value]
    handleGetCurrency();
}


FROM.addEventListener('change', handleGetCurrency);
TO.addEventListener('change', handleGetCurrency);
AMOUNTFROM.addEventListener('input', handleGetCurrency);
AMOUNTTO.addEventListener('input', handleGetCurrency);
SWAP.addEventListener('click', handleSwapInputs)
handleGetCurrency();