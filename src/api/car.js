// 导入post get 请求封装的文件
import { $post, $get, $delete, $put } from "../utils/request";

// 封装一个接口并导出
export let $getCarList = async (params) => {
  let ret = await $get("carsList", params);
  return ret;
};

// 封装一个接口并导出
export let $carAdd = async (params) => {
  let ret = await $post("carAdd", params);
  return ret;
};

// 封装一个接口并导出
export let $delCar = async (params) => {
  let ret = await $delete("delCar", params);
  return ret;
};

// 封装一个接口并导出
export let $getCar = async (params) => {
  let ret = await $get("getCar", params);
  return ret;
};

// 封装一个接口并导出
export let $updateCar = async (params) => {
  let ret = await $put("updateCar", params);
  return ret;
};
