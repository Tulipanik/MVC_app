import { app } from "./ControlTable.js";
import * as api from "../Model/BookApiModel.js";

app.controller("getController", ($scope, dataService, sharedService) => {
  $scope.genreData = {};
  $scope.getByGenre = () => {
    api.getAllGenre($scope.genreData.genre).then((books) => {
      dataService.setBooks(books);
      sharedService.reloadController("tableController");
    });
  };

  $scope.authorData = {};
  $scope.getByAuthor = () => {
    api.getAllAuthor($scope.authorData.author).then((books) => {
      dataService.setBooks(books);
      sharedService.reloadController("tableController");
    });
  };

  $scope.idData = {};
  $scope.getById = () => {
    api.getById($scope.idData.id).then((books) => {
      dataService.setBooks(books);
      sharedService.reloadController("tableController");
    });
  };
});

app.controller("addController", ($scope, dataService, sharedService) => {
  $scope.bookToAdd = {};
  $scope.addBook = () => {
    api.getMaxId().then((id) => {
      $scope.bookToAdd.id = Number(id + 1);
      api.add($scope.bookToAdd).then(() => {
        console.log("Dodano pomyślnie");
      });
    });
  };

  $scope.bookToUpdate = {};
  $scope.updateBook = () => {
    if (!$scope.bookToUpdate.author) {
      $scope.bookToUpdate.author = "";
    }
    if (!$scope.bookToUpdate.genre) {
      $scope.bookToUpdate.genre = "";
    }
    api.update($scope.bookToUpdate).then(() => {
      console.log("Aktualizowano pomyślnie");
    });
  };
});

app.controller("deleteController", ($scope, dataService, sharedService) => {
  $scope.deleteAllBooks = () => {
    api.deleteAll().then(() => {
      console.log("Usunięto pomyślnie");
    });
  };

  $scope.deleteById = () => {
    api.deleteId($scope.bookId).then(() => {
      console.log("Usunięto pomyślnie");
    });
  };

  $scope.deleteByGenre = () => {
    api.deleteGenre($scope.bookGenre).then(() => {
      console.log("Usunięto pomyślnie");
    });
  };
});
