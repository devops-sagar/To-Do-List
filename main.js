let addtobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addtobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";

    // for the click functionality over the item clicked
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph-complete');
    })

    // for the double click functionality for the item to remove
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);
    })
})