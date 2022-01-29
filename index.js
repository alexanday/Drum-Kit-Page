//I got clicked event listener
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    
}

function handleClick() {
    alert("I got cliked!")
}