// var input1 = document.getElementById('color1')
// var input2 = document.getElementById('color2')
// var container = document.querySelector('body')
// var button = document.getElementById('btn')

// function generate(){
//     var color1 = input1.value
//     var color2 = input2.value
//     container.style.backgroundImage = "linear-gradient(to left," + color1 + "," + color2 + ")"
//     console.log(color1,color2)
// }

// button.addEventListener('click', generate)


// var input1 = document.getElementById('color1')
// var input2 = document.getElementById('color2')
// var input3 = document.getElementById('color3')


var container = document.querySelector('body')
var button = document.getElementById('btn')

function generate(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    container.style.background = "rgb(" + r + "," + g + "," + b + ")";
    show = container.style.background;
    console.log(show)
}

button.addEventListener('click', generate)
