// selecting the element
//<h1 id = "one" class = "two" name = "nm">Learning js </h1>

// byTagName
let byTagName = document.querySelector('h1')
console.log(byTagName)

// byId
let byId = document.querySelector('#one')
console.log(byId)
//byClass
let byClassName = document.querySelector('.two')
console.log(byClassName)
//byAttribute
let byAttribute = document.querySelector('h1[class="two"]')
console.log(byAttribute)

// <p id = "three" class = "four" name = "five">para</p>

//tagName
let byTagName = document.querySelector('p')
console.log(byTagName)

//id
let byIde = document.querySelector('#three')
console.log(byIde)

// class
let byClass = document.querySelector('.four')
console.log(byClass)

//byAny Attribute
let byA = document.querySelector('p[name="five"]')
// console.log(byA)
//console.log(byA.textContent)
// byA.textContent = "para2"
byA.addEventListener('mouseover',function(){
    byA.textContent = "para2"
})
