var template = function(props) {

    return `
	<div id="component-b" class="component">
    <div class="component-b-container">
	<span class="component-title text-center"> Component B </span>
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