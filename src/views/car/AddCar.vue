<template>
  <div class="box">
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      :title="no ? '修改车辆信息' : '添加汽车信息'"
      placement="right"
      @after-visible-change="afterVisibleChange"
      width="500px"
    >
      <a-form
        ref="form"
        :model="formState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="车牌号"
          name="no"
          :rules="[{ required: true, message: '请输入车牌号' }]"
        >
          <a-input v-model:value="formState.no" :disabled="no !== ''" />
        </a-form-item>
        <a-form-item
          label="品牌"
          name="name"
          :rules="[{ required: true, message: '请输入汽车品牌' }]"
        >
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item
          label="车型"
          name="model"
          :rules="[{ required: true, message: '请选择车型' }]"
        >
          <a-radio-group v-model:value="formState.model">
            <a-radio value="紧凑型">紧凑型</a-radio>
            <a-radio value="跑车">跑车</a-radio>
            <a-radio value="豪华型">豪华型</a-radio>
            <a-radio value="SUV">SUV</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="价格"
          name="price"
          :rules="[{ required: true, message: '请输入汽车价格' }]"
        >
          <a-input v-model:value="formState.price" />
        </a-form-item>

        <a-form-item
          label="颜色"
          name="color"
          :rules="[{ required: true, message: '请选择颜色' }]"
        >
          <a-radio-group v-model:value="formState.color">
            <a-radio value="黑">黑</a-radio>
            <a-radio value="灰">灰</a-radio>
            <a-radio value="红">红</a-radio>
            <a-radio value="银">银</a-radio>
            <a-radio value="绿">绿</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
          <a-button type="primary" html-type="submit">{{
            no ? "修改" : "添加"
          }}</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<script>
// 导入$carAdd接口
import { $carAdd, $getCar, $updateCar } from "../../api/car";
// 导入消息弹窗
import { message } from "ant-design-vue";

export default {
  name: "AddCar",
  data() {
    return {
      a: "",
      no: "",
      visible: false,
      formState: {},
    };
  },
  methods: {
    // 抽屉打开执行一次,关闭执行一次
    async afterVisibleChange() {
      if (this.visible) {
        // this.$refs.form.resetFields(); // 清空输入框
        this.a = this.no;
      } else {
        this.$refs.form.resetFields();
        this.no = "";
      }
    },

    // 输入完成后提交时执行
    async onFinish() {
      if (this.no) {
        let { success, msg } = await $updateCar(this.formState);
        if (success) {
          message.success(msg);
          this.$parent.getCarList();
        } else {
          message.error(msg);
        }
      } else {
        let { success, msg } = await $carAdd(this.formState);
        if (success) {
          message.success(msg);
          this.$refs.form.resetFields(); // 清空输入框
        } else {
          message.error(msg);
        }
      }
    },
    onFinishFailed() {},
  },
  watch: {
    async no() {
      if (this.no) {
        let { success, msg, data } = await $getCar({ no: this.no });
        if (success) {
          message.success(msg);
          this.formState = data;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>>
