function colorChange() {
    var canvas = document.getElementById("canvas");
    var color = document.getElementById("color");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function textChange() {
    var canvas = document.getElementById("canvas");
    var text = document.getElementById("text");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText(text.value, 10, 50);
}