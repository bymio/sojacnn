<template>
  <!-- <div class="notice">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        <a href="#">列表内容</a> {{+ o }}
      </div>
    </el-card>
  </div> -->
  <div class="notice">
    <div class="notice-header">
      <div class="notice-header-title">
        <h2>通知公告</h2>
        <div class="more" @click="substanceClick">更多></div>
      </div>
    </div>
    <div class="body">
      <div class="body-item">
        <div class="item-left">
          <span>05-21</span>
          <span>2021</span>
        </div>
        <div class="item-right">
          <p>
            <a href="#" title=""
              >关于推荐2021年“最美铁道科技工作者”候选人的通知</a
            >
          </p>
        </div>
      </div>
      <div class="body-item">
        <div class="item-left">
          <span>05-21</span>
          <span>2021</span>
        </div>
        <div class="item-right">
          <p>
            <a href="#" title=""
              >关于推荐2021年“最美铁道科技工作者”候选人的通知</a
            >
          </p>
        </div>
      </div>
      <div class="body-item">
        <div class="item-left">
          <span>05-21</span>
          <span>2021</span>
        </div>
        <div class="item-right">
          <p>
            <a href="#" title=""
              >关于推荐2021年“最美铁道科技工作者”候选人的通知</a
            >
          </p>
        </div>
      </div>
      <div class="body-item">
        <div class="item-left">
          <span>05-21</span>
          <span>2021</span>
        </div>
        <div class="item-right">
          <p>
            <a href="#" title=""
              >关于推荐2021年“最美铁道科技工作者”候选人的通知</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      path:'/circulars'
    };
  },
  methods: {
    substanceClick(){
      this.$router.push(this.path)
    }
  },
};
</script>

<style scoped>
.notice {
  width: 530px;
  position: absolute;
  top: 20px;
  right: -10px;
}

.notice .notice-header .notice-header-title {
  width: 490px;
  height: 40px;
  background-color: transparent;
  border: 0;
  padding: 0 0 8px;
  position: relative;
  border-bottom: 2px solid #006ed7;
  /* background: rgb(177, 170, 170); */
}
.notice .notice-header .notice-header-title h2 {
  font-size: 20px;
  font-family: "微软雅黑", Arial, sans-serif;
  font-weight: 600;
  color: #006ed7;
  display: block;
  padding-left: 15px;
  padding-top: 5px;
  position: relative;
}
.notice .notice-header .notice-header-title h2::before {
  width: 5px;
  height: 15px;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -5px;
  margin-left: 5px;
  background-color: #006ed7;
}
.notice .notice-header .notice-header-title .more {
  cursor: pointer;
  position: relative;
  right: -450px;
  bottom: 10px;
  color: #666;
  font-size: 12px;
}

.body {
  width: 490px;
  height: 320px;
  /* background: rgb(124, 32, 32); */
}
.body .body-item {
  height: 70px;
  width: 100%;
  background-color: #f4f4f4;
  border: 2px solid #f4f4f4;
  margin-bottom: 10px;
  display: flex;
  flex-flow: inherit;
}
.body .body-item .item-left {
  width: 75px;
  height: 100%;
  display: flex;
  padding: 10px;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}
.body-item .item-left span:first-child {
  font-size: 18px;
  font-weight: 600;
}
.body-item .item-left span:last-child {
  font-size: 14px;
  color: #999;
}
.body .body-item .item-right {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  padding: 10px;
}
.body .body-item .item-right p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.body .body-item .item-right a {
  cursor: pointer;
  color: #006ed7;
}
</style>
