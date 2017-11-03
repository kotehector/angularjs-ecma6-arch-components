export class ItemsManagerService {
  constructor($http, $sce) {
    'ngInject';
		this.$http = $http;
		this.url = "https://my-json-server.typicode.com/kotehector/typicode-api-db/";
		$sce.trustAsResourceUrl(this.url);
  }
  getItems() {
    return this.$http.jsonp(this.url + "items").then(
			response => response.data
		);
  }
}
