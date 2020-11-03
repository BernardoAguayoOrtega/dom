// what is the dom
// JS -> HTML, CSS (DOM Document Object Model)
// console.log(document.head) => access to object

// console.log(document.body) => access to object

const p = document.createElement('p')
p.innerText = 'Yooooo'
document.body.append(p)