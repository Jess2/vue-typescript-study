import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import {Item, State} from "@/store/store.interface";
import AxiosService from "@/service/axios.service";
import {AxiosResponse} from "axios";

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  // state 값을 변경할 때 사용
  mutations: {
    addItem (state, item: Item) {
      state.todoList.push(item);
    },
    changeStatus (state, {id, status}: {id: number, status: 'active' | 'clear'}) {
      state.todoList[id].status = status;
    },
    removeItem (state, id: number) {
      state.todoList.splice(id, 1);
    },
    setTodoList (state, todoList: Item[]) {
      state.todoList = todoList;
    }
  },
  // 서버와의 통신이나 비지니스 로직 포함
  actions: {
    async initData({commit}) {
      // http 통신
      const response: AxiosResponse<{todoList: Item[]}> = await AxiosService.instance.get('/data.json');

      commit('setTodoList', response.data.todoList)
    }
  },
  modules: {
  },
  // state의 계산된 값을 사용할 때 getter 사용
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'active');
    },
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'clear');
    }
  }
};

export default new Vuex.Store(store)
