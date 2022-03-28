let addtobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addtobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph-complete');
    })

    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);
    })
})