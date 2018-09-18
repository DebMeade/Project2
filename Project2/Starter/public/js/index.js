// Get references to page elements
// var $exampleText = $("r#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

var drugName = "Hydrocodone";

// var drugId = "42291-281-10"

$.ajax({
  url: "https://api.fda.gov/drug/label.json?search=openfda.brand_name:" + drugName,
  type: "GET"
}).then(function(results) {

  console.log(results);
  console.log("======================");
  console.log("Id Number: " + results.results[0].openfda.package_ndc[0]);
  // proudct_ndc ???????
  console.log("======================");
  console.log("Drug Interactions: " + results.results[0].drug_interactions);
  console.log("======================");
  console.log("Precautions: " + results.results[0].general_precautions);
  console.log("======================");
  console.log("Adverse Reactions: " + results.results[0].adverse_reactions);
  console.log("======================");
  console.log("Ingredients: " + results.results[0].description);
  console.log("======================");
  console.log("Instructions: " + results.results[0].dosage_and_administration);
  // better instructions than this?

})

// $.ajax({
//   url: "https://api.fda.gov/other/nsde.json?ndc_package:42291-281-10" + drugId,
//   type: "GET"
// }).then(function(results){
//   console.log(results);
// })



// The API object contains methods for each kind of request we'll make
// var API = {
//   // saveExample: function(example) {
//   //   return $.ajax({
//   //     headers: {
//   //       "Content-Type": "application/json"
//   //     },
//   //     type: "POST",
//   //     url: "api/examples",
//   //     data: JSON.stringify(example)
//   //   });
//   // },
//   getGeneralInfo: function(drugName) {
//     return $.ajax({
//       url: "https://api.fda.gov/drug/label.json?search=openfda.brand_name:" + drugName,
//       type: "GET"
//     }).then(function(results){
//       console.log(results);
//   })
//   // deleteExample: function(id) {
//   //   return $.ajax({
//   //     url: "api/examples/" + id,
//   //     type: "DELETE"
//   //   });
//   // }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

// saveExample: function(example) {
//   return $.ajax({
//     headers: {
//       "Content-Type": "application/json"
//     },
//     type: "POST",
//     url: "api/examples",
//     data: JSON.stringify(example)
//   });
// }, https://api.fda.gov/drug/label.json?search=openfda.brand_name:Famotidine
