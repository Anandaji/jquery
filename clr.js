$(document).ready(function() {
    var color = ["00", "33", "55", "99", "77", "cc", "ff"]
    var ran = function() {
        return Math.floor(Math.random() * 6);

    };
    var rand = function() {
        var r = color[ran()];
        var g = color[ran()];
        var b = color[ran()];
        return "#" + r + g + b;
    }
    $("#b1").click(function() {
        $('div').each(function() {
            $(".box").css("background-color", rand());
        })
    });
    $("#b2").click(function() {
        $(".box").css("border-radius", "50%");
    })

    $('#b3').click(function() {
        $(".contain").append(`<div class="box"><div>`)
    })

})