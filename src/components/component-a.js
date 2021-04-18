var template = function(props) {
    return `
	<div id="component-a" class="component">
	<div class="component-a-container">
	<span class="component-title text-center"> Component A </span>
    <button class="btn component-a-btn">change color</button>
    <input type="text" id="source">
    </div>
	</div>
	`;
};

//task 1 , 2
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}


var app = document.querySelector('#app');
app.innerHTML += template();

//task 1 
const component_a = document.querySelector('#component-a');
css(component_a, {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
});

//task 3
const component_a_container = document.querySelector('.component-a-container');
css(component_a_container, {
    display: 'flex',
    'flex-direction': 'column'
});

window.addEventListener('load', (event) => {

    //task 4
    if (localStorage.getItem("component-a-classes") !== null && localStorage.getItem("component-a-classes").includes("lightpink") === true) {
        const component_a = document.querySelector('#component-a');
        const component_b = document.querySelector('#component-b');
        component_a.classList.add("bg-lightpink");
        component_b.classList.remove("bg-lightpink");
    }

    //task 3
    const component_a_btn = document.querySelector('.component-a-btn');
    component_a_btn.addEventListener('click', changeColor);

    function changeColor(e) {
        const component_a = document.querySelector('#component-a');
        const component_b = document.querySelector('#component-b');
        component_a.classList.add("bg-lightpink");
        component_b.classList.remove("bg-lightpink");
    }


    //task 5
    const source = document.getElementById('source');
    const result = document.getElementById('result');

    const inputHandler = function(e) {
        result.innerHTML = e.target.value;
    }

    source.addEventListener('input', inputHandler);
    source.addEventListener('propertychange', inputHandler); // for IE8


});