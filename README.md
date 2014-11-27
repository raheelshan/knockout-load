knockout-load
==================

<strong>A Plugin to load view files on demand</strong>
<p>This plugin is useful when not using requirejs</p>

<h2>Dependencies:</h2>

<ul>
   <li>KnockoutJS (2.2.0+) - http://knockoutjs.com/ </li>
</ul>

<h2>Usage</h2>

Simply use a function ko.load.view

<h2>How to use in component</h2>

<pre>
	var home = function(){
		var self = this
		self.name = ko.observable('Raheel')
	}

	var nameEditorComponent = {
		viewModel:home,
		template:ko.load.view('components/views/home') // Load view file
	}	

	ko.components.register('name-editor',nameEditorComponent)

    $('document').ready(function () {
    	ko.applyBindings()
    })
</pre>

And now

<pre>
	<name-editor></name-editor>    
</pre>


