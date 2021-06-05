<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tabbar-grop">
    <div
      class="tab-bar-item-grop"
      @click="itemClick"
    >
      <div class="tab-bar-item" :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // return this.isActive
      //   ? { color: this.activeColor, backgroundColor: "#014899" }
      //   : {};
    },
  },
  methods: {
    itemClick() {
      // var res = document.getElementsByClassName("tab-bar-item-grop");
      // for (this.index in res) {
      //   if (Object.hasOwnProperty.call(res, this.index)) {
      //     console.log(this.index);
      //   }
      // }
      // this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tabbar-grop {
  text-align: center;
  height: 61px;
  flex: 1;
}
.tab-bar-item-grop {
  flex: 1;
  text-align: center;
  height: 61px;
  line-height: 61px;
  font-size: 16px;
}
</style>
