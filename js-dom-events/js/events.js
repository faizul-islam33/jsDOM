// option: 1 directly set on the HTML element
//<button onclick="console.log(55)">Another button</button>


// option: 2 add onclick function on the HTML element
// Important: We will use this sometimes
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'crimson';
}


// option: 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'cyan';
}



// option: 3 another 

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}



// option: 4

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}



// option: 4 another

const greenButton = document.getElementById('make-green');

greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});



// option: 4 final
// Important: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})


