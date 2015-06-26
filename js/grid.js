var gridWidth = 16;
var gridHeight = 16;
$(document).ready(function(){
	for (var i = 0; i < gridWidth; i++) {
		gridMakeWidth();		
	};

	$("#container div").mouseenter(function() {
  		$("#container div" ).addClass(".gray");
  });
});


function gridMakeWidth() {
	$('#container').append(document.createElement("div"));
	$("#container div").addClass("width");
	$("#container").append('<div class="new_line"></div>');
		for (var i = 0; i < (gridHeight - 2); i++) {
		gridMakeHeight();
	};
};

function gridMakeHeight() {
	$('#container').append(document.createElement("div"));
	$("#container div").addClass("height");
};