<template>
  <div class="banner">
    <div class="block">
      <el-carousel trigger="click">
        <el-carousel-item style="height:360px" v-for="item in imgList" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
      ],
    };
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>

<style scoped>
.banner {
  width: 600px;
  height: 360px;
  position: relative;
  top: 20px;
  left: 0px;
}
.el-carousel__item img {
  /* color: #475669; */
  width: 600px;
  height: 360px;
  font-size: 14px;
  line-height: 150px;
  margin: 0;
}
.block {
  width: 600px;
  height: 360px;
}
.el-carousel {
  width: 600px;
  height: 360px;
}
.el-carousel__container {
    position: relative;
    height: 360px;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
