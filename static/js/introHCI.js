'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Successfully changed");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");

	});
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
function projectClick(e) {
    // prevent the page from reloading
    console.log("Project clicked");
    e.preventDefault();
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } 
    else 
    { //if ((description.length % 2) == 0){
       $(description).toggle("slow");
    }
}
function updateProject(e){
	var projectVal = $('#project').val();
	$(projectVal).animate({
		width: $('#width').val()
	});

	var newDescription = $('#description').val();
	$(projectVal + " .project-description").text(newDescription);
}