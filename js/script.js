AOS.init();
let doc = document

let form__registration = doc.forms.main__form
let inputs = doc.querySelectorAll('input')
let need__inputs = doc.querySelectorAll('.need__inputs')
let all = doc.querySelector('.all')
let need = doc.querySelector('.need')
let success = doc.querySelector('.success')
let error = doc.querySelector('.error')
let span__need = doc.querySelectorAll('.span__need')
let button__submit = doc.querySelector('.button__submit')
let count__all = inputs.length
let count__need = need__inputs.length

let filled__counter = (inputs) => {
    let count__success = 0;
    let error = 0;
    let span = span__need
    for (let item of need__inputs) {
        if (item.value) {
            count__success++
        }
        else {
            item.style.border = '2px solid red'
            item.style.boxShadow = '0px 0px 10px 2px rgba(255, 0, 0, 0.2) inset'
            error++
        }
    }
    mandatory__inputs(error)
    return {
        count__success: count__success,
        error: error,
    }
}

let mandatory__inputs = (item__error) => {
    if (item__error == 0) {
        for (let item of inputs) {
            item.value = ''
        }
        alert('Data has been sent. Thank you!')
    }
}

let return__to__previous__value = () => {
    for (let item of inputs) {
        item.style.border = '1px solid #949494'
    }
}

let input__name = main__form.elements.name
let input__age = main__form.elements.age
let input__surname = main__form.elements.surname
let input__about__you = main__form.elements.about__you
let input__email = main__form.elements.email
let input__what__is__javascript = main__form.elements.what__is__javascript
let input__number = main__form.elements.number
let input__what__is__html = main__form.elements.what__is__html
let input__mother__name = main__form.elements.mother__name
let input__what__is__css = main__form.elements.what__is__css
let input__father__name = main__form.elements.father__name
let input__your__favourite__car = main__form.elements.your__favourite__car

form__registration.addEventListener('submit', (event) => {
    event.preventDefault()
    let obj = {
        name: input__name.value,
        age: input__age.value,
        surname: input__surname.value,
        about__you: input__about__you.value,
        email: input__email.value,
        what__is__javascript: input__what__is__javascript.value,
        number: input__number.value,
        what__is__html: input__what__is__html.value,
        mother__name: input__mother__name.value,
        what__is__css: input__what__is__css.value,
        father__name: input__father__name.value,
        your__favourite__car: input__your__favourite__car.value,
    }
    console.log(obj);

    event.preventDefault()
    return__to__previous__value()
    for (let item of need__inputs) {
        item.style.boxShadow = '0px 0px 0px 0px'
    }

    let sending__data = filled__counter(inputs)
    all.textContent = 'All: ' + count__all
    need.textContent = 'Need: ' + count__need
    success.textContent = 'Success: ' + sending__data.count__success
    error.textContent = 'Error: ' + sending__data.error
})
























    // input__name.value = ''
    // input__surname.value = ''
    // input__city.value = ''
    // input__email.value = ''
    // input__create__password.value = ''
    // input__confirm__password.value = ''
    // input__checkbox.checked = 'false'


// all.textContent = 'All: ' + inputs.length
// need.textContent = 'Need: ' + need__inputs.length

// let all__inputs__check = (input) => {
//     let count__success = 0
//     for (let item of inputs) {
//         if (item.value) {
//             count__success++
//         }
//         else {
//             success.style.border = 'border: 2px solid red;'
//         }
//     }

//     return {
//         success: count__success,
//     }
// }


// all__inputs__check()
// let massiv__1 = all__inputs__check(inputs)
// console.log(success);

// console.log(`Всего инпутов: ${inputs.length}`);
// let input1 = doc.forms.main__form
// // console.log(input1);
// let input__name = main__form.elements.name
// // console.log(input__name);



// main__form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     success.textContent = 'Success: ' + massiv__1.success
// })



// button__submit.addEventListener('click', () => {
//     for (let item of input1.elements) {
//         if (item.value == '') {
//             console.log(`пустых строк ${item.length}`);
//             break
//         }
//     }
// })


// button__submit.addEventListener('click', (event) => {

// })


// if (input__name.value == '') {
//     alert('поле пустое')
// }
// function validateForm() {

// }

// validateForm()

// for(let item of input1.elements){
//     if (item.value == ''){
//         alert('поле пустое')
//     }
// }

    //     // input__name.value = ''
    //     // let obj = {
    //     //     name: input__name.value,
    //     //     surname: input__surname.value,
    //     //     city: input__city.value,
    //     //     email: input__email.value,
    //     //     create__password: input__create__password.value,
    //     //     confirm__password: input__confirm__password.value,
    //     //     remember: input__checkbox.checked,
    //     // }
    //     // console.log(obj);
    //     // input__name.value = ''
    //     // input__surname.value = ''
    //     // input__city.value = ''
    //     // input__email.value = ''
    //     // input__create__password.value = ''
    //     // input__confirm__password.value = ''
    //     // input__checkbox.checked = 'false'



// if(input1.value === ''){
//     console.log('пусто');
// }



// let login__button = doc.querySelector('.login__button')
// let container = doc.querySelector('.container')
// let container__close = doc.querySelector('.close__button')
// let form = doc.querySelector('.form__registration')

// login__button.addEventListener('click', () => {
//     container.classList.toggle('container__not__active')
//     login__button.classList.toggle('container__not__active')
// })

// container__close.addEventListener('click', () => {
//     container.classList.toggle('container__not__active')
//     login__button.classList.toggle('container__not__active')
// })

// let form__registration = doc.forms.form__registration
// let input__name = form__registration.elements.name
// let input__surname = form__registration.elements.surname
// let input__city = form__registration.elements.city
// let input__email = form__registration.elements.email
// let input__create__password = form__registration.elements.create__password
// let input__confirm__password = form__registration.elements.confirm__password
// let input__checkbox = form__registration.elements.checkbox

// let btn = doc.querySelector('.button__submit')

// form__registration.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     let obj = {
//         name: input__name.value,
//         surname: input__surname.value,
//         city: input__city.value,
//         email: input__email.value,
//         create__password: input__create__password.value,
//         confirm__password: input__confirm__password.value,
//         remember: input__checkbox.checked,
//     }
//     console.log(obj);
//     input__name.value = ''
//     input__surname.value = ''
//     input__city.value = ''
//     input__email.value = ''
//     input__create__password.value = ''
//     input__confirm__password.value = ''
//     input__checkbox.checked = 'false'
// })