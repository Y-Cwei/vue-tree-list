<template>
  <div class="report">
    <div class="toolbar">
      <h6 class="subTitle">工具栏</h6>
      <div class="action">
        <div class="recommend"></div>
        <div class="text"></div>
      </div>
    </div>
    <div class="catalogue-all-tree">
      <h6 class="subTitle">全部菜单列表</h6>
      <div class="action-btn">
        <el-button type="primary" size="mini" @click="addNode">添加菜单</el-button>
        <vue-tree-list ref="allTreeList" :data="allCatalogueData" />
      </div>
    </div>
    <div class="catalogue-use-tree">
      <h6 class="subTitle">已选菜单列表</h6>
        <vue-tree-list ref="useTreeList" :data="useData" />
    </div>
    <div class="catalogue-temp">
      <div style="width: 100%; float: left">
        <button @click="getNewTree">获取已选菜单列表JSON数据</button>
        <pre>
          {{newTree}}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import VueTreeList from '@/components/vue-tree-list'
import { catalogueTree } from '@/constansts/catalogue-tree.js'
export default {
  name: 'TreeList',
  components: {
    VueTreeList
  },
  data () {
    return {
      allCatalogueData: catalogueTree,
      useData: [
        {
          name: '制度保障',
          id: 222,
          pid: 0
        }
      ],
      newTree: null
    }
  },
  methods: {
    addNode () {
      this.$refs.allTreeList.addNode()
    },
    getNewTree () {
      this.newTree = this.$refs.useTreeList.getNewTree()
    }
  }
}
</script>

<style lang="scss">
  .report{
    width: 100%;
    height: 100%;
    .toolbar,
    .catalogue-all-tree,
    .catalogue-use-tree,
    .catalogue-temp{
      height: calc(100%);
      float: left;
      overflow-y: auto;
      border-right: 2px solid #f2f2f2;
    }
    .catalogue-all-tree{
      .action-btn{
        padding: 4px;
      }
    }
    .toolbar{
      width: 60px;
    }
    .subTitle{
      text-align: center;
      font-size: 12px;
      line-height: 24px;
    }
    .action{
      .recommend,
      .text{
        width: 50px;
        height: 50px;
        margin: 0 auto;
      }
      .recommend{
        background: url('../assets/recommend.svg') center no-repeat;
        background-size: 60%;
      }
      .text{
        background: url('../assets/text.svg') center no-repeat;
        background-size: 60%;
      }
    }
    .catalogue-all-tree,
    .catalogue-use-tree{
      width: 240px;
      & > div{
        padding: 8px 0;
      }
    }
    .catalogue-use-tree{
      .vtl-node-main{
        background-color: #f2f2f2;
      }
    }
    .catalogue-temp{
      width: calc(100% - 240px - 240px - 60px)
    }
  }
</style>
