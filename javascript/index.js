// practice no 2

const h2 = document.getElementsByTagName('h2');
for (const singleH2 of h2) {
    singleH2.style.color = 'lightblue';
}

// practice no 3

const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

// practice no 4
const cardItems = document.getElementsByClassName('card');
for (const singleCard of cardItems) {
    singleCard.style.borderRadius = '30px';
}

// practice no 5
function callBack() {
    console.log('hey world');
}

// practice no 6
const allButton = document.getElementsByClassName('btn');
for (const button of allButton) {
    button.addEventListener('click', function (e) {
        e.target.parentNode.removeChild(e.target);
    })
}

// practice no 7

const inputArea = document.getElementById('exampleInputEmail1');
inputArea.addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-submit');
    if (text === 'email') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
});

// practice no 8

const imgTag = document.getElementsByTagName('img');
for (const singleImg of imgTag) {
    singleImg.addEventListener('click', function (event) {
        event.target.removeAttribute('src');
        event.target.setAttribute('src', './images/common-img.jpeg');
    })
}

// practice no 9

const formBackground = document.getElementById('subscribe');
formBackground.addEventListener('click', function () {
    formBackground.style.backgroundColor = 'red';
})