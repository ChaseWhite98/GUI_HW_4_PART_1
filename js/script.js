/*
Chase White
Chase_white@student.uml.edu
GUI I:  HW 3 multiplcation table:  JS file
6/13/22
*/

//function for validating form, uses jquery validate plugin
function validate_form(){
	//this method is straight outta stackoverf.
	$.validator.addMethod("greaterThan", function (value, element, param) {
          var $otherElement = $(param);
          return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });

	$("#entry_form").validate({
	    //rules for each of the 4 entry fields
	    rules: {
	    	minrow: {
	        	required: true,
	        	range: [-50, 50]
	      	},
	      	maxrow: {
	      		required: true,
	        	range: [-50, 50],
	        	greaterThan: "#minrow"
	      	},
	      	mincol: {
	        	required: true,
	        	range: [-50, 50]
	      	},
	      	maxcol: {
	        	required: true,
	        	range: [-50, 50],
	        	greaterThan: "#mincol"
	      	}
	    },

	    //corresponding error messages for above rules, if broken
	    messages: {
	      	minrow: {
	      		required: "<div class='validate_msg'>No value entered; Please enter an integer number in range [-50, 50]</div>",
	    		range: "<div class='validate_msg'>Value out of range; Please enter an integer number in range [-50, 50]</div>"
	      	},
	     	maxrow: {
	    		required: "<div class='validate_msg'>No value entered; Please enter an integer number in range [-50, 50]</div>",
	    		range: "<div class='validate_msg'>Value out of range; Please enter an integer number in range [-50, 50]</div>",
	    		greaterThan: "<div class='validate_msg'>max value must be greater than min value</div>"
	      	},
	      	mincol: {
	        	required: "<div class='validate_msg'>No value entered; Please enter an integer number in range [-50, 50]</div>",
	    		range: "<div class='validate_msg'>Value out of range; Please enter an integer number in range [-50, 50]</div>"
	      	},
	      	maxcol: {
	        	required: "<div class='validate_msg'>No value entered; Please enter an integer number in range [-50, 50]</div>",
	    		range: "<div class='validate_msg'>Value out of range; Please enter an integer number in range [-50, 50]</div>",
	    		greaterThan: "<div class='validate_msg'>max value must be greater than min value</div>"
	      	}
	    },

  		submitHandler: function(form) {
    		return calculate_table();
  		}
  	});

}

//function to display form-matching multiplication table
function calculate_table(){
	//get all input values from form
	var mincol = Number(document.getElementById("mincol").value);
	var maxcol = Number(document.getElementById("maxcol").value);
	var minrow = Number(document.getElementById("minrow").value);
	var maxrow = Number(document.getElementById("maxrow").value);
	console.log(mincol, maxcol, minrow, maxrow);

	//initialize the final HTML table output to the table opening with empty TL corner
	var table_output = "<table><tr><td></td>";

	//loop for heading row at top
	for (var i = mincol; i <= maxcol; i++){
		table_output += "<td>" + i + "</td>";
	}
	table_output += "</tr>"; //end first row (heading row)

	//rest of rows loop
	for (var i = minrow; i <= maxrow; i++){
    	table_output += "<tr><td>" + i + "</td>";
    	for (var j = mincol; j <= maxcol; j++){
    		table_output += "<td>" + i*j + "</td>";
    	}
    	table_output += "</tr>";
	}

	//finish off table w/ closing
	table_output += "</table>";
	console.log(table_output);

	//grab empty div and set its inner html to the content of the table, which displays it
	var multi_table = document.getElementById("multi_table");
	multi_table.innerHTML = table_output;

	return false;
}