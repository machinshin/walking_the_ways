
var tc = require('../');
var Canvas = require('canvas');

// create terminal <canvas>
var canvas = tc();
var ctx = canvas.getContext('2d');

var screenWidth = canvas.width;
var maxWidth = parseInt(process.argv[3], 10) || screenWidth;

var imageFile = process.argv[2];
var image = require('fs').readFileSync(imageFile);
var img = new Canvas.Image();
img.src = image;


var width = maxWidth;
var scaleW = img.width > width ? width / img.width : 1;
var w = Math.floor(img.width * scaleW);
var h = Math.floor(img.height * scaleW);

ctx.drawImage(img, 0, 0, w, h);

canvas.render();



const sentence = "A ticket to 大阪 costs ¥2000 👌.";

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// expected output: Array ["¥", "."]

