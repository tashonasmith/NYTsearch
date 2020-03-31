var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=";
var apiKey = "oLmoudeBzeuVglDNxSArduM8cpGpAa6G";

$("button").on("click", function () {

    $.ajax({
        url: queryURL + apiKey,
        method: 'GET'
    
    }) .then(function(response) {
        console.log(response);
})
})


