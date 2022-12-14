import { useEffect, useRef } from 'react'

const Canvas = () => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
        const canvasEl = document.querySelector('canvas');
        const ctx = canvasEl.getContext('2d');
        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;
        let particleArray = [];
        let adjustX = 10;
        let adjustY = -5;

        window.addEventListener("resize", function(event) {
            canvasEl.width = window.innerWidth / 2;
            canvasEl.height = window.innerHeight / 2;
        });
         
        window.onresize = function() {
            canvasEl.width = window.innerWidth / 2;
            canvasEl.height = window.innerHeight / 2;
            ctx.font = 5;
        }
        
        //handle mouse
        const mouse = {
            x: null,
            y: null,
            radius: 150
        }


        
        window.addEventListener('mousemove', function(event) {
            mouse.x = event.x;
            mouse.y = event.y;
            //console.log(mouse.x, mouse.y);
        })
      
      // START JAVASCRIPT TOUCH EVENTS
window.addEventListener("touchstart", event => {
    mouse.x = event.changedTouches[0].clientX;
    mouse.y = event.changedTouches[0].clientY;
}, false);

window.addEventListener("touchmove", event => {
    //event.preventDefault();
    mouse.x = event.targetTouches[0].clientX;
    mouse.y = event.targetTouches[0].clientY;
}, false);

window.addEventListener("touchend", event => {
    //event.preventDefault();
    mouse.x = 0;
    mouse.y = 0;
}, false);
// END JAVASCRIPT TOUCH EVENTS
        
        canvasEl.style.overflowX = 'hidden'
        canvasEl.style.overflowY = 'hidden'
        ctx.fillStyle = 'white';
        ctx.font = '24px Trattatello '
        ctx.fillText("M", 0, 30);
        const textCoordinates = ctx.getImageData(0, 0, 100, 100);
        
        class Particle {
            constructor(x, y) {
                this.x = x + 100;
                this.y = y;
                this.size = 2;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 40) + 5;
            }
            draw() {
                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    } 
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    };
                }
            }
        }

          window.addEventListener('resize', function(event) {
            canvasEl.width = window.innerWidth;
            canvasEl.height = window.innerHeight;
        })
        
        function init() {
            particleArray = [];
            for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
                for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 1) {
                        let positionX = x - 5;
                        let positionY = y + adjustY;
                        particleArray.push(new Particle(positionX * 15, positionY * 15));
                    }
                }
            }
        }
        init();
        //console.log(particleArray)
        
        function animate() {
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].draw();
                particleArray[i].update();
            }
            connect();
            requestAnimationFrame(animate);
        }
        animate();
        
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particleArray.length; a++) {
                for (let b = a; b < particleArray.length; b++) {
                    let dx = particleArray[a].x - particleArray[b].x;
                    let dy = particleArray[a].y - particleArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    opacityValue = 1;
                    ctx.strokeStyle = 'rgba(255, 255, 255,' + opacityValue + ')';
                        
        
                    if (distance < 50) {
                        ctx.lineWidth = .5;
                        ctx.beginPath();
                        ctx.moveTo(particleArray[a].x, particleArray[a].y);
                        ctx.lineTo(particleArray[b].x, particleArray[b].y)
                        ctx.stroke();
                    }
                
                }
            }
        }
      
    }
  }, [])

  return (
    <>
    <body>
    <canvas id="canvas1" ref={ref} />
    </body>
    </>
  )
}

export default Canvas;
