<!--  -->
<template>
  <!-- <div class="">
    <van-button type="primary" @click="click1">注册</van-button>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div> -->
  <div class="login">
    <div class="whole">
      <div class="title">Welcome to Locaticus</div>
      <div class="coordinates-icon">
        <div class="coordinates topAct">
          <img src="../assets/coordinates.png" />
        </div>
        <div class="circle-1-1 circle-show-2"></div>
        <div class="circle-2-2 circle-show-1"></div>
        <div class="circle-3-3 circle-show"></div>
      </div>
      <div class="login-form">
        <form action="#">
          <div class="user-name common-div">
            <span class="eamil-icon common-icon">
              <img src="../assets/eamil.png" />
            </span>
            <input
              v-model="t1"
              type="email"
              name="username"
              value=""
              placeholder="E-mail address"
            />
          </div>
          <div class="user-pasw common-div">
            <span class="pasw-icon common-icon">
              <img src="../assets/password.png" />
            </span>
            <input
              v-model="t2"
              type="password"
              name="password"
              value=""
              placeholder="******"
            />
          </div>
          <div class="login-btn common-div" @click="t3">Sign in</div>
        </form>
      </div>
      <div class="forgets">
        <a href="#">Forget password?</a>
        <a href="#">New here?Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      t1: "",
      t2: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    click1() {
      this.$router.push({
        name: "register",
      });
    },
    init() {
      var view_timer = null;
      function viewPort(userAgent, pageWidth) {
        var oView = document.getElementById("viewport");
        if (oView) {
          document.head.removeChild(oView);
        }
        if (!pageWidth) {
          pageWidth = 640;
        }
        var screen_w = parseInt(window.screen.width),
          scale = screen_w / pageWidth;
        if (/Android (\d+\.\d+)/.test(userAgent)) {
          var creat_meta = document.createElement("meta");
          creat_meta.name = "viewport";
          creat_meta.id = "viewport";
          var version = parseFloat(RegExp.$1);
          if (version > 2.3) {
            creat_meta.content =
              "width=" +
              pageWidth +
              ", initial-scale = " +
              scale +
              ",user-scalable=1, minimum-scale = " +
              scale +
              ", maximum-scale = " +
              scale +
              ", target-densitydpi=device-dpi";
          } else {
            creat_meta.content =
              '"width=' + pageWidth + ", target-densitydpi=device-dpi";
          }
          document.head.appendChild(creat_meta);
        } else {
          var creat_meta = document.createElement("meta");
          creat_meta.name = "viewport";
          creat_meta.id = "viewport";
          if (window.orientation == "-90" || window.orientation == "90") {
            scale = window.screen.height / pageWidth;
            creat_meta.content =
              "width=" +
              pageWidth +
              ", initial-scale = " +
              scale +
              " ,minimum-scale = " +
              scale +
              ", maximum-scale = " +
              scale +
              ", user-scalable=no, target-densitydpi=device-dpi";
          } else {
            creat_meta.content =
              "width=" +
              pageWidth +
              ", initial-scale = " +
              scale +
              " ,minimum-scale = " +
              scale +
              ", maximum-scale = " +
              scale +
              ", user-scalable=no, target-densitydpi=device-dpi";
          }
          document.head.appendChild(creat_meta);
        }
      }
      viewPort(navigator.userAgent);

      window.onresize = function () {
        clearTimeout(view_timer);
        view_timer = setTimeout(function () {
          viewPort(navigator.userAgent);
        }, 500);
      };
    },
    t3() {
      console.log(this.t1);
      console.log(this.t2);

      this.axios
        .post("http://localhost:8090/admin/login", {
          student_id: this.t1,
          password: this.t2,
        })
        .then((res) => {
          console.log(res.data.msg);
          if (res.data.code == 201) {
            this.$toast.fail("登录你妈个币");
          } else if (res.data.code == 200) {
            this.$toast.success("登录成功");
            this.$router.push({
              name: "register",
            });
          }
        });

      //   this.axios.xx('地址',{

      //   }).then(res=>{

      //   }).catch(function(res){

      //   })
    },
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.init();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "微软雅黑";
  -webkit-appearance: none;
}
a {
  color: #2b2b2b;
  text-decoration: none;
}
.login {
  font-size: 12px;
  background-color: #323542;
  height: 100vh;
}
img {
  border: 0px;
}

