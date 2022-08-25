"use strict";
/* 
сделать чтобы результаты сохранялись при закрытии вкладки
 */

const input = document.querySelector("input");
let ol = document.querySelector("ol");
const btn = document.getElementById("addTask");
const btnCl = document.getElementById("clearList");
btn.addEventListener("click", event => {
    let li = document.createElement("li");
    li.textContent = input.value;
    let delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "x";
    delBtn.style.marginLeft = "30px";
    delBtn.addEventListener("click", event => {
        li.remove();
    });
    li.appendChild(delBtn);
    let doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", event => {
        li.style.textDecoration = "line-through";
        li.style.backgroundColor = "grey";
    });
    li.appendChild(doneBtn);
    ol.appendChild(li);

});
btnCl.addEventListener("click", event => {
    /* 
    works but require additional memory

    let newOl = document.createElement("ol");
    newOl.className ="new";
    let div = ol.parentNode;
    ol.remove();
    div.append(newOl);
    console.log(document.body); */

    /* much easier and works */

    console.log(ol.childNodes.length);
    let i = 1;
    while(i < ol.childNodes.length) {
        ol.childNodes[i].remove();
    };
    
});
// comment






