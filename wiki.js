function search() {

  var searchWord = $("#searchbox").val();
  var apiResult = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
  +searchWord + "&format=json";

  $.ajax({
    url: apiResult,
    dataType: "jsonp",
    success: function(info) {
      console.log(info)
    }
  })
}
//submit allows keypress and/or button click
$("form").submit(function(e){
e.preventDefault();
search();
});
