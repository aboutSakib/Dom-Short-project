const framework = document.querySelector("#framework");
const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
const btnRemove = document.querySelector("#btnRemove");

btnAdd.onclick = (e) => {
  e.preventDefault();

  if (framework.value == "") {
    alert("please enter the name");
  }

  const option = new Option(framework.value);
  // add it to the list
  list.add(option);

  // reset the value of the input
  framework.value = "";
};

btnRemove.onclick = (e) => {
  e.preventDefault();
  let emptyArry = [];
  for (let i = 0; i < list.options.length; i++) {
    emptyArry[i] = list.options[i].selected;
  }
  let index = list.options.length;
  while (index--) {
    if (emptyArry[index]) {
      list.remove(index);
    }
  }
};
