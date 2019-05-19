// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

// Append data to the table *using Arrow!
data.forEach((row) => {
    var new_row = tbody.append("tr");
    Object.entries(row).forEach(([key, value]) => {
        // var cell = tbody.append("td");
        // cell.text(value);
        new_row.append("td").text(value);
    });
});


// // Append data to the table
// var date_string = "01/04/2010";

var submit = d3.select("#filter-btn");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(row => Date.parse(row.datetime) === Date.parse(inputValue));

    console.log(filteredData);

    // Delete current data on table before appending filtered data
    d3.selectAll("tr").remove();

    // Appending filtered data
    filteredData.forEach((row) => {
        var new_row = tbody.append("tr");
        Object.entries(row).forEach(([key, value]) => {
            // var cell = tbody.append("td");
            // cell.text(value);
            new_row.append("td").text(value);
        });
    });


});

