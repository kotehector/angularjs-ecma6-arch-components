import { tableItemsComponent } from "./table-items.component";
import "./table-items.scss";

export const tableItems = angular
	.module('common.table-items', [])
	.component('tableItems', tableItemsComponent)
	.name;
