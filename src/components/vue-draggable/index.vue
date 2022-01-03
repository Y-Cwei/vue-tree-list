<template>
  <div class="draggable-container">
    <draggable v-model="arr" group="site" animation="300" dragClass="dragClass"  ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
      <transition-group class="draggable-container">
      <div class="item" v-for="item in arr" :key="item.id">{{item.name}}</div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
// 导入draggable组件
import draggable from 'vuedraggable'
export default {
  name: 'DraggableComponent',
  props: {
    data: {
      trye: Array,
      default: () => []
    }
  },
  components: {
    draggable
  },
  data () {
    return {
      drag: false,
      arr: this.data
    }
  },
  methods: {
    // 开始拖拽事件
    onStart () {
      this.drag = true
    },
    // 拖拽结束事件
    onEnd () {
      this.drag = false
    }
  }
}
</script>

<style scoped>
.draggable-container{
  min-height: 100px;
  width: 100%;
  background-color: #333;
  display: inline-block;
}
/*定义要拖拽元素的样式*/
.ghostClass{
  background-color:  blue !important;
}
.chosenClass{
  background-color: red !important;
  opacity: 1!important;
}
.dragClass{
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow:none !important;
  outline:none !important;
  background-image:none !important;
}
</style>
