/*set up*/
const tabs = [
    'positive',
    'negative',
    'neutral'
];
let selected = 'positive';

/*Selectors */
const formElement = document.getElementById('form');
const tabHeadingElement = document.getElementById('tabHeading');
const inputElement = document.getElementById('input');
const submitElement = document.getElementById('submit');
const tabContentElement = document.getElementById('tab-content');


// utilities and functions

function render() {
    tabHeadingElement.innerHTML = '';

    tabs.forEach(tab => {
        tabHeadingElement.innerHTML += `<p data-rating='${tab}' class="${tab==selected? 'active': ''}"> ${tab}</p>`
    })
    tabContentElement.innerHTML = `<p>${selected}</p><span> content</span>`
}

/* Event Listeners */
tabHeadingElement.addEventListener('click', (event) => {
    selected = event.target.dataset.rating;
    render();
})

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputElement.value > 3 || inputElement.value < 1) {
        alert('invalid index');
    } else {
        let inputIndex = inputElement.value - 1;
        selected = tabs[inputIndex];
        render();
    }
})

render();