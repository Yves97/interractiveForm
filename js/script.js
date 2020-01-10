var form = selectEl('form')
var button = selectEl('.submit')

var errMsg = document.querySelectorAll('.error-message')

errMsg.forEach((value)=>{
    value.style.display = 'none'
})

var inputsData = {
    sexe: document.getElementsByName('sexe'),
    nom: selectEl('.nom'),
    prenom: selectEl('.prenom'),
    age : selectEl('.age'),
    pseudo: selectEl('.pseudo'),
    password1: selectEl('.password1'),
    password2: selectEl('.password2'),
    country: selectEl('#country'),
    errorMessage: selectEl('.error-message'),
    checked: true,
    unchecked: false,
    emptyInput : /[^\s]/
    // errorClass: (el)=>{
    //     el.classList.add('error')
    // },
    // successClass: (el)=>{
    //     el.classList.add('success')
    // },
}

// console.log(inputsName.errorMessage)
// console.log(inputsName.nom.nextElementSibling)
// console.log(inputsName.emptyInput.test(inputsName.nom.value))

inputsData.nom.addEventListener('keyup',()=>{
    // console.log(inputsData.nom.value.match(inputsData.emptyInput))
    if(inputsData.nom.value.length <= 2 || inputsData.nom.value.match(inputsData.emptyInput) == null){
        inputsData.nom.nextElementSibling.innerHTML = 'Votre nom doit contenir plus de 2 caractères'
        inputsData.nom.nextElementSibling.style.display = 'inline-block'
        inputsData.nom.classList.remove('success')
        inputsData.nom.classList.add('error')
        inputsData.unchecked
    }
    else{
        inputsData.nom.nextElementSibling.innerHTML = ''
        inputsData.nom.nextElementSibling.style.display = 'none'
        inputsData.nom.classList.add('success')
        inputsData.checked
    }
})

inputsData.prenom.addEventListener('keyup',()=>{
    if(inputsData.prenom.value.length <= 2 || inputsData.prenom.value.match(inputsData.emptyInput) == null){
        inputsData.prenom.nextElementSibling.innerHTML = 'Votre prenom doit contenir plus de 2 caractères'
        inputsData.prenom.nextElementSibling.style.display = 'inline-block'
        inputsData.prenom.classList.add('error')
        inputsData.prenom.classList.remove('success')
        inputsData.unchecked
    }
    else{
        inputsData.prenom.nextElementSibling.innerHTML = ''
        inputsData.prenom.nextElementSibling.style.display = 'none'
        inputsData.prenom.classList.add('success')
        inputsData.checked
    }
})

inputsData.age.addEventListener('keyup',()=>{
    if(parseInt(inputsData.age.value) <= 10 || parseInt(inputsData.age.value) == NaN || inputsData.age.value.match(inputsData.emptyInput) == null){
        inputsData.age.nextElementSibling.innerHTML = 'Votre age doit etre supérieur ou égale a 10 ans'
        inputsData.age.nextElementSibling.style.display = 'inline-block'
        inputsData.age.classList.remove('success')
        inputsData.age.classList.add('error')
        inputsData.unchecked
        

    }
    else{
        inputsData.age.nextElementSibling.innerHTML = ''
        inputsData.age.nextElementSibling.style.display = 'none'
        inputsData.age.classList.add('success')
        inputsData.checked
    }
    
})

inputsData.pseudo.addEventListener('keyup',()=>{
    // console.log(inputsData.nom.value.match(inputsData.emptyInput))
    if(inputsData.pseudo.value.length <= 4 || inputsData.pseudo.value.match(inputsData.emptyInput) == null){
        inputsData.pseudo.nextElementSibling.innerHTML = 'Votre Pseudo doit contenir plus de 4 caractères'
        inputsData.pseudo.nextElementSibling.style.display = 'inline-block'
        inputsData.pseudo.classList.remove('success')
        inputsData.pseudo.classList.add('error')
        inputsData.unchecked
    }
    else{
        inputsData.pseudo.nextElementSibling.innerHTML = ''
        inputsData.pseudo.nextElementSibling.style.display = 'none'
        inputsData.pseudo.classList.add('success')
        inputsData.checked
    }
})

inputsData.password1.addEventListener('keyup',()=>{
    // console.log(inputsData.nom.value.match(inputsData.emptyInput))
    if(inputsData.password1.value.length <= 6 || inputsData.password1.value.match(inputsData.emptyInput) == null){
        inputsData.password1.nextElementSibling.innerHTML = 'Votre Mot de passe doit contenir plus de 6 caractères'
        inputsData.password1.nextElementSibling.style.display = 'inline-block'
        inputsData.password1.classList.remove('success')
        inputsData.password1.classList.add('error')
        inputsData.unchecked
    }
    else{
        inputsData.password1.nextElementSibling.innerHTML = ''
        inputsData.password1.nextElementSibling.style.display = 'none'
        inputsData.password1.classList.add('success')
        inputsData.checked
    }
})

inputsData.password2.addEventListener('keyup',()=>{
    if(inputsData.password2.value.length <= 6 || inputsData.password2.value.match(inputsData.emptyInput) == null || (inputsData.password1.value != inputsData.password2.value) ){
        inputsData.password2.nextElementSibling.innerHTML = 'Mots de passe differents'
        inputsData.password2.nextElementSibling.style.display = 'inline-block'
        inputsData.password2.classList.remove('success')
        inputsData.password2.classList.add('error')
        inputsData.unchecked
    }
    else{
        inputsData.password2.nextElementSibling.innerHTML = ''
        inputsData.password2.nextElementSibling.style.display = 'none'
        inputsData.password2.classList.add('success')
        inputsData.checked
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(inputsData.nom.value)
})


function selectEl(element){
    return document.querySelector(element)
}
