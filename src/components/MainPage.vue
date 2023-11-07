<template>
  <div class="wrapper">
    <div class="listFilter">
      <select-type
        :listCars="getTypeList"
        :listBrandCars="getCarsBrandFromList"
        :listModelCars="getCarsModelFromList"
        @selectedTipe="selectedTipe"
        @selectedOptions="checkOption"
      />
    </div>
    <div class="carsList" v-if="listCars">
      <list-cars :listCars="listCars" />
    </div>
        <div class="carsList" v-else>
      <p>Oops.....</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ListCars from "./ListCars.vue";
import SelectType from "./SelectType.vue";
export default {
  name: "MainPage",
  components: { SelectType, ListCars },
  computed: {
    ...mapGetters([
      "getTypeList",
      "getCarsBrandFromList",
      "getCarsModelFromList",
      "getFilterOptions",
    ]),
    listCars() {
      if (this.getFilterOptions.length !==0 ) return this.getFilterOptions;
        return null
      
    },
  },
  methods: {
    ...mapActions([
      "setTipeCars",
      "setSelectedTipe",
      "setListCars",
      "setFilterOptions",
    ]),

    selectedTipe(type) {
      this.setSelectedTipe(type);
    },
    checkOption(obj) {
      this.setFilterOptions(obj);
    },
  },
  created() {
    this.setListCars();
    this.setTipeCars();
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  width: 100%;
  display: flex;
}
.listFilter {
  width: 20%;
}
.carsList {
  width: 80%;
}
</style>