import { app } from "./ControlTable.js";
import * as api from "../Model/BookApiModel.js";

app.controller("getByGenreController", ($scope) => {
  $scope.genreData = {};
  $scope.getByGenre = () => {
    api.getByGenre($scope.genreData.genre);
  };
});
