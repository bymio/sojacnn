<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>
 
<style scoped>
@media only screen and (min-width: 415px) and (max-width: 90000px) {
  #tab-bar {
    color: white;
    cursor: pointer;
    height: 61px;
    background: #1675e2;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
    width: 1200px;
    display: flex;
    background: #1675e2;
    margin: 0 auto;
  }
}
</style>
