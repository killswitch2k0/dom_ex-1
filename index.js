// console.log("hello world");

let now = new Date()
let date = now.toLocaleDateString('he-IL');
let time = now.toLocaleTimeString('he-IL');

const pageTitle = document.querySelector('h1');
const pinkLink = document.querySelector('a');

const newTitle = pageTitle.textContent += ` ${date} - ${time}`;

console.log(newTitle);

function onClick(eventInfo) {
    console.log(eventInfo);
    eventInfo.preventDefault(); //disables default backend behaviors of elements i.e., a->go to link
    eventInfo.target.style.color = 'hotpink' //best practice is to use target element
    console.log(`mouseX: ${eventInfo.target.x}, mouseY: ${eventInfo.target.y}`)
}

pageTitle.addEventListener('click', onClick);
pinkLink.addEventListener('click', onClick);

// function chngCol(pinkT) {
//     pageTitle.style.color = 'hotpink'
//     console.log(`mouseX: ${pinkT.x}, mouseY: ${pinkT.y}`)
// }

// pageTitle.addEventListener('click', chngCol)