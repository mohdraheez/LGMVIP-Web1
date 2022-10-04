const textbox = document.querySelector('.textinput');
const div = document.querySelector('.output');
const btn = document.querySelector('.btn');
const todo = document.querySelector('.output');

btn.addEventListener('click',add);
todo.addEventListener('click',modify);

function add(event){
    event.preventDefault();
    if(textbox.value!=''){
        const div1 = document.createElement('div');
        div1.classList.add('outputpack');

        const inputtext = document.createElement('div');
        inputtext.innerHTML = textbox.value;
        inputtext.classList.add('textoutput');

        const span1 = document.createElement('span');

        const btn1 = document.createElement('button');
        btn1.classList.add('done');
        
        const btn2 = document.createElement('button');
        btn2.classList.add('delete');

        btn1.appendChild(span1);
        btn2.appendChild(span1);
        div1.appendChild(inputtext);
        div1.appendChild(btn1);
        div1.appendChild(btn2);
        div.appendChild(div1);
        textbox.value ='';
    }
}

function modify(e){
    const item = e.target;

    if(item.classList[0]==='delete'){
        const par = item.parentElement;
        par.remove();
    }

    if(item.classList[0]==='done'){
        const ele = item.parentElement.querySelector('.textoutput').classList.toggle('textoutput2');
        item.classList.toggle('undo');
    }

}
