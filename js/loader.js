var files = [];
var finished = true;
var i = 0;

function load() {
    for(var j = 0; j < files.length; j++) {
        jQuery.getJSON("json/" + files[j] + ".json", function(data) {
            var info = [
                "<h2>" + data.title + "</h2>",
                "<p>" + data.date + "</p>",
                "<p>" + data.author + "</p>",
                "<p>" + data.content + "</p>"
            ];
            $("#content #info").append(info);
        });
    }
}

function go() {
    $.get("json/" + i + ".json")
    .done(function() {
        finished = false;
    })
    .fail(function() {
        finished = true;
    })
    .always(function() {
        if(!finished) {
            files.push(i);
            i++;
            go();
        } else {
            load();
        }
    });

}


$(document).ready(function() {
    go();
});