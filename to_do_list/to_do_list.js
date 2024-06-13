const toDoList1 = [];
const buttonElement1 = document.querySelector(".submitButton1");
buttonElement1.addEventListener('click', function () {
   const text = document.querySelector(".input1").value;
   toDoList1.push(text);
   console.log(toDoList1);
   document.querySelector(".input1").value = "";
})


const toDoList2 = [];
const toDoDate2 = [];
const buttonElement2 = document.querySelector(".submitButton2");
buttonElement2.addEventListener('click', function () {
   const textInputElement = document.querySelector(".input2");
   const dateInputElement = document.querySelector(".date2");
   const text = textInputElement.value;
   const date = dateInputElement.value;
   if(text == '' || date == ''){
      alert("Invalid Input");
   }else{
      toDoList2.push(text);
      toDoDate2.push(date);
      console.log(toDoList2);
      console.log(toDoDate2);
      textInputElement.value = "";
      dateInputElement.value = "";
   
      UpdateList();
   }
})

function UpdateList() {
   let toDoListHTML = '';

   for (let i = 0; i < toDoList2.length; i++) {
      const todo = toDoList2[i];
      const todoDate = toDoDate2[i];
      const html = ` <div class = "${i} newDiv"><p  class = "newTag para1">${todo}</p>
      <p class = "newTag para2">${todoDate}</p> 
      <button onclick="vanish(${i})" class = "newTag delete">Delete</button></div>

      `;
      toDoListHTML += html;
   }

   document.querySelector(".toDoList2").innerHTML = toDoListHTML;

}


function vanish(i){
   toDoList2.splice(i, 1);
   toDoDate2.splice(i, 1);
   UpdateList();
}
   

