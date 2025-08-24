var tasklist = document.getElementById("tasklist")

function AddElement() {
    var input = document.getElementById("textinput")
    var li = document.createElement("li")
    var text = document.createTextNode(input.value)
    li.appendChild(text)
    li.setAttribute("class", "litext")
    tasklist.appendChild(li)
    // EditBtn
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("✎")
    editbtn.appendChild(edittext)
     editbtn.setAttribute("onclick","edit(this)")
    editbtn.setAttribute("class", "edit")
    li.appendChild(editbtn)
    // DeleteBtn
    var deletebtn = document.createElement("button")
    var deletetext = document.createTextNode("🗑️")
    deletebtn.appendChild(deletetext)
    deletebtn.setAttribute("onclick","del(this)")
    deletebtn.setAttribute("class", "Delete")
    li.appendChild(deletebtn)
}
// ClearAll
function ClearAll() {
    tasklist.innerHTML = ""
}
function del(element) {
  element.parentElement.remove()
}

function edit(element) {
  var editvalue=prompt("what do you want to change", element.parentElement.firstChild.nodeValue) 
  element.parentElement.firstChild.nodeValue=editvalue
}