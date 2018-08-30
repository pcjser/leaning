'use strict'

var animation = window.animation;
var $ads = $('ads');
var images = ['tv.png', 'lockad_01.jpg', 'lockad_02.jpg', 'lockad_03.jpg', 'lockad_04.jpg'];
var base = 375;
var rightDown = [base * -4 + " " + base * -3, "0 " + base * -4, base * -1 + " " + base * -4, base * -1 + " " + base * -4, base * -2 + " " + base * -4, base * -3 + " " + base * -4, base * -4 + " " + base * -4];
var rightUp = ["0 0", base * -1 + " 0", base * -2 + " 0", base * -3 + " 0", base * -4 + " 0", "0 " + base * -1, "-375 -375"];
var leftDown = [base * -2 + " " + base * -1, base * -3 + " " + base * -1, base * -4 + " " + base * -1, "0 " + base * -2, base * -1 + " " + base * -2, base * -2 + " " + base * -2];
var leftUp = [base * -3 + " " + base * -2, base * -4 + " " + base * -2, "0 " + base * -3, base * -1 + " " + base * -3, base * -2 + " " + base * -3, base * -3 + " " + base * -3, "-375 -375"];
var staticPos = ["-375 -375"];

function $(id) {
	return document.getElementById(id);
}

var oAd = document.querySelector('.ad');
startAd();

function startAd() {
	var oneAnimate = animation().loadImage(images)
		.changePosition($ads, rightDown, images[0])
		.then(function() {
			oAd.style.backgroundImage = "url('lockad_01.jpg')";
		})
		.changePosition($ads, rightUp, images[0])
		.wait(4240)
		.changePosition($ads, leftDown, images[0])
		.then(function() {
			oAd.style.backgroundImage = "url('lockad_02.jpg')";
		})
		.changePosition($ads, leftUp, images[0])
		.wait(4240) //一次完成
		.changePosition($ads, rightDown, images[0])
		.then(function() {
			oAd.style.backgroundImage = "url('lockad_03.jpg')";
		})
		.changePosition($ads, rightUp, images[0])
		.wait(4240)
		.changePosition($ads, leftDown, images[0])
		.then(function() {
			oAd.style.backgroundImage = "url('lockad_04.jpg')";
		})
		.changePosition($ads, leftUp, images[0])
		.wait(4240)
		.then(function() {
			oneAnimate.dispose();
			startAd();
		})
	oneAnimate.start(40);
}