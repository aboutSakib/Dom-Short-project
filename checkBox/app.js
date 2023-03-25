let btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  let checkBox = document.querySelectorAll('input[name="color"]:checked');
  let values = [];
  checkBox.forEach((checkBox) => {
    values.push(checkBox.value);
  });
  alert("your select color is " + values);
});
