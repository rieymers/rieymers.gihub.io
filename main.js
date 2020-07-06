function change_autorefreshdiv(conNum){
    var NAME = document.getElementById(conNum);
    var currentClass = NAME.className;
    if (currentClass == "content-wrapper-null") { // Check the current class name
        NAME.className = "content-wrapper";   // Set other class name
    } else {
        NAME.className = "content-wrapper-null";  // Otherwise, use `second_name`
    }
} 