console.log("FrontEnd Js Ishga Tushdi")

function itemTemplate(item) {
    return ` <li 
    class="list-group-item    list-group-item-info d-flex align-items-center justify-cotent-between">
  <span class="item-text">${item.reja}</span>
<div>
  <button 
   data-id="${item.id}" 
   class="delete_me btn btn-danger btn-sm" >
    Ozgartrish
  </button>
  <button   data-id="${item.id}" " class="edit-me btn btn-secondary btn-sm mr-1">Ochrish </button>

</div>
</li>`;
}

let createField = document.getElementById("create-field");
document.getElementById("create-form")
.addEventListener("submit", function (e) { 
    e.preventDefault();
    axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
    createField.value = "";
    createField.focus(); 
 })
    .catch((err) => {"Iltmos qaytadan h-t qilib koring"});
});

