<template>
    <div id="app">
        <div class="starts">
            <div ref="star" v-for="(item,index) in starsCount" :key="index" class="star"></div>
        </div> 
        <!-- <v-tool></v-tool> -->
        <div class="login ">
             <!-- 发布订阅模式取值l名字来自组件tool中的name -->
             <h1 id="title">个人简历</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-col :span="20">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model="ruleForm.age"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item label="电话号码" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item label="兴趣爱好" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择你的兴趣爱好">
                            <el-option label="篮球" value="basketball"></el-option>
                            <el-option label="编程" value="program"></el-option>
                            <el-option label="跑步" value="running"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item label="活动时间" required>
                        <el-col :span="8">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                    style="width: 100%;">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="8">
                            <el-form-item prop="date2">
                                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;">
                                </el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item label="活动性质" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item label="特殊资源" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item label="活动形式" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="20">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-col>
            </el-form>
           
        </div>
    </div>
</template>
<script>
    import pubsub from "@/utils/pubsub.js"
    // import vTool from "@/views/homeland/tool/index.vue"
    export default {
        data() {
            return {
                starsCount: 800,//星星数量
                distance: 800,//间距
                h1:"你好",
                ruleForm: {
                    age: "",
                    phone: "",
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入你的姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: '请输入你的年龄', trigger: 'blur' },
                        { min: 1, max: 3, message: '长度在1 到 3 个字符', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入你的电话号码', trigger: 'blur' },
                        { min: 11, max: 11, message: '长度为11个数字', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        // provide:{
        //     text:"this.h1",
        // },
        mounted() {
            let that = this
            let startArr = that.$refs.star
            startArr.forEach(item => {
                var speed = 0.2 + (Math.random() * 1);
                var thisDistance = that.distance + (Math.random() * 300)
                item.style.transformOrigin = `0 0  ${thisDistance}px`
                item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
            });
            // 发布订阅模式取值的地区
            pubsub.listen("item",function(data){
                that.h1 =data;
            })
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        // components:{
        //     vTool,
        // }
    }
</script>
<style scoped>
    .el-breadcrumb {
        height: 49px;
        border-bottom: 1px solid #ccc;
        line-height: 50px;
    }

    .mouth {
        background-color: #f7f7b8;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        position: absolute;
        top: 100px;
        left: 240px;
        opacity: 0.9;
    }

    .small {
        background-color: #75517d;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        position: absolute;
        top: 8px;
        left: -5px;
    }

    #app {
        position: relative;
        display: flex;
        width: 100vw;
        height: 90vh;
        background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
        background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
        background-attachment: fixed;
        overflow: hidden;
    }

    @keyframes rotate {
        0% {
            transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
        }

        100% {
            transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
        }
    }

    .starts {
        transform: perspective(500px);
        transform-style: preserve-3d;
        position: absolute;
        perspective-origin: 50% 100%;
        left: 50%;
        animation: rotate 90s infinite linear;
        bottom: 0;
    }

    .star {
        width: 4px;
        height: 4px;
        background-color: #f7f7b8;
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
    }

    .bg {
        width: 100vw;
        height: 100vh;
    }

    .login {
        margin: 100px auto;
        width: 800px;
        height: 700px;
        background-color: #ccc;
        border: 1px solid rgb(22, 115, 177);
        opacity: 0.8;
    }

    #title {
        text-align: center;
        margin-top: 20px;
        height: 50px;
    }
</style>