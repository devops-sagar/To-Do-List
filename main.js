let addtobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

// generating styles as per the functionality provided in the application
addtobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";

    // for the click functionality over the item clicked in the list
    // Feel free to modify it for the custome designs in different brnach...
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph-complete');
    })

    // for the double click functionality for the item to remove
    // feel free to modify it as per the custome designs in different branch...
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);
    })
})