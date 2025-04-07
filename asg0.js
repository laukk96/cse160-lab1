// DrawRectangle.js
function main() {
    // Retrieve the <canvas> element
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return false;
    }

    // Get the rendering context for 2DCG
    var ctx = canvas.getContext('2d');
    var v0 = new Vector3();
    var v1 = new Vector3([2.25, 2.25, 0]);
    
    function drawVector(v, color){
        const scale = 20;

        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(v.elements[0]*scale, v.elements[1]*scale);
        ctx.stroke();
    }
    
    // Draw a black rectangle canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';  // Set a black color
    ctx.fillRect(0, 0, 400, 400);         // Fill a rectangle with the color

    // Draw a red line
    drawVector(v1, 'rgba(255, 0, 0, 1.0)');
    console.log(v1.elements);
}

  