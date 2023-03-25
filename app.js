const group = document.querySelector(".group");
const output = document.querySelector(".output");
const sizes = ["XL", "ML", "L", "M", "XXL"];

group.innerHTML = sizes
  .map(
    (size) => `<div>
    <input type="radio" id="${size}" value="${size}" name="size">
    <label for="${size}">${size}</label>
</div>`
  )
  .join(" ");

const redioButton = document.querySelectorAll("input");
for (const redioBtn of redioButton) {
  redioBtn.addEventListener("change", showOutput);
}

function showOutput(e) {
  console.log(e);
  if (this.checked) {
    document.querySelector(".output").innerHTML = `you selected ${this.value}`;
  }
}
