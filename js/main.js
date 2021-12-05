let elNameInp = document.querySelector('.todo__name-inp');
let elRelInp = document.querySelector('.todo__rel-inp');
let elNumInp = document.querySelector('.todo__phone-inp');
let elAddBtn = document.querySelector('.add-btn');
let elList = document.querySelector('.todo__list');
let elAllBtn = document.querySelector('.todo__all-btn');
let elFamilyBtn = document.querySelector('.todo__family-btn');
let elFriendBtn = document.querySelector('.todo__friend-btn');
let elClassBtn = document.querySelector('.todo__class-btn');
let elAllInput = document.querySelectorAll(".inp");
let elRemove = document.querySelector('.todo__remove');
let elItem = document.querySelector('.todo__item');
let object = {};
let array = [];

elAddBtn.addEventListener('click', () => {
  if(elNameInp.value != "" && elRelInp.value != "" && elNumInp.value != "") {
    if(object.Phone != elNumInp.value) {
      object = {
        Name: elNameInp.value,
        Relationship: elRelInp.value,
        Phone: elNumInp.value
      }
      array.push(object);
      createItem(array);
    } else {
      elNumInp.style.borderColor = "red";
      elNumInp.style.boxShadow = "0 0 5px 0.15rem rgb(255 0 0 / 52%)"
      alert(`${elNumInp.value} allaqachon ro'yxatdan o'tgan`)
    }
  }
})

function createItem(params) {
  elList.innerHTML = "";
  for(let i of params) {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    li.className = "todo__item list-group-item"
    btn.className = "todo__remove btn btn-danger"
    btn.textContent = "x";
    li.innerHTML = `<h2 class="todo__name">${i.Name}</h2>
    <p class="todo__rel">${i.Relationship}</p>
    <a class="todo__num btn btn-primary" href"tell:${i.Phone}">${i.Phone}</a>`
    li.append(btn);
    elList.append(li);
    elNumInp.style.border = "1px solid #ced4da";
    elNumInp.style.boxShadow = null;
    elAllInput.forEach(el => el.value = ""); 
    btn.addEventListener('click', (event) => {
      li.remove()
    })
  }
} 
elFamilyBtn.addEventListener('click', () =>  {
  elList.innerHTML = "";
  let familyArr = [];
  array.forEach(element => {
    if (element.Relationship == "Family") {
      familyArr.push(element);
      createItem(familyArr);
    }
  })
})
elFriendBtn.addEventListener('click', () =>  {
  elList.innerHTML = "";
  let friendArr = [];
  array.forEach(element => {
    if (element.Relationship == "Friend") {
      friendArr.push(element);
      createItem(friendArr);
    }
  })
})
elClassBtn.addEventListener('click', () =>  {
  elList.innerHTML = "";
  let classArr = [];
  array.forEach(element => {
    if (element.Relationship == "Classmate") {
      classArr.push(element);
      createItem(classArr);
    }
  })
})
elAllBtn.addEventListener('click', () => {
  createItem(array);
})