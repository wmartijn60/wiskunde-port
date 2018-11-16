document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(300,400,15,"orange");
let B = new Point(800,400,15,"purple");
let C = new Point(600,200,15,"cyan");
let D = new Point(600,200,15,"white");
let E = new Point(600,200,15,"white");
let F = new Point(600,200,15,"white");
let G = new Point(600,200,15,"white");


let f = new LinearFunction(10,100);
let m = new LinearFunction(10,200);
let e = new LinearFunction(10,300);
let q = new LinearFunction(10,400);
let le = new LinearFunction(1,1);
let lf = new LinearFunction(1,1);
let lm = new LinearFunction(1,1);




A.drag();
B.drag();
C.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  f.letTwoPointsDefineLine(A,B);
  m.letTwoPointsDefineLine(A,C);
  e.letTwoPointsDefineLine(C,B);


  le.slope = -1/e.slope;
  le.intercept = A.y - le.slope * A.x;
  D.x = e.intersection(le).x;
  D.y = e.intersection(le).y;

  lf.slope = -1/f.slope;
  lf.intercept = C.y - lf.slope * C.x;
  E.x = f.intersection(lf).x;
  E.y = f.intersection(lf).y;

  lm.slope = -1/m.slope;
  lm.intercept = B.y - lm.slope * B.x;
  F.x = m.intersection(lm).x;
  F.y = m.intersection(lm).y;

  G.x = le.intersection(lf).x;
  G.y = le.intersection(lf).y;

  f.draw(context);
  m.draw(context);
  e.draw(context);
  le.draw(context, "magenta");
  lf.draw(context, "magenta");
  lm.draw(context, "magenta");


  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  E.draw(context);
  F.draw(context);
  G.draw(context);

  B.print(context,"beweeg")
}

animate();
