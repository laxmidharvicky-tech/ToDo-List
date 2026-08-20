const list = document.querySelector("#list");
function fun(event) {
    event.preventDefault();
    const value = document.querySelector("#input").value;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Remove";
     button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "6px 12px";
    button.style.borderRadius = "6px";
    button.style.cursor = "pointer";
    button.style.marginLeft = "15px";
    button.style.height = "35px";
    button.style.marginTop = "8px";
    li.textContent = value;
    li.style.fontWeight = "bold";
    li.style.listStyleType = "disc";
    button.addEventListener("click", function () {
        li.remove();
    });
    list.appendChild(li);
    li.append(button);
    value.value = "";
 }