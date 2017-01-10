function search() {

    var searchWord = $("#searchbox").val();
    var apiResult = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        searchWord + "&format=json";
//return search results & display them
    $.ajax({
        url: apiResult,
        dataType: "jsonp",
        success: function(info) {
            for (var i = 0; i < info[1].length; i++) {
                $("#searchresult").append("<a href=" + info[3][i] + "><h2>" + info[1][i] +
                    "</h2>" + info[2][i] + "</a>");
            }
        }
    })
}
//enter info using keypress or button click, also empty previously displayed results
$("form").submit(function(press) {
    press.preventDefault();
    search();
    $("#searchresult").empty();
});
$("form").click(function() {
    search();
    $("#searchresult").empty();
})
