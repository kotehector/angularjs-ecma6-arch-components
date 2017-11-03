import { itemsManager } from "./items-manager/items-manager.module";

export const components = angular
.module('components', [
	itemsManager
])
.name;
