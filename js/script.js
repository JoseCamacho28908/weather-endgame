var sugguestionsSunny = ["sunglasses", "suncreen", "hat"];

var suggestionRain = ["umbrella", "rainboots", "rain poncho"];

let userInput = $("#city").val()
var length;
for (var count= 0; count < suggestionRain.length; count++){
    $("#button2").append("<p> You should have " + suggestionRain[count] + " with you </p>");
    
}
$("").click(function(){
    
});

$("#button1").click(function(){
    var request_url = "http://api.openweathermap.org/data/2.5/weather?q="+userInput+"&APPID=083239ab6de14c2379d19581628b2c16";
   
  $.ajax({
    url:request_url,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    type:"GET",
    dataType: 'jsonp',
    success:function(response){
    console.log(response.main.temp);   
    }
    
});
   
    
});

//http://api.openweathermap.org/data/2.5/weather?q=Manhattan&APPID=083239ab6de14c2379d19581628b2c16