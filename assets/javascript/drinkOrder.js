const costumerName = document.getElementById('nameInput');
const drink = document.getElementById('drinkSelect');
const orderList= document.getElementById('ordersUl');

function submitOrder() {
    const costumerNameValue = costumerName.value.trim();
    const drinkValue = drink.value;
    const error = document.getElementById('errorMsg');
    
    if (costumerNameValue && drinkValue) {
        error.innerText = ''  
        const newOrder = document.createElement('li');
        newOrder.innerText = `👤${costumerNameValue} - 🥤${drinkValue}`;
        orderList.appendChild(newOrder)
        costumerName.value ='';
        drink.value = '';   
    }else{
        error.innerText = 'لطفا نام و نوشیدنی را وارد کنید!'
    }
}
function toggle() {
    const cardTheme = document.getElementById('drinkCard');
    cardTheme.classList.toggle('theme')    
}
function reset() {
    // orderList.innerHTML = '';
    orderList.replaceChildren();   
}
