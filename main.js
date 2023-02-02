// Change Color
// function ubahLatar(){
//     const color = document.getElementById('inputHexa').value;
//     const card = document.getElementsByClassName('card')[0];

//     card.style.backgroundColor=color;
// }

// Change Color
const targetObject = document.getElementById('targetObject');
const inputHexa = document.getElementById('inputHexa');

function ubahLatar() {
    targetObject.style.backgroundColor = inputHexa.value
}