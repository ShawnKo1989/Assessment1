var imgchar = document.getElementById("img1");
var imgchar2 = document.getElementById("img2");
var imgchar3 = document.getElementById("img3");
var imgchar4 = document.getElementById("bgimg");
var ch1img ="";
var ch2img ="";
var ch3img ="";

document.getElementById("open").addEventListener("click", function() {
  document.getElementById("menu").style.left = 0 + "px";
});
document.getElementById("close").addEventListener("click", function() {
  document.getElementById("menu").style.left = -100 + "px";
});
document.getElementById("bg1").addEventListener("click", function() {
  imgchar.src = "imgs/i1.jpg";
  imgchar2.src = "imgs/i2.jpg";
  imgchar3.src = "imgs/i3.jpg";
  ch1img.src ="imgs/i1.jpg";
  ch2img.src ="imgs/i2.jpg";
  ch3img.src ="imgs/i3.jpg";
});
document.getElementById("bg2").addEventListener("click", function() {
  imgchar.src = "imgs/i4.jpg";
  imgchar2.src = "imgs/i5.jpg";
  imgchar3.src = "imgs/i6.jpg";
  ch1img.src ="imgs/i4.jpg";
  ch2img.src ="imgs/i5.jpg";
  ch3img.src ="imgs/i6.jpg";
});
document.getElementById("ch1").addEventListener("mouseenter", function() {
  imgchar4 = "ch1img";
});
document.getElementById("ch2").addEventListener("mouseenter", function() {
  imgchar4 = "ch2img";
});
document.getElementById("ch3").addEventListener("mouseenter", function() {
  imgchar4 = "ch3img";
});
