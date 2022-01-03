export const catalogueTree = [
  {
    name: '组织架构',
    id: 1,
    pid: 0,
    dragDisabled: true,
    addTreeNodeDisabled: true,
    addLeafNodeDisabled: true,
    editNodeDisabled: true,
    delNodeDisabled: true,
    children: [
      {
        name: 'Node 1-2',
        id: 2,
        isLeaf: true,
        pid: 1
      }
    ]
  },
  {
    name: '制度保障',
    id: 2,
    pid: 0,
    disabled: true
  },
  {
    name: '分类分级',
    id: 3,
    pid: 0,
    children: [
      {
        name: '分类分级制度',
        id: 31,
        isLeaf: true,
        pid: 3
      },
      {
        name: '分类情况评估',
        id: 32,
        isLeaf: true,
        pid: 3
      },
      {
        name: '分级情况评估',
        id: 33,
        isLeaf: true,
        pid: 3
      }
    ]
  },
  {
    name: '数据风险',
    id: 4,
    pid: 0,
    children: [
      {
        name: '数据分布异常',
        id: 41,
        isLeaf: true,
        pid: 4
      },
      {
        name: '数据生命周期',
        id: 42,
        isLeaf: true,
        pid: 4
      }
    ]
  },
  {
    name: '权限管理',
    id: 5,
    pid: 0
  },
  {
    name: '边界管理',
    id: 6,
    pid: 0
  },
  {
    name: '安全审计',
    id: 7,
    pid: 0
  },
  {
    name: '运维评估',
    id: 8,
    pid: 0
  },
  {
    name: '应急响应',
    id: 9,
    pid: 0
  },
  {
    name: '安全建议',
    id: 10,
    pid: 0
  },
  {
    name: '参考标准',
    id: 11,
    pid: 0
  }
]
