import angular from "angular";
import uiRouter from "angular-ui-router";
import angularMaterialDataTable from "angular-material-data-table";
import { itemsManagerComponent } from "./items-manager.component";
import { ItemsManagerService } from "./items-manager.service";
import "./items-manager.scss";

export const itemsManager = angular
	.module("components.items-manager", [
		uiRouter,
		angularMaterialDataTable
	])
	.component("itemsManager", itemsManagerComponent)
	.service("ItemsManagerService", ItemsManagerService)
	.config(($stateProvider) => {
		"ngInject";

		$stateProvider
			.state("itemsManager", {
				url: "/items-manager",
				component: "itemsManager"
			})
	})
	.name;
