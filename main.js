$("#name").on("keyup", function(event) {
  var value = $(this).val();
    $("#output1").text("Hey, " + value + ". Choose all of the toppings you'd like on your pizza.");
    $("#output1").css({"color": "green", "font-size": "2em"});

});

$(".button").click(function(){
    $("#output2").text("Don't be silly, computers can't make pizza. The number for Dominos is 1-800-GET-ZAAA. You get this instead:")
     $("#output2").css({"color": "green", "font-size": "1.5em"});
    $("#output3").append("<img src='https://media.giphy.com/media/6LbxewmUrp06A/giphy.gif'>");
})
