var files = [];
var finished = true;

function check(url) {
    $.get(url + ".json")
    .done(function() {
        alert(url + " exists");
        finished = false;
        files.push(url);
    })
    .fail(function() {
        alert(url + " does not exist!");
        finished = true;
    });
}

function load() {
    for(var i = 0; i < files.length; i++) {
        jQuery.getJSON(files[i] + ".json", function(data) {
            var info = [
                "<h2>" + data.title + "</h2>",
                "<p>" + data.date + "</p>",
                "<p>" + data.author + "</p>",
                "<p>" + data.content + "</p>"
            ];
        });
            
        $("#content #info").append(info);
    }
}

$(document).ready(function() {
    check(0);
    if(finished === true) {
        alert("nope");
    } else {
        alert("yep");
    }
});