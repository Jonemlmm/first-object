<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <span v-if="!collapsed">汽车管理系统</span>
        <api-outlined v-else style="font-size: 24px" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" @click="goto('/car-manager')">
          <car-outlined />
          <span>汽车管理</span>
        </a-menu-item>
        <a-menu-item key="2" @click="goto('/lib-manager')">
          <plus-square-outlined />
          <span>入库管理</span>
        </a-menu-item>
        <a-menu-item key="3" @click="goto('/order-manager')">
          <audit-outlined />
          <span>订单管理</span>
        </a-menu-item>
        <a-menu-item key="4" @click="goto('/tmap')">
          <upload-outlined />
          <span>腾讯地图</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <div class="bread">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="collapsed = !collapsed"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="collapsed = !collapsed"
          />
          <a-breadcrumb>
            <a-breadcrumb-item><a>首页</a></a-breadcrumb-item>
            <a-breadcrumb-item>
              <a>{{ $router.currentRoute.value.meta.title }}</a>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>

        <a-menu v-model:selectedKeys="current" mode="horizontal">
          <a-sub-menu key="sub1">
            <template #icon>
              <user-outlined />
            </template>
            <template #title>个人中心</template>
            <a-menu-item key="setting:1">个人信息</a-menu-item>
            <a-menu-item key="setting:2">修改密码</a-menu-item>
            <a-menu-item key="setting:3" @click="exit">退出登录</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" include="[TMap]" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { useRouter } from "vue-router";
// 导入图标,每个图标是一个组件
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  ApiOutlined,
  PlusSquareOutlined,
  AuditOutlined,
  CarOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

let selectedKeys = ref(["1"]);
let collapsed = ref(false);

// 创建路由器对象
let $router = useRouter();

// 定义goto方法
let goto = (path) => {
  $router.push(path);
};

// 定义exit
let exit = () => {
  $router.push("/");
};
</script>

<style lang="scss">
.layout {
  width: 100wh;
  height: 100vh;
  .header {
    background: #fff;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bread {
      display: flex;
      align-items: center;
    }
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
    color: #eee;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &hover {
      color: #1890ff;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    padding: 5px;
  }
}
</style>