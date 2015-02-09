var files = [];
var finished = true;
var i = 0;
var loadedPosts = [];

function load() {
    jsonLoaded = 0;
    for(var j = 0; j < files.length; j++) {
        jQuery.getJSON("json/" + files[j] + ".json", function(data) {
            loadedPosts.push(data);
            if (loadedPosts.length == files.length) {
                organizeAndPost();
            }
        });
    }
}

function organizeAndPost() {
    loadedPosts.sort(function(a, b) {
        var da = new Date(removeExtraFromNumbers(a.date));
        var db = new Date(removeExtraFromNumbers(b.date));
        if (da > db) return -1;
        if (da < db) return 1;
        else         return 0;
    });
    
    for (var k = 0; k < loadedPosts.length; k++) {
        var data = loadedPosts[k];
        var info = [
            "<h2>" + data.title + "</h2>",
            "<p>" + data.date + "</p>",
            "<p>" + data.author + "</p>",
            "<img src=\"img/" + data.author + ".png\" height=\"40\"  width=\"40\" />",
            "<p>" + data.content + "</p>"
        ];
        $("#content #info").append(info);
    }
}

function removeExtraFromNumbers(date) {
    return date.replace("st,", ",").replace("nd,", ",").replace("rd,", ",").replace("th,", ",");
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