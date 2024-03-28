function adding(e){
    e.preventDefault();
     var textToAdd = document.getElementById("toAdd").value;
     var p = document.createElement("p");
     
     p.textContent = textToAdd;
     p.classList.add("paragrafo");
     var btn = document.createElement("button");
     btn.classList.add("material-symbols-outlined");
     btn.textContent = "cancel";
     btn.onclick = function(par) {
        deleting(par);
    }.bind(null,p);
     var span = document.createElement("span");
     span.appendChild(btn);
     p.appendChild(span);
     document.getElementById("bottomDiv").appendChild(p);
     console.log("Text to add: " + textToAdd);
     console.log("p element: " + p);
}


function deleting(p){  
    p.remove();
}