<template>
    <div class="">
        <div class="box1">
            <div class="box2">
                <div class="icon"><el-icon style="color: white;">
                        <UserFilled />
                    </el-icon></div>
                <div class="box3">
                    <div class="font">30</div>
                    <div class="font1">关注人数(个)</div>
                </div>
            </div>
            <div class="box2">
                <div class="icon1"><el-icon style="color: white;">
                        <FolderOpened />
                    </el-icon></div>
                <div class="box3">
                    <div class="font">120</div>
                    <div class="font1">订单总数(笔)</div>
                </div>
            </div>
            <div class="box2">
                <div class="icon2"><el-icon style="color: white;">
                        <List />
                    </el-icon></div>
                <div class="box3">
                    <div class="font">4183.80</div>
                    <div class="font1">今日订单总金额(元)</div>
                </div>
            </div>
            <div class="box2">
                <div class="icon3"><el-icon style="color: white;">
                        <Histogram />
                    </el-icon></div>
                <div class="box3">
                    <div class="font">100</div>
                    <div class="font1">本月销量(笔)</div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list1">
                <div class="list2">
                    <div class="list4">
                        <div class="list44">
                            <div class="font3">店铺及商品展示</div>
                            <div class="font2">需要关注的店铺信息及待处理事项</div>
                        </div>
                    </div>
                    <div class="list5">
                        <div class="list55">
                            <div class="list555">
                                <div style="font-size: 18px;margin-top: 5px;">64</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">出售中</div>
                            </div>
                            <div class="list555">
                                <div style="font-size: 18px;margin-top: 5px;">10</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">待回复</div>
                            </div>
                            <div class="list555">
                                <div style="font-size: 18px;margin-top: 5px;">0</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">库存预警</div>
                            </div>
                            <div class="list555">
                                <div style="font-size: 18px;margin-top: 5px;">3</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">仓库中</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list3">
                    <div class="list4">
                        <div class="list44">
                            <div class="font3">交易提示</div>
                            <div class="font2">需要立即处理的交易订单</div>
                        </div>
                    </div>
                    <div class="list6">
                        <div class="list66">
                            <div class="list666">
                                <div style="font-size: 18px;margin-top: 5px;">0</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">待付款</div>
                            </div>
                            <div class="list666">
                                <div style="font-size: 18px;margin-top: 5px;">10</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">待发货</div>
                            </div>
                            <div class="list666">
                                <div style="font-size: 18px;margin-top: 5px;">0</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">已发货</div>
                            </div>
                            <div class="list666">
                                <div style="font-size: 18px;margin-top: 5px;">3</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">已收货</div>
                            </div>
                            <div class="list666">
                                <div style="font-size: 18px;margin-top: 5px;">3</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">退款中</div>
                            </div>
                            <div class="list666">
                                <div style="font-size: 18px;margin-top: 5px;">3</div>
                                <div style="font-size: 12px;margin-top: 5px;color: #505355;">待售后</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list1">
                <div class="list11">
                    <div id="one"></div>
                </div>
            </div>
        </div>
        <div class="a">
            <div class="a1">
                <div class="list4">
                    <div class="list44">
                        <div class="font3">销售情况统计</div>
                        <div class="font2">按周期统计商家店铺的订单量和订单金额</div>
                    </div>
                </div>
                <div class="a11">
                    <div class="a111">
                        <div class="a1111">
                            昨日销量</div>
                        <div style="height: 100%;font-size: 12px;width: 496px;">
                            <div class="font5">
                                &emsp;&emsp;订单金额(元)12</div>
                            <div class="font6">&emsp;&emsp;订单量(件)12</div>
                        </div>
                    </div>
                    <div class="a111">
                        <div class="a1111">
                            本月销量</div>
                        <div style="height: 100%;font-size: 12px;width: 496px;">
                            <div class="font5">
                                &emsp;&emsp;订单金额(元)12</div>
                            <div class="font6">&emsp;&emsp;订单量(件)12</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="a2">
                <div class="list4">
                    <div class="list44">
                        <div class="font3">单品销售排名</div>
                        <div class="font2">按周期统计商家店铺的订单量和订单金额</div>
                    </div>
                </div>
                <el-table :data="tableData" style="width: 96%;margin-top: 10px;margin-left: 10px;" height="200" border>
                    <el-table-column fixed type="index" label="#" width="50" />
                    <el-table-column prop="address" label="商品信息" width="495" />
                    <el-table-column prop="state" label="销量" width="55" />
                </el-table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, computed, watch } from 'vue';
