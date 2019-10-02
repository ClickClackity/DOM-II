// Your code goes here

let links = document.querySelectorAll('.nav-link');
let pars = document.querySelectorAll('.text-content');
let buttons = document.querySelectorAll('.btn');
// function openWin() {
//     myWindow = window.open("https://www.google.com", "_blank", "width=200, height=100");
//   }
  
//   function closeWin() {
//     myWindow.close();
//   }

// // EV1
// windowOpen();
// alert("Made a wrong decision in life.");
// windowClosed();


// EV1
document.addEventListener('copy', el => {
    el.preventDefault();
    alert('Ha! You really think I\'d let you copy any of my genius?');
    document.write('<p style="font-size: 20rem;"> Not a chance.');
});

// EV2
links.forEach(e => {
    e.addEventListener('mouseenter', l => {
        l.target.style.fontWeight = 'bold';
        l.target.style.color = 'purple';
    });
});

// EV3
links.forEach(e => {
    e.addEventListener('mouseleave', l => {
        l.preventDefault();
        alert('And just where exactly do you think you\'re headed off to?');
    });
});

// EV4
window.setTimeout(function() {
    alert('Surprise challenge! What does the following code return:\n \"const sortByHeight = a => a.map(h => h < 0 ? h : b[i++], b = a.filter(h => h >= 0).sort((a, b) => a - b));\"?');
}, 20000 / 5);

// EV 4.5
window.setTimeout(function() {
    alert('If that prior one was a bit too difficult for you, how about some regex to make things simple? What is the goal of this function?\n \"const variableName = name => return /^[A-Z_]\\w*$/i.test(name);\"?')
}, 2 * 15000);

// EV 5
document.addEventListener('contextmenu', el => {
    el.preventDefault();
    alert('Now why would you do that?');
    prompt('Have you learned your lesson?');
});

// EV 6
// let popup_opened;
// let current_time;
// let time_spent_opened;
// let openWin = window.open("https://www.google.com", "_blank", "width=800 height=600", popup_opened = (new Date()).getTime());
// openWin.document.write('<p style="color: blue;"> Oh lalalala dida. You should close this.');
// window.onunload = function() {
//     current_time = (new Date()).getTime();
//     time_spent_opened = (current_time - popup_opened) / 100;
//     return alert(time_spent_opened);
// };

// EV 7
document.addEventListener("dblclick", el => {
    el.preventDefault();
    el.target.parentElement.removeChild(el.target);
});

// EV 8
buttons.forEach(el => {
    el.addEventListener('click', elel => {
        elel.target.style.color = "orange";
        elel.target.style.backgroundColor = "yellow";
    });
});

// EV 9
document.addEventListener('keypress', el => { 
    switch (el.keyCode) {
        case 99:
            document.body.style.fontFamily = 'Impact, Charcoal, sans-serif';
            break;
        
        case 106:
            document.body.style.textDecoration = "underline";
            break;
        
        default:
            confirm("You do know how to press keys right?");
            break;
    }
});

