// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//get a reference to the button 
var button = d3.select("#filter-btn");

button.on("click", function() {
  //get references to every input and store in a variable you can pass to each table
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");
  createTable(date, city, state, country, shape)
});

function createTable(date, city, state, country, shape){ //function to create a table based on given parameters
	var datematch = false;
	var citymatch = false;
	var statematch = false;
	var countrymatch = false;
	var shapematch = false;
	tbody.html(""); 
	tableData.forEach((ufoReport) => { 
		//conditionals to check which value, if any, caused no results to be printed
		if((ufoReport.datetime === date)||(date === "")){
			datematch = true;
		}
		if((ufoReport.city === city)||(city === "")){
			citymatch = true;
		}
		if((ufoReport.state === state)||(state === "")){
			statematch = true;
		}
		if((ufoReport.country === country)||(country === "")){
			countrymatch = true;
		}
		if((ufoReport.shape === shape)||(shape === "")){
			shapematch = true;
		}
		//the next few lines are a monster of an if statement since I have to check for all 5 conditions
		//and I don't want to have an enormous tree...
		if(((ufoReport.datetime === date)||(date === ""))&&((ufoReport.city === city)||(city === ""))&&
		((ufoReport.state === state)||(state === ""))&&((ufoReport.country === country)||(country === ""))&&
		((ufoReport.shape === shape)||(shape === ""))){
			var row = tbody.append("tr"); 
			Object.entries(ufoReport).forEach(([key, value]) => {
				var cell = row.append("td");
				cell.text(value);
			});
		}
	});
	//let the user know (in console) which of the values they entered had no matches
	//if none of these show up, all the stuff entered had matches... it just didn't have
	//something that matched all of them!
	if(datematch === false){
		console.log("no matching date")
	}
	if(citymatch === false){
		console.log("no matching city")
	}
	if(statematch === false){
		console.log("no matching state")
	}
	if(countrymatch === false){
		console.log("no matching country")
	}
	if(shapematch === false){
		console.log("no matching shape")
	}
}

createTable("","","","",""); //Create and display the full table by default