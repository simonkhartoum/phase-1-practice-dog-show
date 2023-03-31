document.addEventListener('DOMContentLoaded', () => {

})
document.addEventListener("DOMContentLoaded", (event) => {
  const tableBody = document.querySelector("#table-body");
  fetch("http://localhost:3000/dogs")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${element.name}</td>
            <td>${element.breed}</td>
            <td>${element.sex}</td>
            <td><button id="edit-btn">Edit</button></td>`;
        tableBody.append(tableRow);
    });
})
.catch((error) => `error found:${error}`);
// editButton.addEventListener('click',(event)=>{
//     inputName.value = element.name;
//     inputBreed.value = element.breed;
//     inputSex.value = element.sex;
// })
const form = document.querySelector("#dog-form");
  const inputName = document.querySelector('input[name="name"]');
  const inputBreed = document.querySelector('input[name="breed"]');
  const inputSex = document.querySelector('input[name="sex"]');
  const editButton = document.querySelector("#edit-btn");
  form.addEventListener("submit",(event) => {
    event.preventDefault();
    fetch("http://localhost:3000/dogs", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
          name: `${inputName.value}`,
          breed: `${inputBreed.value}`,
        sex: `${inputSex.value}`,
      }),
    });
  });
});
