// create Element

// first way for add text
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}

addLanguage('python');
addLanguage('typescript');

// second way for add text it's a good aproch

function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li)
}

addOptiLanguage('golang');

// Edit
const thirdLang = document.querySelector("li:nth-child(3");
// thirdLang.innerHTML = "mojo"
const newli = document.createElement('li');
newli.textContent = "react";
thirdLang.replaceWith(newli);

// Edit
const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = "<li> typeScript</li>"

// Remove

const remove = document.querySelector('li:last-child');
remove.remove();