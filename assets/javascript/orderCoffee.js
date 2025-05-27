const overlay = document.getElementById('orderSection');
const order = document.getElementById("orderBox");
function orderBox(params) {
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    order.style.opacity = '1';
    order.style.visibility = 'visible';
}
function handleOrder() {
    let costumerName = document.getElementById('nameInput').value;
    costumerName = costumerName || undefined
    const drink = document.getElementById('drinkType').value;
    if (!drink) {
        alert('لطفا نام نوشیدنی خود را وارد کنید');
        return
    }
    const extraInput = document.getElementById('extrasInput').value;
    let extras = extraInput ? extraInput.split('.') : [];

    const orderCoffee = (costumerName = 'مشتری ناشناس', drink, ...extras) =>{
        let message =`سفارش شما ثبت شد✅
        نام مشتری:${costumerName}
        نوشیدنی:${drink}
        `;
        // message += extras.length > 0 
        // ? `افزودنی ها:\n- ${extraInput.join('\n-')}`;
        // : 'بدون افزودنی';
        if (extras.length > 0) {
            message += `افزودنی ها:\n- ${extras.join('\n-')}`;
        }else{
            message += 'بدون افزودنی';
        }
        alert(message);
        document.getElementById('message').innerText = message;
    }
    orderCoffee(costumerName, drink , ...extras);
    
}
overlay.addEventListener("click", ()=>{
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';    
    order.style.opacity = '0';
    order.style.visibility = 'hidden';

   
})