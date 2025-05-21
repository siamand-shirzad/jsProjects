// const magicNumber = Math.ceil(Math.random()*10);
// for (attempt = 1; attempt<=2; attempt++ ){
//     let guess = Number(prompt('enter number between 1 to 10'));

//     if (guess === 0) {
//         alert('canceled');
//         break
//     }
    
//     if (guess < 0) {
//         alert('not allowed number');
//         attempt--
//         continue
//     }
//     if (guess === magicNumber) {
//         alert('well done');
//         break
//     }else{
//         alert('number is wrong try again');
//     }
//     // if (attempt === 2) {
//     //     alert('the number was ' + magicNumber);
//     // }
//     attempt === 2 && alert('the number was ' + magicNumber);

// }
function analyzeText(params) {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('output');

    if (!input) {
        alert('لطفا متن را وارد کنید');
        return
    }
    let message = '';

    message += `<p>طول متن:${input.length}</p>`;
    message += `<p>حروف بزرگ:${input.toUpperCase()}</p>`;
    message += `<p>آیا شامل 'js'است؟ ${input.includes('js')?'بله':'خیر' }</p>`;
    message += `<p>اولین موقعیت "s"  ${input.indexOf('s')}</p>`;
    message += `<p>برعکس متن: ${input.split('').reverse().join('')}</p>`;
    message += `<p>متن با حروف جداشده:${input.split('').join('-')}</p>`;
    if (input.trim().length > 20) {
        message += `<p style='color:red;'>متن شما طولانی است</p>`
    }
    message += `${input.startsWith('hello') || input.startsWith('سلام') ? 'با سلام شروع شده' : 'با سلام شروع نشده'}`

    output.innerHTML = message;

}