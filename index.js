$(".btn").click(function(){

  var chosenBox = $(this).attr("id");

  $("#" + chosenBox).addClass("pressed");
  setTimeout(function () {
  $("#" + chosenBox).removeClass("pressed");
  }, 100);

});
