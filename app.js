const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if(ip && qty && curr){
        calculateProfitAndLoss(ip, qty, curr);
    }else{
        outputBox.innerText = `Please enter all the fields.`
    }
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = Number.parseFloat((loss / initial) * 100).toFixed(2);
        outputBox.style.color= "green";
        outputBox.innerText = `Hey the loss is ${loss} and the loss percent is ${lossPercentage}%`;
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = Number.parseFloat((profit / initial) * 100).toFixed(2);
        outputBox.style.color= "red";
        outputBox.innerText = `Hey the profit is ${profit} and the profit percent is ${profitPercentage}%`;
    } else {
        outputBox.innerText = `No pain No gain, No gain No pain.`;
    }
}