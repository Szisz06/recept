import axios from "axios";

export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://127.0.0.1:8000/api";
  }
  
  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  putData(vegpont, data, callback) {
    axios
      .put(vegpont, data)
      .then(function (response) {
        callback(response.data);
        console.log("sikeres");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  postData(vegpont, data, callback) {
    axios
      .post(vegpont, data)
      .then(function (response) {
        callback(response.data); // Assuming response.data is the created object
        console.log("Successful POST request");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  deleteData(vegpont, id, callback) {
    axios
      .delete(vegpont + "/" + id)
      .then(function (response) {
        callback(response.data);
        console.log("sikeres törlés");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
}
