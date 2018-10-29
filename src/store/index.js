import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'

import columnsStore from './com/pro/code/plugin/columns/columnsStore'
import dtStore from './com/pro/code/plugin/dt/dtStore'
import pkStore from './com/pro/code/plugin/pk/pkStore'
import queryStore from './com/pro/code/plugin/query/queryStore'
import sortStore from './com/pro/code/plugin/sort/sortStore'
import virtualColumnsStore from './com/pro/code/plugin/virtualColumns/virtualColumnsStore'
import codingStore from './com/pro/code/plugin/business/coding/codingStore'
import dataDictStore from './com/pro/data/dict/dataDict/dataDictStore'
import dataDictValueStore from './com/pro/data/dict/dataDictValue/dataDictValueStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    app
  }
})

store.registerModule('columnsStore', columnsStore)
store.registerModule('dtStore', dtStore)
store.registerModule('pkStore', pkStore)
store.registerModule('queryStore', queryStore)
store.registerModule('sortStore', sortStore)
store.registerModule('virtualColumnsStore', virtualColumnsStore)
store.registerModule('codingStore', codingStore)
store.registerModule('dataDictStore', dataDictStore)
store.registerModule('dataDictValueStore', dataDictValueStore)

export default store
