var template = function(props) {

    return `
	<div id="component-b" class="component">
    <div class="component-b-container">
	<span class="component-title text-center"> Component B </span>
    <button class="btn component-b-btn">change color</button>
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
const component_b = document.querySelector('#component-b');
css(component_b, {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
});

//task 3
const component_b_container = document.querySelector('.component-b-container');
css(component_b_container, {
    display: 'flex',
    'flex-direction': 'column'
});


window.addEventListener('load', (event) => {

    //task 4
    if (localStorage.getItem("component-b-classes") !== null && localStorage.getItem("component-b-classes").includes("lightpink") === true) {
        const component_b = document.querySelector('#component-b');
        const component_a = document.querySelector('#component-a');
        component_b.classList.add("bg-lightpink");
        component_a.classList.remove("bg-lightpink");
    }

    //task 3
    const component_b_btn = document.querySelector('.component-b-btn');
    component_b_btn.addEventListener('click', changeColor);

    function changeColor(e) {
        const component_b = document.querySelector('#component-b');
        const component_a = document.querySelector('#component-a');
        component_b.classList.add("bg-lightpink");
        component_a.classList.remove("bg-lightpink");
    }


});