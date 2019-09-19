$(document).ready(function() {
    $("#sub").click(function() {
        var res = $("#but").val()
        console.log(res);
        $("#lis").append("<li>" + res + "</li>");


    });
});