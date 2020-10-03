function updateCanvas() {
    // canvas elements
    var canvas = document.getElementById("canvas");
    var canvasColor = document.getElementById("canvasColor");
    var ctx = canvas.getContext("2d");

    // text elements
    var text = document.getElementById("text");
    var textColor = document.getElementById("textColor");
    var textSize = document.getElementById("textSize");

    // setting background color
    ctx.fillStyle = canvasColor.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // setting text color and size
    ctx.fillStyle = textColor.value;
    ctx.font = textSize.value + "px Arial";
    ctx.fillText(text.value, 10, 50);
}

function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}