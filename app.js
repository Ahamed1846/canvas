/* Iteration 4: Make the Everything Work */
// <!-- Ronaldo - background, jersey, face, hair, cr, number -->
const background = document.getElementById('background');
const buttonbackground = document.getElementById('buttonbackground');
buttonbackground.oninput = () => {
  background.style.fill = buttonbackground.value;
};
const jersey = document.getElementById('jersey');
const buttonjersey = document.getElementById('buttonjersey');
buttonjersey.oninput = () => {
  jersey.style.fill = buttonjersey.value;
};
const face = document.getElementById('face');
const buttonface = document.getElementById('buttonface');
buttonface.oninput = () => {
  face.style.fill = buttonface.value;
};
const hair = document.getElementById('hair');
const buttonhair = document.getElementById('buttonhair');
buttonhair.oninput = () => {
  hair.style.fill = buttonhair.value;
};
const cr = document.getElementById('cr');
const buttoncr = document.getElementById('buttoncr');
buttoncr.oninput = () => {
  cr.style.fill = buttoncr.value;
};
const number = document.getElementById('number');
const buttonnumber = document.getElementById('buttonnumber');
buttonnumber.oninput = () => {
  number.style.fill = buttonnumber.value;
};
