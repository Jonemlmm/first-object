// 导入post get 请求封装的文件
import { $get, $post } from "../utils/request";

// 封装一个接口并导出
export let $login = async (url, params) => {
  let r = await $post(url, params);
  return r;
};
