var open = true;
var fullscreen = false;

window.addEventListener("DOMContentLoaded", (event) => {

    // if (window.fullscreen) {
    //     console.log("is")
    // }
    // else {
    //     console.log("not")
    // }

    
    checkTime();

    setInterval(checkTime, 1000);

    terminalInfo();

    print("Type the following commands to find out more about me:");
    print("")
    commandList();

    focusOnInput();

    // When terminal window is clicked, focus on the input element
    var terminalDiv = document.getElementById("commandDiv");
    terminalDiv.addEventListener("click", function(event) {
        focusOnInput()
    });
    
    
    // When enter is pressed, send command to terminal and process command
    var input = document.getElementById("userInput");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            commandEntered();
        }
    });
        

    var minimiseButtonDiv = document.getElementById("minimiseButtonDiv");
    minimiseButtonDiv.addEventListener("click", function(event) {
        minimiseWindow()
    });

    var fullscreenButtonDiv = document.getElementById("fullscreenButtonDiv");
    fullscreenButtonDiv.addEventListener("click", function(event) {
        fullscreenWindow()
    });

    var closeButtonDiv = document.getElementById("closeButtonDiv");
    closeButtonDiv.addEventListener("click", function(event) {
        closeWindow()
    });

    var cmdIcon = document.getElementById("cmdIconDiv");
    cmdIcon.addEventListener("click", function(event) {
        openWindow()
    });

    dragElement(document.getElementById("mydiv"));
})

function commandEntered(){
    let userInput = document.getElementById('userInput');
    let command = userInput.value;
    userInput.value = "";

    let commandUpper = command.toUpperCase();
    switch (commandUpper) {
        case "": printEmpty(); break;
        case "CLEAR":  clear(); break;
        case "HELP":  printLine(command,""); commandList(); break;
        case "EXIT":  closeWindow(); break;
        case "ABOUTME": printLine(command,""); aboutMe(); break;
        case "EDUCATION": printLine(command,""); education(); break;
        case "EXPERIENCE": printLine(command,""); experience(); break;
        case "SOCIAL": printLine(command,""); social(); break;
    
        default: printWrongCommand(command) ; break;
    }
}

function focusOnInput(){
    document.getElementById("userInput").focus();
}



function checkTime(){
    document.getElementById('time').innerHTML = new Date().getHours().toString().padStart(2, '0') +":"+new Date().getMinutes().toString().padStart(2, '0');
    document.getElementById('date').innerHTML = new Date().toLocaleDateString()
}



// Print formatting

function printWrongCommand(printText){
    print("C:\\Users\\User> "+printText)
    print("'"+printText+"' is not recognized as an internal or external command,")
    print("operable program or batch file.")
    print("");
}

function printEmpty(){
    print("C:\\Users\\User> ")
}

function printLine(command,text){
    print("C:\\Users\\User> "+command)
    print(text)
}

// print

function terminalInfo(){
    print("Microsoft Windows [Version 10.0.19045.4170]")
    print("(c) Microsoft Corporation. All rights reserved.")
    print("");
}

function commandList(){
    print("---------------------- CMD COMMANDS ----------------------")
    print("");
    printCommand("CLEAR","Clear the terminal")
    printCommand("HELP","List of all the available commands")
    printCommand("EXIT","Quit the cmd window")
    printCommand("ABOUTME","Short description about me")
    printCommand("EDUCATION","My education and what I learned")
    printCommand("EXPERIENCE","Work experience and skills acquired")
    // printCommand("PROJECTS","Details about my personal projects")
    printCommand("SOCIAL","My social contact")

    endingText();
}

function aboutMe(){
    print("------------------------ ABOUT ME ------------------------")
    print("");
    print("Hello, my name is Bartek.")
    print("I am a software developer with a keen interest in pushing the boundaries of innovation")
    print("through software development in various programming languages.")
    print("");
    printLink("My porfolio website:","https://barto670.github.io/"); 
    endingText();
}

