<template>
  <div class="box">
    <div class="search">
      <a-input-search
        v-model:value="params.name"
        placeholder="请输入要查询的车辆名称"
        enter-button
        @search="onSearch"
        style="width: 300px"
      />
      <a-button type="primary" @click="addCar">添加</a-button>
    </div>
    <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'operation'">
          <a-popconfirm
            v-if="dataSource.length"
            title="确定删除车辆信息吗?"
            @confirm="onDelete(record.no)"
            cancelText="取消"
            okText="确定"
          >
            <a>删除</a>
          </a-popconfirm>
          <a style="margin-left: 10px" @click="updateCar(record.no)">修改</a>
        </template>
      </template>
    </a-table>
    <a-pagination
      class="pagination"
      v-model:current="params.pageIndex"
      :total="total"
      show-less-items
      @change="change"
      :defaultPageSize="params.pageSize"
    />
    <AddCar ref="visible"></AddCar>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import { $getCarList, $delCar } from "../../api/car";
import AddCar from "./AddCar.vue";
export default {
  components: { AddCar },
  name: "CarManager",
  comments: { AddCar },
  data() {
    return {
      total: 0,
      params: {
        pageIndex: 1,
        pageSize: 5,
        name: "",
      },

      dataSource: [],

      columns: [
        {
          title: "车牌",
          dataIndex: "no",
          key: "no",
        },
        {
          title: "车型",
          dataIndex: "model",
          key: "model",
        },
        {
          title: "品牌",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "价格",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "颜色",
          dataIndex: "color",
          key: "color",
        },
        {
          title: "操作",
          dataIndex: "operation",
          key: "operation",
        },
      ],
    };
  },
  methods: {
    async getCarList() {
      let { data, count } = await $getCarList(this.params);
      this.dataSource = data;
      this.total = count;
    },
    onSearch() {
      this.params.pageIndex = 1;
      this.getCarList();
    },
    change() {
      this.getCarList();
    },
    addCar() {
      this.$refs.visible.visible = true;
    },
    updateCar(no) {
      this.$refs.visible.visible = true;
      this.$refs.visible.no = no;
    },
    async onDelete(no) {
      let { success, msg } = await $delCar({ no });
      if (success) {
        this.getCarList();
        message.success(msg);
      }
      console.log(no);
    },
  },
  created() {
    this.getCarList();
  },
};
</script>

<style lang="scss" scoped>
.box {
  .pagination {
    margin: 5px;
  }
  .search {
    display: flex;
    align-items: center;
    margin: 5px;
  }
}
</style>