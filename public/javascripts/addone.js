document.getElementById('addOne').addEventListener("click", addOne)
document.getElementById('delOne').addEventListener("click", delOne)

let counter = 1 

function addOne() {
   counter++ 
   selectVal = document.getElementById("select").value
   console.log(selectVal)
   selectVal.Object.assign(document.createElement('option'), {value:'<%=w.name%>', innerText:'<%=w.name%>'})
}

function delOne() {
 counter--
 selectVal = document.getElementById("select").value
 console.log(selectVal) 
}

