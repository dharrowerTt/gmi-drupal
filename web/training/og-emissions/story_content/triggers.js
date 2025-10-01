function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cuqRoQUTuh":
        Script1();
        break;
      case "65V8ulXpz8F":
        Script2();
        break;
      case "6TMsQ5Sr9Mj":
        Script3();
        break;
      case "6nCxDevkuij":
        Script4();
        break;
      case "5qEa5oC76Oi":
        Script5();
        break;
      case "6JqJhDPaAEH":
        Script6();
        break;
      case "6TCtatWmbeP":
        Script7();
        break;
      case "6pjejwKXcV2":
        Script8();
        break;
      case "68UwPx6vtDN":
        Script9();
        break;
      case "6G6VMid8pE2":
        Script10();
        break;
      case "6qktvv5Vayc":
        Script11();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('68O2qsk1VaO');
const duration = 15600;
const easing = 'ease-out';
const id = '5sYFHCdmDGS';
const growAmount = 0.1;
const delay = 5750;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5rSK35PgJhy');
const duration = 2000;
const easing = 'ease-out';
const id = '5WNEP8RGBXc';
const shakeAmount = 2;
const delay = 2750;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('66fStRnau2B');
const duration = 7000;
const easing = 'ease-out';
const id = '6ZxAE8eaUfa';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('66fStRnau2B');
const duration = 7000;
const easing = 'ease-out';
const id = '6j3qzsnqqEC';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('63nf1i4B5yT');
const duration = 7000;
const easing = 'ease-out';
const id = '6bPOmeGPDFc';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('63nf1i4B5yT');
const duration = 7000;
const easing = 'ease-out';
const id = '6JR88yCCXFJ';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6TMdKk0Ka61');
const duration = 44000;
const easing = 'ease-out';
const id = '5sH6vnI9jJb';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6BQqiOD4l2F');
const duration = 39000;
const easing = 'ease-out';
const id = '6hCkqGkfSfb';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  const target = object('6Iw5yfCs2S3');
const duration = 3250;
const easing = 'ease-out';
const id = '66q7Epvbwc9';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6Bad9yli1Ji');
const duration = 3250;
const easing = 'ease-out';
const id = '5nyVODdVtSh';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5YdEJeTxBHi');
const duration = 3250;
const easing = 'ease-out';
const id = '5YDmLCaWQhg';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
