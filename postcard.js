function updateCanvas() {
    var canvas = document.getElementById("canvas");
    var color = document.getElementById("color");
    var text = document.getElementById("text");
    var textSize = document.getElementById("textSize");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = color.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.font = textSize.value + "px Arial";
    ctx.fillText(text.value, 10, 50);
}

function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}