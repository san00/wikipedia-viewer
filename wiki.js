function search() {

  var searchWord = $("#searchbox").val();
  var apiResult = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
  +searchWord + "&format=json";

  $.ajax({
    url: apiResult,
    dataType: "jsonp",
    success: function(info){
      //loop to return search results & display them on page
      for (var i = 0; i < info[1].length; i++){
       $("#searchresult").append("<a href=" +info[3][i]+"><h2>" + info[1][i]
       + "</h2>" + info[2][i] + "</a>");
     }
    }
  })
}
//search using keypress or button click
$("form").submit(function(press){
  press.preventDefault();
  search();
});
 $("form").on('click', search);
