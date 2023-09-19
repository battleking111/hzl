<template>
    <div class="login">
        <div class="list">
            <div class="div">
                <h2>UNI-ADMIN</h2>
            </div>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码" />
                </el-form-item>
                <button class="button" @click="submitForm(ruleFormRef)">立即登录</button>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, computed, watch } from 'vue';
import { getlogin } from '../utils/api'
import { ElMessage } from 'element-plus'
// 引入路由
const router = useRouter();
// 路由对象
const route = useRoute();
// 引入仓库
const store = useStore();
const ruleFormRef = ref<any>()
const ruleForm = reactive({
    username: '',
    password: ''
})
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ],
})
const submitForm = async (formEl: any | undefined) => {
    if (!formEl) return
    await formEl.validate((valid: any, fields: any) => {
        if (valid) {
            getlogin({ username: ruleForm.username, password: ruleForm.password }).then((res: any) => {
                console.log(res);
                localStorage.setItem('token', res.data.data.token)
                router.push('/')
                ElMessage('登录成功')
            })
        } else {
            console.log('error submit!', fields)
        }
    })
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
.button {
    width: 100%;
    background-color: #219795;
    border: 0;
    color: white;
    height: 30px;
    border-radius: 4px;
}

.demo-ruleForm {
    margin: 20px 10px;
}

.login {
    width: 100%;
    height: 100vh;
    align-items: center;
    display: flex;
    justify-content: center;

    .list {
        width: 400px;
        height: 230px;
        border: 1px solid #ccc;

        .div {
            width: 100%;
            height: 50px;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 50px;
        }
    }
}
</style>