const input = document.getElementById("favchap").value;
const go = document.querySelector(button);
const list = document.getElementById("list");

go.addEventListener("click", function(){
    if (input != ""){
        const listItem = document.createElement("li");
        const cancelButton = document.createElement("button");
        listItem.textContent() = input;
        cancelButton.textContent() = "❌";
        listItem.appendChild(cancelButton);
        list.append(listItem);
        cancelButton.addEventListener("click", listItem.remove());
        focus(input);
        input.textContent = "";
    }
})