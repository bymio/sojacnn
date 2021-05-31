<template>
<!--  -->
  <div  @click="findCategoryByContypeId($event,index)"  class="navigation">
    <tab-bar >
      <tab-bar-item path="/home">
        <div class="title" value='1' slot="item-text">本站首页</div>
      </tab-bar-item>
      <tab-bar-item path="/gsosp">
        <div class="title" value='2' slot="item-text">科普概况</div>
      </tab-bar-item>
      <tab-bar-item path="/policy">
        <div class="title" value='3' slot="item-text">政策法规</div>
      </tab-bar-item>
      <tab-bar-item path="/scienceproject">
        <div class="title" value='4' slot="item-text">科普项目</div>
      </tab-bar-item>
      <tab-bar-item path="/academicexchange">
        <div class="title" value='5' slot="item-text">学术交流</div>
      </tab-bar-item>
      <tab-bar-item path="/businessguide">
        <div class="title" value='6' slot="item-text">办事指南</div>
      </tab-bar-item>
      <tab-bar-item path="/popularscience">
        <div class="title" value='7' slot="item-text">科普风采</div>
      </tab-bar-item>
      <tab-bar-item>
        <div value='8' class="title" slot="item-text">
          <a href="https://www.pdsu.edu.cn/">学校首页</a>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/contact">
        <div class="title" value='9' slot="item-text">联系我们</div>
      </tab-bar-item>
    </tab-bar>
    <contact-information-bar></contact-information-bar>
  </div>
</template>

<script>
import { findCategoryByContypeId } from "@/api/index";

import TabBar from "components/common/tabbar/TabBar";
import ContactInformationBar from "components/common/contact-information/ContactInformationBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  data() {
    return {
      current: [],
      index: 2,
    };
  },
  props: {
    navinfo: {
      type: Object,
    },
  },
  mounted() {},
  methods: {
    async findCategoryByContypeId(event,Id) {
      const navJson = this.navinfo;
      console.log(event.target.value);
      
      // this.index = event.target.value;
      console.log(navJson);
      for (let i = 0; i < navJson.length; i++) {
      }
      let data = {
        contypeId: Id,
      };
      var result;
      result = await findCategoryByContypeId(data);
      // console.log(result);
    },
    itemClick(event){
      event.target.value=0;
      console.log(event.target);
      
    }
  },

  components: {
    TabBar,
    TabBarItem,
    ContactInformationBar,
  },
};
</script>

<style scoped>
.navigation {
  position: absolute;
  width: 1903px;
  height: 61px;
  background: #1675e2;
}
a {
  color: #fff;
}
a:hover {
  background: #1675e2;
}
/* .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #f4f4f5;
}

.el-menu-demo {
  width: 1200px;
  display: flex;
  background: #1675e2;
  margin: 0 auto;
}

.el-menu-item {
  text-align: center;
  height: 61px;
  flex: 1;
}

.el-menu-item a {
  display: block;
  color: #ffffff;
  font-size: 16px;
} */
</style>
