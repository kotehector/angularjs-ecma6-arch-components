/* ENTRY POINT WEBPACK */
import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import "angular-material/angular-material.scss";
import "angular-material-data-table/dist/md-data-table.css";

import { appComponent } from "./app.component";
import { common } from "./common/common.module";
import { components } from "./components/components.module";
import "./app.scss";

export const app = angular
	.module("app", [
		uiRouter,
		ngMaterial,
		common,
		components
	])
	.component("app", appComponent)
	.config((
		$locationProvider, 
		$sceDelegateProvider, 
		$stateProvider, 
		$mdThemingProvider
	) => {
		"ngInject";
		// Config Theme 
		$mdThemingProvider.definePalette('myPalette', {
			'50': '#e5f8f6',
			'100': '#b2ece6',
			'200': '#99e6dd',
			'300': '#66d9cd',
			'400': '#32cdbc',
			'500': '#00c1ac', // Color
			'600': '#00ad9a',
			'700': '#009a89',
			'800': '#008778',
			'900': '#007367',
			'A100': '#006056',
			'A200': '#004d44',
			'A400': '#003933',
			'A700': '#002622',
			'contrastDefaultColor': 'light',   
			'contrastDarkColors': ['50', '100', 
				'200', '300', '400', 'A100'],
			'contrastLightColors': undefined    
		});
	
		$mdThemingProvider.theme('default')
			.primaryPalette('myPalette')
			.accentPalette('orange');
		// All url are in whitelist
		$sceDelegateProvider.resourceUrlWhitelist(['**']);
		// Set html5mode
		$locationProvider.html5Mode(true);
		// Config state
		$stateProvider
		.state("home", {
			url: "/",
			redirectTo: 'itemsManager',
			component: "app"
		})
	})
	.name;

