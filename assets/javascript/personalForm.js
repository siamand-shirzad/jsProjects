const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const familyInput = document.getElementById("family");
const emailInput = document.getElementById("email");
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const genderSelect = document.getElementById("gender");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");


let people = [];
//افزودن کاربر به لیست
form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newPerson = {
        name: nameInput.value.trim(),
        lastName : familyInput.value.trim(),
        email : emailInput.value.trim(),
        job : jobInput.value.trim(),
        phone : phoneInput.value.trim(),
        gender : genderSelect.value
    }
    people.push(newPerson);
    form.reset();
    
})
//نمایش همه کاربران
document.getElementById("showModal").addEventListener("click", ()=>{
    if (people.length === 0) {
        modal.innerHTML = `<h3>هنوز کاربری ثبت نشده است</h3>`;
    }else{
        modal.innerHTML = `<h3>لیست کاربران:</h3>`;
        const list = document.createElement("ul");
        people.forEach((person ,index)=>{
            const {name, lastName, email, job, phone, gender} = person

            const li = document.createElement("li")
            li.innerText = `${index+1}. ${name} ${lastName}
            ایمیل:${email}
            شغل:${job || '---'}
            تلفن:${phone || '---'}
            جنسیت:${gender || '---'}`;
            list.appendChild(li)
        })
        modal.appendChild(list);
    }
    overlay.style.visibility = 'visible'
    overlay.style.opacity = '1'
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
});
//بستن مدال با کلیک روی پس زمینه
overlay.addEventListener("click", () =>{
    overlay.style.visibility = 'hidden'
    overlay.style.opacity = '0'
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'

})
//پیدا کردن با ایمیا
document.getElementById("findByEmail").addEventListener("click", ()=>{
    const emailToFind = prompt("ایمیل مورد نظر را وارد کنید").trim();
    const person = people.find((p)=>{return p.email === emailToFind})

    if (person) {
        const {name, lastName, email, job, phone, gender} = person
        modal.innerHTML =`<h3>کاربر یافت شد</h3>
        <p>نام و نام خانوادگی:${name}</p>
        <p>ایمیل:${email}</p>
        <p>شغل:${job}</p>
        <p>تلفن:${phone}</p>
        <p>جنسیت:${gender}</p>`
    }else{
        modal.innerHTML = `<p>کاربری یافت نشد</p>`
    }    
    overlay.style.visibility = 'visible'
    overlay.style.opacity = '1'
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'

})
