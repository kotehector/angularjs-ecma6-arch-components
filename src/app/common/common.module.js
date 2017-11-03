import { appHeader } from "./app-header/app-header.module";
import { tableItems } from "./table-items/table-items.module";

export const common = angular
	.module('common', [
		appHeader,
		tableItems
	])
	.name;
