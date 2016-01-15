/**
 * Created by Hana on 2016-01-15.
 */
/*jslint         browser : true, continue : true,
 devel  : true, indent  : 2,    maxerr   : 50,
 newcap : true, nomen   : true, plusplus : true,
 regexp : true, sloppy  : true, vars     : false,
 white  : true
 */
/*global $, app, webix */

app.v_shell = (function () {
	'use strict';

	var configMap = {
		width: 1024,
		height: 768
	}, initModule;

	initModule = function (container) {
		webix.ui({
			container: container,
			id: 'main-layout',
			type: 'space',
			css: 'main-layout',
			height: configMap.height,
			width: configMap.width,
			rows: [
				{template: '야구게임 v0.1', height: 45, type: 'header'},
				{template: '메뉴', height: 45},
				{
					cols: [
						{
							template: '게임룸 컨테이너',
							margin: 10,
							css: 'bbg-mr-10',
							rows: [
								{template: '게임룸'},
								{
									template: '채팅', height: 200, rows: [
									{template: '채팅리스트'},
									{template: '채팅입력', height: 30}
								]
								}
							]
						},
						{
							template: '유저 컨테이너',
							width: 280,
							margin: 10,
							rows: [
								{template: '유저정보', height: 220},
								{template: '유저리스트'}
							]
						}
					]
				}
			]
		});
	};

	return {
		initModule: initModule
	};
}());