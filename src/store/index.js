import { createStore } from "vuex";
import { listCars } from "../components/listCars";
import { tipeCars } from "../components/listCarsTipes";

export default createStore({
  state: {
    listCars: [],
    selectedTipe: null,
    listTipes: [],
    filterOptions: null,
  },
  getters: {
    getListCars: ({ listCars }) => listCars,
    getTypeList: ({ listTipes, selectedTipe }) => {
      const filteredItem = listTipes.find(item => item.type === selectedTipe);
      return filteredItem ? filteredItem.list : [];
    },
    // список брендів машин
    getCarsBrandFromList: ({ listCars }) => {
      let set = new Set();
      listCars.forEach(car => {
        set.add(car.brand);
      });
      return set;
      
    },
    // список марок машин
    getCarsModelFromList: ({ listCars }) => {
      let set = new Set();
      listCars.forEach(car => {
        set.add(car.model);
      });
      return set;
    },
    // фільтруванння списку автомобілів
    getFilterOptions: ({ filterOptions, listCars }) => {
      if (filterOptions) {
        const { selectedTipe,
          selectedBody,
          selectedBrand,
          selectedModel,
          yearFrom,
          yearTo
        } = filterOptions
        if (selectedTipe || selectedBody ||
          selectedBrand || selectedModel ||
          yearFrom || yearTo) {
          return listCars.filter((car) => {
            return (
              (!selectedTipe || car.typesOfTransport === selectedTipe) &&
              (!selectedBody || car.bodyType === selectedBody) &&
              (!selectedBrand || car.brand === selectedBrand) &&
              (!selectedModel || car.model === selectedModel)&&
              (!yearFrom || parseInt(car.year) >= parseInt(yearFrom)) &&
              (!yearTo || parseInt(car.year) <= parseInt(yearTo))
            )
          })
        }
      }
      else {
        return listCars
      }
    }
  },
  mutations: {
    setListCars(state, list) {
      state.listCars = list
    },
    setSelectedTipe(state, type) {
      state.selectedTipe = type
    },
    setTipeCars(state, type) {
      state.listTipes = type
    },
    setFilterOptions(state, obj) {
      state.filterOptions = obj
    }
  },
  actions: {
    setTipeCars({ commit }) {
      commit('setTipeCars', tipeCars)
    },
    setSelectedTipe({ commit }, type) {
      commit('setSelectedTipe', type)
    },
    setListCars({ commit }) {
      commit('setListCars', listCars)
    },
    setFilterOptions({ commit }, obj) {
      commit('setFilterOptions', obj)
    }
  },
  modules: {},
});
