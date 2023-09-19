<template>
 <div class="">

 </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, computed, watch } from 'vue';

// 引入路由
const router = useRouter();
// 路由对象
const route = useRoute();
// 引入仓库
const store = useStore();

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
</style>