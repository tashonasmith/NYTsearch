var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apiKey = "&api-key=oLmoudeBzeuVglDNxSArduM8cpGpAa6G";

$("button").on("click",function () {

    var queryText = $("#searchBox").val();

    $.ajax({
        url: queryURL + queryText + apiKey,
        method: 'GET'
    
    }) .then(function(response) {
        console.log(response);
        $("#results").append("<div>" + response.response.docs[0].headline.main + "</div>");
        

})
})


