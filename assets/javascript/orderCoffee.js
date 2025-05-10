function orderBox(params) {
    const order = document.getElementById('orderSection');
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