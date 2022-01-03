<template>
  <div class="tree-list-container">
      <vue-tree-list
        @click="onClick"
        @change-name="onChangeName"
        @delete-node="onDel"
        @add-node="onAddNode"
        :model="treeData"
        default-tree-node-name="new node"
        default-leaf-node-name="new leaf"
        v-bind:default-expanded="false"
      >
        <template v-slot:leafNameDisplay="slotProps">
          <span>
            {{ slotProps.model.name }} <span class="muted">{{ slotProps.model.disabled || slotProps.model.dragDisabled? '【禁止拖拽】' : ''}}</span>
          </span>
        </template>
        <!-- <span class="icon" slot="addTreeNodeIcon">📂</span>
        <span class="icon" slot="addLeafNodeIcon">＋</span>
        <span class="icon" slot="editNodeIcon">📃</span>
        <span class="icon" slot="delNodeIcon">✂️</span> -->
        <span class="icon" slot="leafNodeIcon"></span>
        <span class="icon" slot="treeNodeIcon"></span>
      </vue-tree-list>
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
export default {
  name: 'VueTreeListComponent',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    VueTreeList
  },
  data () {
    return {
      newTree: {},
      treeData: new Tree(this.data)
    }
  },
  methods: {
    onDel (node) {
      console.log(node)
      node.remove()
    },

    onChangeName (params) {
      console.log(params)
    },

    onAddNode (params) {
      console.log(params)
    },

    onClick (params) {
      console.log(params)
    },

    addNode () {
      var node = new TreeNode({ name: 'new node', isLeaf: false })
      if (!this.treeData.children) this.treeData.children = []
      this.treeData.addChildren(node)
    },

    getNewTree () {
      var vm = this
      function _dfs (oldNode) {
        var newNode = {}

        for (var k in oldNode) {
          if (k !== 'children' && k !== 'parent') {
            newNode[k] = oldNode[k]
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = []
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]))
          }
        }
        return newNode
      }

      vm.newTree = _dfs(vm.treeData)
      return vm.newTree
    }
  }
}
</script>

<style lang="scss">
  .vtl {
    .vtl-tree-margin{
      margin-left: 1.5rem;
    }
    .vtl-node-main {
      cursor: move;
      padding: 5px 0 5px 1em;
      font-size: 14px;
      .muted{
        color: #b3b3b3;
      }
      &.vtl-drag-disabled {
        cursor: not-allowed;
        cursor: no-drop;
        color: #b3b3b3;
        &:hover {
          background-color: transparent;
        }
      }
      &.vtl-disabled {
        cursor: not-allowed;
        cursor: no-drop;
        color: #b3b3b3;
      }
      &.vtl-active {
        border-bottom: 2px dashed #37f;
        outline: none;
      }
      &.vtl-active {
        border: 2px dashed #37f;
        outline: none;
      }
    }
    .vtl-border.vtl-up{
      margin-top: 0;
    }
    .vtl-tree-node{
      background-color: #fff;
      .vtl-operation{
        cursor: pointer;
      }
    }
  }
  .icon {
    &:hover {
      cursor: pointer;
    }
  }
  .vtl-caret{
    cursor: default;
  }
  .muted {
    color: gray;
    font-size: 80%;
  }
</style>
