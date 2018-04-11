var q = $('#q');
var  keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500)
    .map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x);                    
    })
    .do(function(x) {
        console.log(x);
        $('#results').html(""); // Kasowanie poprzedniego wyniku
    })
    .subscribe(function(x) {
        x[1].forEach((element,i) => {
            $('#results').append("<div>" 
                + element
                +" <a href='" +x[3][i]+ "'>" +x[3][i]
                + "</a></div>"
                //+ "<div>"+x[2][i]+"</div>"
            );          
        });
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}