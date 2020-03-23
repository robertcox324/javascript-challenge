// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//get a reference to the button and input
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

button.on("click", function() {
  var newText = inputField.property("value");
  createTable(newText);
});

function createTable(date){ //function to create a table based on given date parameter
	if (date != ""){
		var datematch = false;
		tbody.html(""); 
		tableData.forEach((ufoReport) => { 
			if(ufoReport.datetime === date){ 
				var row = tbody.append("tr"); 
				Object.entries(ufoReport).forEach(([key, value]) => {
					var cell = row.append("td");
					cell.text(value);
				});
				datematch = true;
			}
		});
		if(datematch === false){
			console.log("no matching date")
		}
	}
	else{
		tbody.html(""); 
		tableData.forEach((ufoReport) => { 
		var row = tbody.append("tr"); 
			Object.entries(ufoReport).forEach(([key, value]) => {
				var cell = row.append("td");
				cell.text(value);
			});
		});
	}
}

createTable(""); //Create and display the full table by default