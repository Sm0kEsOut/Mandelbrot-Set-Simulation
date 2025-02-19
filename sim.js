window.onload = function() {
    const m = document.getElementById("gardun");
    if (!m) {
        console.error("Canvas element not found!");
        return;
    }
    const ctx = m.getContext("2d");

    function atom(x, y, c) {
        ctx.fillStyle = c;
        ctx.fillRect(x, y, 3, 3);
    }
    
    for (y = 1; y < 1000; y++) {
        for (x = 1; x < 1000; x++) {
            dx = (x - 500) / 100000 - 0.233
            dy = (y - 500) / 100000 - 0.655
            a = dx
            b = dy

            for (t = 1; t < 2000; t++){
                d = (a * a) - (b * b) + dx
                b = 2 * (a * b) + dy
                a = d
                H = d > 2000

                if (H) {
                    atom(x, y, "rgb("+ t * 3 +","+ t +","+ t * 0.5 +")");
                    break;
                }
            }
        }   
    }
};