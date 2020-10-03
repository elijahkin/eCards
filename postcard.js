function updateCanvas() {
    var canvas = document.getElementById("canvas");
    var canvasColor = document.getElementById("canvasColor");
    var canvasImage = document.getElementById("canvasImage");
    var ctx = canvas.getContext("2d");

    var text = document.getElementById("text");
    var textColor = document.getElementById("textColor");
    var textSize = document.getElementById("textSize");
    var textFont = document.getElementById("textFont");

    if (canvasImage.value == "") {
        ctx.fillStyle = canvasColor.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = textColor.value;
        ctx.font = textSize.value + "px " + textFont.value;
        fillText(ctx, text.value, parseInt(textSize.value), 2*parseInt(textSize.value));
        var date = String(new Date().toLocaleDateString());
        ctx.fillText(date, canvas.width-parseInt(textSize.value)-ctx.measureText(date).width, 2*parseInt(textSize.value));
    }
    else {
        img = new Image();
        img.src = URL.createObjectURL(canvasImage.files[0]);
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.fillStyle = textColor.value;
            ctx.font = textSize.value + "px " + textFont.value;
            fillText(ctx, text.value, parseInt(textSize.value), 2*parseInt(textSize.value));
            var date = String(new Date().toLocaleDateString());
            ctx.fillText(date, canvas.width-parseInt(textSize.value)-ctx.measureText(date).width, 2*parseInt(textSize.value));
        }
    }
}

function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvasImage').value = null;
}

function fillText(ctx, text, x, y) {
    var lineHeight = ctx.measureText("M").width * 1.5;
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; ++i) {
        ctx.fillText(lines[i], x, y);
        y += lineHeight;
    }
}


save = function(el) {
    var image = canvas.toDataURL("image/png");
    el.href = image;
  };