<template>
  <div class="">
    <el-container>
      <el-header class="header">
        <div class="headers">
          <div>UNI-ADMIN</div>
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" router>
            <el-menu-item index="/list">首页</el-menu-item>
            <el-menu-item index="/shop">商品</el-menu-item>
            <el-menu-item index="3">订单</el-menu-item>
            <el-menu-item index="4">会员</el-menu-item>
            <el-menu-item index="5">设置</el-menu-item>
            <el-sub-menu index="2">
              <template #title>admin</template>
              <el-menu-item index="2-1">修改</el-menu-item>
              <el-menu-item index="2-2" @click="tc">退出</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu active-text-color="green" background-color="white" class="el-menu-vertical-demo" default-active="4"
                text-color="black">
                <el-menu-item index="1">
                  <el-icon><icon-menu /></el-icon>
                  <span>后台首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <el-icon>
                    <setting />
                  </el-icon>
                  <span>相册管理</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main class="main"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, computed, watch } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
// 引入路由
const router = useRouter();
// 路由对象
const route = useRoute();
// 引入仓库
const store = useStore();
const activeIndex2 = ref('1')
const tc = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
// 声明响应式数据
const data = reactive({

});

// 父传子
const props = defineProps({

});

// 子传父, 传递的自定义事件名还要在defineEmits中声明
const emit = defineEmits([]);

</script>

<style lang="scss" scoped>
.el-menu-demo {
  width: 550px;
  height: 50px;
}

.main {
  width: 100%;
  height: 93.3vh;
  background-color: #F8F8F8;
}

.tac {
  width: 100%;
  height: 93.3vh;
  background-color: white;
  border-right: 1px solid #E7E7E7;
}

.header {
  width: 100%;
  height: 50px;
  background-color: #4D5861;
  line-height: 50px;

  .headers {
    width: 100%;
    height: 30px;
    // margin-top: 10px;
    display: flex;
    justify-content: space-between;
    color: white;

    .div {
      width: 350px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
