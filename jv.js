function submitAction(event){
    event.preventDefault();
    alert("hello");
}
var submit = window.document.getElementById("submit-button");
submit.addEventListener('click', submitAction);
