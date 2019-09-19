$(document).ready(function() {
    var canvas = document.getElementById("c1");
    var ctxt = canvas.getContext('2d');
    $("#bu1").click(function() {
        ctxt.fillStyle = 'blue';
        ctxt.strokeStyle = 'black';
        ctxt.lineWidth = 3;
        ctxt.beginPath();
        ctxt.moveTo(60, 240);
        ctxt.lineTo(240, 240);
        ctxt.lineTo(150, 60);
        ctxt.closePath();
        ctxt.fill();
        ctxt.stroke();
    });
    $("#bu2").click(function() {
        ctxt.clearRect(0, 0, canvas.width, canvas.height);
        ctxt.save();
        ctxt.fillStyle = 'blue';
        ctxt.strokeStyle = 'black';
        ctxt.lineWidth = 3;
        ctxt.translate(canvas.width / 2, canvas.height / 2);
        ctxt.rotate(Math.PI / 4);
        ctxt.beginPath();
        ctxt.moveTo(-90, 90);
        ctxt.lineTo(90, 90);
        ctxt.lineTo(0, -90);
        ctxt.closePath();
        ctxt.fill();
        ctxt.stroke();
    });
    $("#bu3").click(function() {
        ctxt.setTransform(1, 0, 0, 1, 0, 0);
        ctxt.restore();
        ctxt.clearRect(0, 0, canvas.width, canvas.height);
    });
});