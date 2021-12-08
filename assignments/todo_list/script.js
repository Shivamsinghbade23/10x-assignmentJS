var listToDo = document.getElementsByClassName('todos')[0];
var btnClick = document.getElementsByTagName('button')[0];
var input = document.getElementsByTagName('input')[0];
var count = 0
btnClick.addEventListener('click', () => {
    var text = input.value;
    var p = document.createElement('p');
    p.setAttribute("key", count);
    p.textContent = text;
    p.addEventListener("click", function() { deleteEle(this) }, false)
    listToDo.appendChild(p)
    count += 1
})

function deleteEle(elem) {
    var element = elem
    element.remove();
} 