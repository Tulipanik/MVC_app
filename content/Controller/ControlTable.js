import { getAllBooks } from "../Model/BookApiModel.js";

export const app = angular.module("App", []);
let page = 1;
const perPage = 20;

app.service("sharedService", function ($rootScope) {
  this.reloadController = function (controllerName) {
    $rootScope.$broadcast("reloadController", {
      controllerName: controllerName,
    });
  };
});

app.controller("tableController", ($scope, $rootScope) => {
  $rootScope.$on("reloadController", function (event, args) {
    getAllBooks(page, perPage)
      .then((books) => {
        $scope.books = books;

        $scope.$apply();
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  });
  $rootScope.$emit("reloadController");
});

app.controller("pageSwappingController", ($scope, sharedService) => {
  $scope.next = () => {
    page += perPage;
    sharedService.reloadController("tableController");
  };
  $scope.back = () => {
    if (page > 1) {
      page -= perPage;
    }
    sharedService.reloadController("tableController");
  };
});
