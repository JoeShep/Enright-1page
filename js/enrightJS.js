$(document).ready(function () {
$(".poverTop").popover({
	placement: "bottom"
});
$(".poverBottom").popover({
	placement: "top"
});

$('#slider').barousel({
	navType: 2,
	slideDuration: 9000
});

$("li a img").css({ opacity: 0.1 });
$(".line-separator").hide();
$(".aboutEnright").hide();
$("#closeDiv1").hide();
$(".closeService").hide();
$(".serviceItems").hide();

$("#founder").click(function(){
	$(".aboutEnright").slideDown("slow");
	$("#founderDiv").show();
	$("#closeDiv1").slideDown("slow");
	$(".line-separator").show();
	$(".aboutUs").slideUp("slow");
   }); //end click

$("#closeDiv1").click(function(){
	$(".aboutEnright").slideUp("slow");
	$("#closeDiv1").slideUp("slow");
	$(".line-separator").hide();
	$(".aboutUs").slideDown("slow");
	// $("#serviceList").slideUp("slow");
	// $("#partnerP").slideDown("slow");
  }); //end click

$(".closeService").click(function(){
	$(".aboutUs").slideDown("slow");
	$(".serviceItems").slideUp("slow");
	$(".closeService").hide();
});

$("#servicesNav").click(function(){
	$("#serviceList").animate({"left": "-85px"});
	$("#intro p").css("visibility","hidden");
});

$("#services").click(function(){
	$("#serviceList").animate({"left": "-85px"});
	$("#intro p").css("visibility","hidden");
	document.getElementById("topContent").scrollIntoView();
});

$("#aboutNav").click(function(){
	document.getElementById("founder").scrollIntoView();
}) //end about Nav click

$("#contact").click(function(){
	// $("#myModal").modal();
	document.getElementById("foot").scrollIntoView();

}) //end contact click

}); //end ready


