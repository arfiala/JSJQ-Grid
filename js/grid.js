var gridWidth = 16;
var gridHeight = 16;
$(document).ready(function(){
	for (var i = 0; i < gridWidth; i++) {
		gridMakeWidth();		
	};
    $('#new').click( function() {
    	$("#container" ).empty();
    	var gridWidth = prompt("What is your new grid width?");
    	var gridHeight = prompt("What is your new grid height?");
    	window.alert(gridWidth);
    	window.alert(gridHeight);
        for (var i = 0; i < gridWidth; i++) {
			gridMakeWidth();		
		};
		$("div div").mouseenter(function() {
  			$(this).fadeTo(100,0);
 		});
    });
	$('#clear').click( function() {
      	$("#container" ).empty();
        for (var i = 0; i < gridWidth; i++) {
			gridMakeWidth();		
		};
		$("div div").mouseenter(function() {
  			$(this).fadeTo(100,0);
 		});
    });
	$("div div").mouseenter(function() {
  		$(this).fadeTo(100,0);
 	});
// 	$(this).mouseleave(function(){      For Fun!!
//			$(this).fadeTo(4000,1);
//		});
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

function newGrid() {

}