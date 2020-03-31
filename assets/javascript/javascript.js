var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apiKey = "&api-key=oLmoudeBzeuVglDNxSArduM8cpGpAa6G";

$("button").on("click",function () {

    var queryText = $("#searchBox").val();
    var results = $("#number-of-records").val();

    $.ajax({
        url: queryURL + queryText + apiKey,
        method: 'GET'
    
    }) .then(function(response) {
        console.log(response);
        $("#results").empty();
        for (i = 0; i < results; i++)
        {
        $("#results").append("<div><a href='" + response.response.docs[i].web_url + "'>" + response.response.docs[i].headline.main + "</a></div>");
        }
        

})
})


