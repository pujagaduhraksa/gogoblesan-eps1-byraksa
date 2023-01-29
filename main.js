// Change Color
function ubahLatar(){
    const color = document.getElementById('inputHexa').value;
    const card = document.getElementsByClassName('card')[0];

    card.style.backgroundColor=color;
}