.whole {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.title {
  width: 100%;
  height: auto;
  overflow: hidden;
  font-size: 36px;
  text-align: center;
  line-height: 200px;
  color: #fff;
}
.coordinates-icon {
  width: 400px;
  height: 240px;
  margin: 20px auto;
  position: relative;
}
.coordinates {
  width: 144px;
  height: 190px;
  overflow: hidden;
  position: absolute;
  z-index: 8;
  margin-left: 134px;
  top: -60px;
}
.coordinates img {
  width: 100%;
  height: auto;
}

.circle-1-1 {
  width: 100%;
  height: 94px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  background-color: #3a3d4a;
  position: absolute;
  bottom: 0;
  z-index: 1;
  opacity: 0;
}
.circle-2-2 {
  width: 234px;
  height: 56px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 100%;
  background-color: #4e515c;
  /*margin:19px 88px;*/
  left: 50%;
  margin-left: -117px;
  bottom: 19px;
  position: absolute;
  z-index: 2;
  opacity: 0;
}
.circle-3-3 {
  width: 108px;
  height: 26px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  background-color: #71747d;
  /*margin:15px 63px;*/
  z-index: 3;
  left: 50%;
  margin-left: -54px;
  bottom: 34px;
  position: absolute;
  opacity: 0;
}

.login-form {
  width: 458px;
  height: auto;
  margin: 90px auto 20px auto;
}
.common-div {
  width: 100%;
  height: 82px;
  overflow: hidden;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  margin-bottom: 40px;
}
.user-name,
.user-pasw {
  background-color: rgba(255, 255, 255, 0.1);
}
.common-div > .common-icon {
  float: left;
  width: 44px;
  height: 44px;
  overflow: hidden;
  margin: 19px;
}
.common-div > .common-icon img {
  width: 100%;
  height: auto;
}
.common-div > input {
  float: left;
  width: 360px;
  height: 44px;
  margin: 19px 8px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 26px;
  color: #fff;
}
.login-btn {
  background-color: #0bd38a;
  color: #fff;
  font-size: 28px;
  text-align: center;
  line-height: 82px;
}
.forgets {
  width: 458px;
  height: auto;
  margin: 0 auto;
}
.forgets > a {
  color: #fff;
  opacity: 0.2;
  font-size: 24px;
}
.forgets > a + a {
  float: right;
}

/***layer css***/
.layui-m-layercont,
.layui-m-layerbtn > span {
  font-size: 24px !important;
}

/***动画***/
.topAct {
  animation: topAct 3s ease-in-out infinite;
  -webkit-animation: topAct 3s ease-in-out infinite;
  -moz-animation: topAct 3s ease-in-out infinite;
  -o-animation: topAct 3s ease-in-out infinite;
  -ms-animation: topAct 3s ease-in-out infinite;
}
@keyframes topAct {
  0% {
    top: -60px;
  }
  50% {
    top: 0px;
  }
  100% {
    top: -60px;
  }
}
@-webkit-keyframes topAct {
  0% {
    top: -60px;
  }
  50% {
    top: 0px;
  }
  100% {
    top: -60px;
  }
}
@-moz-keyframes topAct {
  0% {
    top: -60px;
  }
  50% {
    top: 0px;
  }
  100% {
    top: -60px;
  }
}

.circle-show {
  animation: circleShow 3s ease-in-out infinite 1s;
  -webkit-animation: circleShow 3s ease-in-out infinite 1s;
  -moz-animation: circleShow 3s ease-in-out infinite 1s;
  -ms-animation: circleShow 3s ease-in-out infinite 1s;
  -o-animation: circleShow 3s ease-in-out infinite 1s;
}
@keyframes circleShow {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes circleShow {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes circleShow {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.circle-show-1 {
  animation: circleShow1 3s ease-in-out infinite 1.2s;
  -webkit-animation: circleShow1 3s ease-in-out infinite 1.2s;
  -moz-animation: circleShow1 3s ease-in-out infinite 1.2s;
  -ms-animation: circleShow1 3s ease-in-out infinite 1.2s;
  -o-animation: circleShow1 3s ease-in-out infinite 1.2s;
}
@keyframes circleShow1 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes circleShow1 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes circleShow1 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.circle-show-2 {
  animation: circleShow2 3s ease-in-out infinite 1.4s;
  -webkit-animation: circleShow2 3s ease-in-out infinite 1.4s;
  -moz-animation: circleShow2 3s ease-in-out infinite 1.4s;
  -ms-animation: circleShow2 3s ease-in-out infinite 1.4s;
  -o-animation: circleShow2 3s ease-in-out infinite 1.4s;
}
@keyframes circleShow2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes circleShow2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes circleShow2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>