// 导入axios模块
import axios from "axios";

// 创建axios请求
let instance = axios.create({
  // 设置请求根路径
  baseURL: "http://127.0.0.1:8800/",
  // 设置超时时间
  timeout: 10000,
  // 每次请求所发的请求头
  //   headers: { token: "foobar" },
});

// 封装一个post请求方法并导出
export let $post = async (url, params) => {
  let { data } = await instance.post(url, params);
  return data;
};

// 封装一个get请求方法并导出
export let $get = async (url, params) => {
  let { data } = await instance.get(url, { params: params });
  return data;
};

// 封装一个delete请求方法并导出
export let $delete = async (url, params) => {
  let { data } = await instance.delete(url, { params: params });
  return data;
};

// 封装一个put请求方法并导出
export let $put = async (url, params) => {
  let { data } = await instance.put(url, params);
  return data;
};
