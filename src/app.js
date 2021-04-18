var template = function(props) {
    return `
    <div id="app">
    </div>
	`;
};

//task 1 , 2
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}


var body = document.body;
body.innerHTML = template();


//task 2
const container = document.querySelector('#app');
css(container, {
    display: 'flex'
});

var componentA = document.createElement('script');
componentA.src = 'components/component-a.js';
document.body.appendChild(componentA);

var componentB = document.createElement('script');
componentB.src = 'components/component-b.js';
document.body.appendChild(componentB);