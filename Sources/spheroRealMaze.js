/**
 * Exported from scratch bloc program (no return)
 * (see full export from visual blocs in spheroRealMaze.lab
 **/


var yaMur = 0;
var x0 = 0;
var y0 = 0;
var dirCourante = 0;
var x1 = 0;
var y1 = 0;
var distance = 0;
var estDansBoucle = 0;
var yaMur_0 = 0;
var dirCourante_0 = 0;
var x0_0 = 0;
var y0_0 = 0;
var x1_0 = 0;
var y1_0 = 0;
var distance_0 = 0;

async function murDevant() {
	setMainLed({ r: 0, g: 11, b: 255 });
	await delay(1);
	yaMur = 0;
	x0 = getLocation().x;
	y0 = getLocation().y;
	await roll((dirCourante + 0), 40, 0.8);
	await delay(1);
	x1 = getLocation().x;
	y1 = getLocation().y;
	distance = Math.sqrt((((x0 - x1) * (x0 - x1)) + ((y0 - y1) * (y0 - y1))));
	if ((distance <= 0.1)) {
		yaMur = 1;
		setMainLed({ r: 255, g: 6, b: 0 });
	} else {
		setMainLed({ r: 8, g: 255, b: 0 });
		yaMur = 0;
	}
	stopRoll();
	await delay(1);
}

async function murDroite() {
	setMainLed({ r: 255, g: 6, b: 79 });
	await delay(1);
	yaMur = 0;
	x0 = getLocation().x;
	y0 = getLocation().y;
	await roll((dirCourante + 90), 40, 0.8);
	await delay(1);
	x1 = getLocation().x;
	y1 = getLocation().y;
	distance = Math.sqrt((((x0 - x1) * (x0 - x1)) + ((y0 - y1) * (y0 - y1))));
	if ((distance <= 0.15)) {
		yaMur = 1;
		setMainLed({ r: 255, g: 6, b: 0 });
	} else {
		setMainLed({ r: 8, g: 255, b: 0 });
		yaMur = 0;
	}
	stopRoll();
	await delay(1);
}

async function startProgram() {
	await murDevant();
	while (!((5 <= estDansBoucle))) {
		await delay(0.5);
		await murDroite();
		if ((0 === yaMur)) {
			dirCourante = (dirCourante + 90);
		} else {
			await delay(0.5);
			await murDevant();
			if ((1 === yaMur)) {
				dirCourante = (dirCourante + -90);
			}
		}
		setHeading(dirCourante);
		await delay(0.025);
	}
	playSound(Sound.Effects.Applause);
}
