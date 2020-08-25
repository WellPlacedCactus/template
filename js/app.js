
const canvas = document.getElementById('viewport');
const context = canvas.getContext('2d');
const mouse = {};
const keys = [];

function start() {
	resize();
	requestAnimationFrame(loop);
}

function loop() {
	requestAnimationFrame(loop);
	context.fillStyle = 'black';
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function keydown(e) {
	keys[e.keyCode] = true;
}

function keyup(e) {
	keys[e.keyCode] = false;
}

function mousemove(e) {
	mouse.x = e.x;
	mouse.y = e.y;
}

function mousedown() {
	mouse.down = true;
}

function mouseup() {
	mouse.down = false;
}

window.onload = start;
window.onresize = resize;
window.onmousemove = mousemove;
window.onmousedown = mousedown;
window.onmouseup = mouseup;
window.onkeydown = keydown;
window.onkeyup = keyup;