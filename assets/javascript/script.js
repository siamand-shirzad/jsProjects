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
// function analyzeText(params) {
//     const input = document.getElementById('inputText').value;
//     const output = document.getElementById('output');

//     if (!input) {
//         alert('لطفا متن را وارد کنید');
//         return
//     }
//     let message = '';

//     message += `<p>طول متن:${input.length}</p>`;
//     message += `<p>حروف بزرگ:${input.toUpperCase()}</p>`;
//     message += `<p>آیا شامل 'js'است؟ ${input.includes('js')?'بله':'خیر' }</p>`;
//     message += `<p>اولین موقعیت "s"  ${input.indexOf('s')}</p>`;
//     message += `<p>برعکس متن: ${input.split('').reverse().join('')}</p>`;
//     message += `<p>متن با حروف جداشده:${input.split('').join('-')}</p>`;
//     if (input.trim().length > 20) {
//         message += `<p style='color:red;'>متن شما طولانی است</p>`
//     }
//     message += `${input.startsWith('hello') || input.startsWith('سلام') ? 'با سلام شروع شده' : 'با سلام شروع نشده'}`

//     output.innerHTML = message;

// }

// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
//     sayHello(){
//         console.log(`hi my name is ${this.name} and i'm ${this.age} years old`);

//     }
// }
// const p1 = new person('abbas', 30);
// console.log(p1);
// p1.sayHello();

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     console.log(response);
//     return response.json();
// }).then(data =>{
//     console.log(data);
// }).catch(err => console.log("خطا:",err))

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("table").style.opacity = 1;
      const tbody = document.getElementById("tbody");
      // tbody.innerHTML = ''
      data.forEach((user) => {
        tbody.innerHTML += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.address.city}, ${user.address.street}</td>
            <td><button onclick=deleteUser(${user.id})>حذف</button></td>
            </tr>`;
      });
    });
}
// اضافه کردن کاربر
function addUser() {
  const name = document.getElementById("input").value;
  const email = document.getElementById("email").value;
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({ name: name, email: email }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      // اینجا چون از api فیک استفاده میکنی اینو میزاریم
      tbody.innerHTML += `<tr>
            <td>${json.id}</td>
            <td>${json.name}</td>
            <td></td>
            <td>${json.email}</td>
            <td></td>
            <td><button onclick=deleteUser(${json.id})>حذف</button></td>
            </tr>`;
    // reset inputs value
      document.getElementById("input").value = "";
      document.getElementById("email").value = "";
    });
}
// حذف کاربر
function deleteUser(id) {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    }).then( ()=>{
        alert(`کاربر با ایدی${id}حذف شد.البته در ظاهر چون api واقعی نیست`);
    })
    
}