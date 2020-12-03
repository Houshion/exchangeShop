import http from "../uview-ui/libs/request";

let hotSearchUrl = "/ebapi/store_api/hot_search";
let indexUrl = "/ebapi/public_api/index";

let getSearch = (params = {}) =>
  http.get(hotSearchUrl, {
    id: 2,
  });

let getInfo = (params = {}) => vm.$u.post(indexUrl, params);

export default {
  getSearch,
  getInfo,
};
