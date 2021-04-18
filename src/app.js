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

//task 4
window.addEventListener("beforeunload", function(event) {
    const component_a = document.querySelector('#component-a');
    const component_b = document.querySelector('#component-b');
    var classListA = component_a.className;
    var classListB = component_b.className;
    localStorage.setItem("component-a-classes", classListA);
    localStorage.setItem("component-b-classes", classListB);

    //task 6
    const component_b_content = document.querySelector('#component-b span').textContent;
    localStorage.setItem("component-b-content", component_b_content);
});