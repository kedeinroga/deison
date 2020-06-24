// sweet alert 
$(function(){
	basicSwal = function(){
		swal("Hello world! Example");
	}
	basicTitleSwal = function(){
		swal("Here's the title!", "...and here's the text!");
	}
	successSwal = function(){
		swal("Good job!", "You clicked the button!", "success");
	}	
	errorSwal = function(){
		swal("Something Wrong!", "You clicked the button!", "error");
	}	
	infoSwal = function(){
		swal("Information!", "You clicked the button!", "info");
	}
	warningSwal = function(){
		swal("Warning!", "You clicked the button!", "warning");
	}	
	confirmSwal = function(){
		swal({
		  title: "Are you sure?",
		  text: "Once deleted, you will not be able to recover this imaginary file!",
		  icon: "error",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		    swal("Poof! Your imaginary file has been deleted!", {
		      icon: "success",
		    });
		  } else {
		    swal("Your imaginary file is safe!");
		  }
		});
	}
});