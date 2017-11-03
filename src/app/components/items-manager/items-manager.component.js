
export const itemsManagerComponent = {
	templateUrl: 'src/app/components/items-manager/items-manager.html',
  controller: class itemsManagerComponent {
    constructor(ItemsManagerService, $mdDialog) {
			"ngInject";
			
			this.ItemsManagerService = ItemsManagerService;
			this.$mdDialog = $mdDialog;

			// Variables .html
			this.items = [];			// Items for ng-repeat
			this.promise;					// Promise for laoding
			this.selected = [];		// Ng-model
			this.favorites = [];	// List of favorites
			this.filter = {};			// Filter Table
			this.query = {};			// Query Table
    }

    $onInit() {
			// Set options filter
			this.filter = {
				options: {
					debounce: 500
				}
			}
			// Set query for Table
			this.query = {
				filter: '',
				order: 'title',
				limit: 5,
				page: 1
			}
			// Load Items
			this.getItems();
		}
		
		/**
		 * Method for load Items from API
		 */
		getItems() {
			this.promise = this.ItemsManagerService.getItems(this.query);
			this.promise.then(items => this.items = items);
		}

		/**
		 * Method for add items to Favorite List
		 * @param {item} list 
		 */
		addToFavorite(list) {
			console.log('addToFavorite: ', list);
			this.selected.forEach((item) => {
				console.log(item);
				let newFavorite = {
					title: '',
					image: ''
				};
				newFavorite.title = item.title;
				newFavorite.image = item.image;
				console.log(newFavorite);
				this.favorites.push(newFavorite);
			});
			this.showAlertInfo("Added items ti Favorites List!");
			this.favorites = [];
		}

		/**
		 * Method for show Simple Dialog for Info
		 * @param {string} infoText 
		 */
		showAlertInfo(infoText) {
			this.$mdDialog.show(
				this.$mdDialog.alert()
				.parent(angular.element(document.body))
				.clickOutsideToClose(true)
				.textContent(infoText)
				.ok('Close')
			);
			
		}
		
		/**
		 * Method for show Modal With Favorite List inside
		 * @param {ev}  
		 * @param {items} list 
		 */
		showFavoritesList($event, list) {
			console.log('showFavoritesList: ', list);
			this.$mdDialog.show({
				targetEvent: $event,
				parent: angular.element(document.body),
				clickOutsideToClose: true,
				templateUrl: 'src/app/components/items-manager/favs-modal.html',
				locals: {
					listFavs: this.favorites
				},
				controller: class {
          constructor($mdDialog, listFavs) {
            'ngInject';
						this.$mdDialog = $mdDialog;
						this.listFavs = listFavs;
						this.selectedFavs;
					}
					$onInit() {
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
          deleteItem(itemToDelete, index) {
						console.log(itemToDelete);
						this.listFavs.splice(index, 1);
          }
          close() {
            this.$mdDialog.cancel();
          }
        },
        controllerAs: '$ctrl',
			});
		}
  }
};
