var template = function(props) {
    return `
    <div id="app">
    </div>
	`;
};


var body = document.body;
body.innerHTML = template();

var componentA = document.createElement('script');
componentA.src = 'components/component-a.js';
document.body.appendChild(componentA);

var componentB = document.createElement('script');
componentB.src = 'components/component-b.js';
document.body.appendChild(componentB);