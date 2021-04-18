var template = function(props) {

    return `
	<div id="component-b" class="component">
    <div class="component-b-container">
	<span class="component-title text-center"> Component B </span>
    </div>
	</div>
    `;
};

var app = document.querySelector('#app');
app.innerHTML += template();