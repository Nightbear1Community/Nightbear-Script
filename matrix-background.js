document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Characters for the matrix effect
    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    
    // Array to track the y position of each column
    const drops = [];
    // Array to store character for each position
    const charMatrix = [];
    // Array to store opacity for each position
    const opacityMatrix = [];
    
    // Initialize the arrays
    const initMatrix = () => {
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100); // Start above the canvas
            
            charMatrix[i] = [];
            opacityMatrix[i] = [];
            
            for (let j = 0; j < Math.ceil(canvas.height / fontSize) + 1; j++) {
                charMatrix[i][j] = getRandomChar();
                opacityMatrix[i][j] = Math.random() * 0.5 + 0.5; // Vary the opacity
            }
        }
    };
    
    // Get a random matrix character
    const getRandomChar = () => {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    };
    
    // Occasionally change characters
    const updateChars = () => {
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < charMatrix[i].length; j++) {
                // 2% chance to change a character
                if (Math.random() < 0.02) {
                    charMatrix[i][j] = getRandomChar();
                }
                
                // Randomly vary opacity
                if (Math.random() < 0.05) {
                    opacityMatrix[i][j] = Math.random() * 0.5 + 0.5;
                }
            }
        }
    };
    
    // Draw the matrix
    const draw = () => {
        // Semi-transparent black to create trailing effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < drops.length; i++) {
            // Skip some columns randomly for variety
            if (Math.random() < 0.02) continue;
            
            // Calculate row in the matrix
            const row = Math.floor(drops[i] / fontSize);
            
            if (row >= 0 && row < charMatrix[i].length) {
                // Leading characters (brighter)
                const leading = charMatrix[i][row];
                ctx.fillStyle = `rgba(0, 255, 65, ${opacityMatrix[i][row]})`;
                ctx.font = `${fontSize}px monospace`;
                ctx.fillText(leading, i * fontSize, drops[i]);
                
                // Trailing characters (faded)
                for (let j = 1; j <= 5; j++) {
                    const trailRow = row - j;
                    if (trailRow >= 0) {
                        const opacity = opacityMatrix[i][trailRow] * (1 - j * 0.15);
                        if (opacity > 0) {
                            ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
                            ctx.fillText(charMatrix[i][trailRow], i * fontSize, drops[i] - j * fontSize);
                        }
                    }
                }
            }
            
            // Move drops down
            drops[i] += fontSize;
            
            // Reset drops that reach the bottom
            if (drops[i] > canvas.height && Math.random() > 0.975) {
                drops[i] = Math.floor(Math.random() * -100);
            }
        }
        
        // Occasionally update characters
        if (Math.random() < 0.05) {
            updateChars();
        }
    };
    
    initMatrix();
    
    // Set up the animation loop
    setInterval(draw, 40);
});