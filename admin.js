const container = document.querySelector('.container');
var inputValue1 = document.querySelector('.input');
var inputValue2 = document.querySelector('.input2');
var inputValue3 = document.querySelector('.input3');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

        var input2 = document.createElement('input2');
    	input2.type = "text";
    	input2.disabled = true;
    	input2.value = name;
    	input2.classList.add('item_input2');

        var input3 = document.createElement('input3');
    	input3.type = "text";
    	input3.disabled = true;
    	input3.value = name;
    	input3.classList.add('item_input3');

		var totalA = document.createElement("input");
		totalA.type = "text";
		totalA.disabled = true;
		totalA.value = "Total Amount-"+input3.value;
		totalA.classList.add('item_input4')

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(input2);
        itemBox.appendChild(input3);
		itemBox.appendChild(totalA);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue1.value != "" && inputValue2.value != "" && inputValue3.value != ""){
		new item(inputValue1.value+". "+inputValue2.value+" , "+inputValue3.value);
        todos.push(inputValue1.value+". "+inputValue2.value+" , "+inputValue3.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue1.value = "";
		inputValue2.value = "";
		inputValue3.value = "";
	}

}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}