function education(){
    print("----------------------- EDUCATION ------------------------")
    print("");
    printCommand("Title:","Master of Engineering (MEng)")
    printCommand("Course:","Computer and Communications Systems")
    printCommand("Location:","University of Limerick")
    printCommand("Skills:","HTML, CSS, JavaScript, Security, JSON, SSL, Android, DSP, Telecommunication,")
    printCommand("","Firewalls, IoT, Data Enryption, Databases, Router Configuration")
    print("");
    printCommand("Title:","Bachelor of Science (BS)");
    printCommand("Course:","Computer Systems");
    printCommand("Location:","University of Limerick");
    printCommand("Skills:","Java, Python, Angular, Go, Lua, HTML, CSS, TypeScript, AI, Security,");
    printCommand("","Databases, C, Spring Boot, C++")
    endingText();
}

function experience(){
    print("----------------------- EXPERIENCE ------------------------")
    print("");
    printCommand("Company:","WrxFlo")
    printCommand("Positon:","Fullstack Software Developer")
    printCommand("Location:","Nexus Innovation Centre Tierney Building, Castletroy, Co. Limerick, Ireland")
    printCommand("Skills:","HTML, CSS, TypeScript, JavaScript, JSON, Java, Python, Angular, Node.js");
    printCommand("","Bootstrap, IoT, RESTful API, Databases, Responsive Design")
    endingText();
}

function social(){
    print("------------------------ SOCIAL -------------------------")
    print("");
    printLink("GitHub:","https://github.com/Barto670"); 
    print("");
    print("Email:  bartodev670@gmail.com")
    endingText();
}

function endingText(){
    print("");
    print("----------------------------------------------------------")
    print("");
}






// Print options
function print(text){
    let commandDiv = document.getElementById('listOfLines');
    let container = document.createElement("div");
    container.innerHTML = `<div class="line">`+text+`</div>`
    commandDiv.append(container);
    document.getElementById("userInput").scrollIntoView();
}

function printCommand(text,text2){
    let commandDiv = document.getElementById('listOfLines');
    let container = document.createElement("div");
    container.innerHTML = `<div class="line" style="flex-wrap: wrap; display: flex;">
                            <div style="width: 150px;">
                                `+text+`
                            </div>
                            <div>
                                `+text2+`
                            </div>
                        </div>`
    commandDiv.append(container);
    document.getElementById("userInput").scrollIntoView();
}


function printLink(text,link){
    let commandDiv = document.getElementById('listOfLines');
    let container = document.createElement("div");
    container.innerHTML = `<div class="line">`+text+" "+`<a href='`+link+`' target="_blank">`+link+`</a></div>`
    commandDiv.append(container);
    document.getElementById("userInput").scrollIntoView();
}


// OPEN | CLOSE | MINIMISE 
function clear(){
    let commandDiv = document.getElementById('listOfLines');
    commandDiv.innerHTML = '';

    terminalInfo()
}


function closeWindow(){
    clear();
    open = false;
    document.getElementById('mydiv').style.display = "none";
    document.getElementById('mydiv').style.top = null;
    document.getElementById('mydiv').style.left = null;
    document.getElementById('cmdIconDiv').classList.remove('opened');
    if(fullscreen){
        fullscreen = false;
        document.getElementById('mydiv').classList.replace('fullscreen', 'minimised');
        document.getElementById('mydiv').style.top = null;
        document.getElementById('mydiv').style.left = null;
    }
}

function openWindow(){
    open = !open;
    if(open){
        document.getElementById('mydiv').style.display = "block";
        document.getElementById('cmdIconDiv').classList.add('opened');
        focusOnInput();
    }else{
        document.getElementById('mydiv').style.display = "none";
    }
    
}

function minimiseWindow(){
    open = false;
    document.getElementById('mydiv').style.display = "none";
}

function fullscreenWindow(){
    fullscreen = !fullscreen;
    if(fullscreen){
        document.getElementById('mydiv').classList.replace('minimised', 'fullscreen');
        document.getElementById('mydiv').style.top = '0';
        document.getElementById('mydiv').style.left = '0';
        focusOnInput();
    }else{
        document.getElementById('mydiv').classList.replace('fullscreen', 'minimised');
        document.getElementById('mydiv').style.top = null;
        document.getElementById('mydiv').style.left = null;
        focusOnInput();
    }
}





// Dragable window
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}