import { UserFilled, Histogram, List, FolderOpened } from '@element-plus/icons-vue'
import * as echarts from 'echarts';
import { onMounted } from "vue";
// 引入路由
const router = useRouter();
// 路由对象
const route = useRoute();
// 引入仓库
const store = useStore();

// 声明响应式数据
const data = reactive({

});
onMounted(() => {
    var one = document.getElementById('one');
    var myChart = echarts.init(one);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    myChart.setOption(option);

})
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: '9',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: '9',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: '9',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: '9',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: '9',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: '9',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: '9',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
]
// 父传子
const props = defineProps({

});

// 子传父, 传递的自定义事件名还要在defineEmits中声明
const emit = defineEmits([]);

</script>

<style lang="scss" scoped>
.a {
    width: 100%;
    height: 235px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .a1 {
        width: 49%;
        height: 235px;
        border: 1px solid #DDE0E1;
        background-color: white;
    }

    .a2 {
        width: 49%;
        height: 270px;
        border: 1px solid #DDE0E1;
    }
}

.a11 {
    width: 100%;
    height: 200px;

    .a111 {
        width: 94%;
        height: 75px;
        margin-top: 10px;
        margin-left: 15px;
        display: flex;

        .a1111 {
            width: 100px;
            height: 75px;
            text-align: center;
            line-height: 75px;
            background-color: #F8F8F8;
            font-size: 14px;
            border: 1px solid #DDE0E1;
        }
    }
}

.font5 {
    height: 37.5px;
    line-height: 37.5px;
    border-bottom: 1px solid #DEE0E2;
    border-top: 1px solid #DDE0E1;
    border-right: 1px solid #DDE0E1;
}

.font6 {
    height: 37.5px;
    line-height: 37.5px;
    border-right: 1px solid #DDE0E1;
    border-bottom: 1px solid #DDE0E1;
}

.list11 {
    width: 100%;
    height: 270px;
    background-color: white;
    border: 1px solid #EDEDF3;
}

#one {
    width: 100%;
    height: 270px;
}

.list6 {
    width: 100%;
    height: 80px;

    .list66 {
        width: 94%;
        height: 60px;
        margin: 10px 20px;
        display: flex;
        justify-content: space-between;

        .list666 {
            width: 13%;
            height: 60px;
            background-color: #F8F8F8;
            text-align: center;
        }
    }
}

.list5 {
    width: 100%;
    height: 80px;

    .list55 {
        width: 94%;
        height: 60px;
        margin: 10px 20px;
        display: flex;
        justify-content: space-between;

        .list555 {
            width: 22%;
            height: 60px;
            background-color: #F8F8F8;
            text-align: center;
        }
    }
}

.list4 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #EBEBED;
    display: flex;
    justify-content: center;

    .list44 {
        width: 95%;
        display: flex;
        justify-content: space-between;
    }
}

.font3 {
    font-size: 14px;
}

.font2 {
    font-size: 12px;
    color: green;
}

.list {
    width: 100%;
    height: 270px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .list1 {
        width: 49%;
        height: 270px;

        .list2 {
            width: 100%;
            height: 130px;
            background-color: white;
            border: 1px solid #EBEBED;
        }

        .list3 {
            width: 100%;
            height: 130px;
            margin-top: 10px;
            background-color: white;
            border: 1px solid #EBEBED;
        }
    }
}

.box1 {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;

    .box2 {
        width: 23%;
        height: 90px;
        background-color: white;
        border: 1px solid #EBEAEC;
        display: flex;

        .icon {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #0076FF;
            margin: 23px 15px;
        }

        .icon1 {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #14A534;
            margin: 23px 15px;
        }

        .icon2 {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #E22D3D;
            margin: 23px 15px;
        }

        .icon3 {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #FFBD00;
            margin: 23px 15px;
        }

        .box3 {
            margin-top: 20px;

            .font {
                font-size: 24px;
            }

            .font1 {
                font-size: 12px;
            }
        }
    }
}
</style>