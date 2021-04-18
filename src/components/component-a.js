var template = function(props) {
    return `
	<div id="component-a" class="component">
	<div class="component-a-container">
	<span class="component-title text-center"> Component A </span>
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