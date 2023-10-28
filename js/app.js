const userList = document.querySelector(".name-list");
const btn = document.querySelector(".addBtn");
const lInput = document.querySelector(".list-input");

btn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  const liContent = document.createTextNode(lInput.value);
  newLi.appendChild(liContent);
  userList.appendChild(newLi);
});
