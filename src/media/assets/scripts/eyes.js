// Two eyes on a canvas that follow the mouse cursos
// just like xeyes
// Copyright (c) 2013 Niels Doorn

var canvas;
var context;
var mx = 0;
var my = 0;

var eyes = [
   { 
    'centerX' : 40,
    'centerY' : 40,
    'radius' : 20
  },
  {
    'centerX' : 85,
    'centerY' : 40,
    'radius' : 20
  }/*,
  {
    'centerX' : 400,
    'centerY' : 360,
    'radius' : 34
  },
  {
    'centerX' : 850,
    'centerY' : 460,
    'radius' : 150
  },
  {
    'centerX' : 50,
    'centerY' : 160,
    'radius' : 25
  },
  {
    'centerX' : 500,
    'centerY' : 320,
    'radius' : 40
  }*/
]

window.onload = function() {
  canvas = document.getElementById('eyes');
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth / 5;
  canvas.height = window.innerHeight / 5;
  window.onmousemove = function(evt) { mx = evt.x; my = evt.y };
  tekenFrame();

  //image
  /*var img = new Image();   // Crée un nouvel objet Image
  img.src = 'media/images/logo.png'; // Définit le chemin vers sa source
  img.onload = function(){
    context.drawImage(img, 69, 50);
  }*/
}

function tekenFrame() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < eyes.length; i++) {
    drawEye(eyes[i]);
  };
  // loop
  requestAnimationFrame(tekenFrame);
}

function drawEye(eye) {
  bepaalCoordinaten(eye);

  // clip the eye
  context.save();
  context.beginPath();
  context.arc(eye.centerX, eye.centerY, eye.radius, 0, Math.PI * 2);
  context.clip();

  // eye
  context.beginPath();
  context.arc(eye.centerX, eye.centerY, eye.radius, 0, Math.PI * 2);
  context.fillStyle = "#fff";
  context.fill();
  // Contour de l'oeil
  context.lineWidth = 14;
  context.strokeStyle = '#726e6b';
  context.stroke();
  context.closePath();

  // iris
  context.beginPath();
  context.arc(eye.centerX + eye.pupilX, eye.centerY + eye.pupilY, eye.radius / 5, 0, Math.PI * 2);
  context.fillStyle = "#de6b2a";
  context.fill();
  context.closePath();

  // pupil
  // context.beginPath();
  // context.arc(eye.centerX + eye.pupilX, eye.centerY + eye.pupilY, eye.radius / 2, 0, Math.PI * 2);
  // context.fillStyle = "#de6b2a";
  // context.fill();
  // context.closePath();

  context.restore();
}

function bepaalCoordinaten(eye) {
  // afstand van middenpunt oog tot cursor
  dx = mx - eye.centerX;
  dy = my - eye.centerY;
  // stelling van pythagoras
  c = Math.sqrt((dx*dx) + (dy*dy));
  
  // afstand middelpunt tot pupil
  r = eye.radius * 0.5; //0.8

  // cursor op oog
  if (Math.abs(dx) < r && Math.abs(dy) < r && c < r) {
    r = c;
  } 

  // hoek bepalen
  alfa = Math.asin(dy / c);

  // coordinaten op rand cirkel bepalen
  eye.pupilX = Math.cos(alfa) * r;
  // 180 graden fout herstellen
  eye.pupilX = (dx < 0 ? eye.pupilX * -1 : eye.pupilX);
  eye.pupilY = Math.sin(alfa) * r;
}