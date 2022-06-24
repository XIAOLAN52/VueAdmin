import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    menuList: [],
    permList: [],
    hasRoutes: false,

    editableTabsValue: 'Index',
    editableTabs: [{
        title: '首页',
        name: 'Index',
    }]
  },
  getters: {
  },
  mutations: {
    setMenuList(state,menus){
        state.menuList = menus
    },
    setPermList(state,perms){
        state.permList = perms
    },
    changeRouteStatus(state, hasRoutes) {
        state.hasRoutes = hasRoutes
    },

    addTab(state,tab) {
        //找一下以前的tab有没有
        let index = state.editableTabs.findIndex(e => e.name === tab.name)
        //以前的tab没有则新增此tan
        if (index === -1) {
        state.editableTabs.push({
          title: tab.title,
          name: tab.name,
        });
        }
        //无论以前的tab是否有  value都要跳到此tab
        state.editableTabsValue = tab.name;
    },

    resetState: (state) => {
      state.menuList = []
			state.permList = []

			state.hasRoutes = false
			state.editableTabsValue = 'Index'
			state.editableTabs = [{
				title: '首页',
				name: 'Index',
			}]
    }
  },
  actions: {
  },
  modules: {
  }
}
