<template>
  <div>
    <div class="itxst">
      <div class="col">
        <div class="title" >国内网站</div>
        <draggable :data="arr1" />
      </div>
      <div  class="col">
        <div class="title" >你可以把左边的元素拖到右边</div>
        <draggable :data="arr2" />
      </div>
    </div>
  </div>
</template>
<script>
import Draggable from '@/components/vue-draggable'
export default {
  name: 'VueDraggable',
  components: {
    Draggable
  },
  data () {
    return {
      arr1: [
        { id: 11, name: 'www.itxst.com' },
        { id: 12, name: 'www.jd.com' },
        { id: 13, name: 'www.baidu.com' },
        { id: 14, name: 'www.taobao.com' }
      ],
      arr2: [
        { id: 21, name: 'www.google.com' },
        { id: 22, name: 'www.msn.com' },
        { id: 23, name: 'www.ebay.com' },
        { id: 24, name: 'www.yahoo.com' }
      ]
    }
  }
}
</script>

<style lang="scss">
.itxst{
  margin: 10px;

}
.title{
  padding: 6px 12px;
}
.col{
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius:5px ;
  float: left;
}
.col+.col{
 margin-left: 10px;
}

.item{
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border:  solid 1px #eee;
   background-color: #f1f1f1;
}
.item:hover{
  background-color: #fdfdfd;
  cursor: move;
}
.item+.item{
  border-top:none ;
  margin-top: 6px;
}
</style>
