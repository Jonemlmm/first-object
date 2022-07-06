<template>
  <div class="login">
    <div class="box">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 18 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="账号"
          name="username"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 18 }">
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 18 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, reactive } from "vue";
// 导入$login接口
import { $login } from "../api/user";
// 导入路由器对象
import { useRouter } from "vue-router";
// 导入消息弹窗
import { message } from "ant-design-vue";

// useRouter 才有push方法
// 创建一个路由器对象
const $router = useRouter();

const formState = reactive({
  username: "",
  password: "",
  remember: false,
});

const onFinish = async (values) => {
  let r = await $login("login", values);
  // console.log("#", r);
  if (r.success) {
    $router.push("/layout");
  } else {
    message.error(r.message);
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgb(12, 55, 63), rgb(190, 234, 242));
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 500px;
    border: 1px solid #eee;
    padding-top: 40px;
  }
}
</style>