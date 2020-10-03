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
    fillText(ctx, text.value, parseInt(textSize.value), 1.67*parseInt(textSize.value));
}

function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function fillText(ctx, text, x, y) {
    var lineHeight = ctx.measureText("M").width * 1.2;
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; ++i) {
      ctx.fillText(lines[i], x, y);
      y += lineHeight;
    }
  }