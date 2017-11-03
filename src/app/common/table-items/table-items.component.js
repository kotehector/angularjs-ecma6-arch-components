export const tableItemsComponent = {
	bindings: {
		data: '<'
	},
	templateUrl: "src/app/common/table-items/table-items.html",
	controller: class tableItems {
		constructor($mdDialog) {
			"ngInject";
			
			this.$mdDialog = $mdDialog;

			// Variables .html
			this.items = [];
			this.promise;
			this.selected = [];
			this.favorites = [];
			this.filter = {};
			this.query = {};
    }

    $onInit() {
			this.items = this.data;
			
			this.filter = {
				options: {
					debounce: 500
				}
			}
			this.query = {
				filter: '',
				order: 'title',
				limit: 5,
				page: 1
			}
		}
	}
};
