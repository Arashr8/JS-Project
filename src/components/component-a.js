var template = function(props) {
    return `
	<div id="component-a" class="component">
	<div class="component-a-container">
	<span class="component-title text-center"> Component A </span>
	</div>
	</div>
	`;
};


var app = document.querySelector('#app');
app.innerHTML += template();