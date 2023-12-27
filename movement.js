console.log(screen.availWidth, screen.availHeight, window.innerHeight)

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let img = document.createElement("img")
img.src = "funnyshrimp.webp"

let x = (window.innerWidth - 50)/2
let y = (window.innerHeight - 129 + 80)/2
let vy = 0
let vx = 0

function update() {
	ctx.clearRect(0,0,canvas.width,canvas.height)
	x += vx
	y += vy
	ctx.drawImage(img, x, y);
	requestAnimationFrame(update)

	function check() {
		if (x > screen.availWidth - 50) {
			vx = -vx
		} else if (x < 0) {
			vx = -vx
		}
		if (y > screen.availHeight - 123) {
			vy = -vy
		} else if (y < 0) {
			vy = -vy
		}
	}

	check()
}

function accelerate() {
	if (vx < 0) {
		vx -= 0.2
	} else {
		vx += 0.8
	}
		if (vy < 0) {
		vy -= 1.3
	} else {
		vy += 0.7
	}
}

update()
