// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//get a reference to the button and input
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

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
inputField.on("change", function() {
  var newText = d3.event.target.value;
  switch(newText){ //not much reason to use this over an if/else here, I just wanted to use a switch case
	case "":
		createTable(newText)
		break;
	case newText: //this will execute with anything other than empty
		createTable(newText)
		break;
	}
});

createTable(""); //Create and display the full table by default