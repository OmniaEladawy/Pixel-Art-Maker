var btn = document.getElementById("btn");
//add event listener to submit button
btn.addEventListener("click",DrawCanvas);

//function to draw canvas
function DrawCanvas(){
    document.getElementById("canvas").innerHTML = "";
    var table = document.createElement("table");
    var tableRow = document.getElementById("tableRow").value ;
    var tableColoumn = document.getElementById("tableColoumn").value ;
    for(var x = 1 ; x <= tableRow ; x++){
        var r = document.createElement("tr");
        table.appendChild(r);
        for(var y = 1 ; y <= tableColoumn ; y++){
            var c = document.createElement("td");
            r.appendChild(c);
        }
    }
    document.getElementById("canvas").appendChild(table);

    //to color canvas cells
    document.querySelectorAll("td").forEach(cell => cell.addEventListener("click", function(){
        cell.style.backgroundColor = document.getElementById("picker").value;
    }));
}




