<template>
  <div class="wrapper__select">
    <div class="block-type-car">
      <p>Тип транспорта</p>
      <select
        v-model="selectedTipe"
        @change="this.$emit('selectedTipe', this.selectedTipe)"
      >
        <option disabled>Усі типи транспорту</option>
        <option value="passengerCar">Легкові</option>
        <option value="truck">Вантажівки</option>
      </select>
    </div>
    <div>
      <!-- якщо вибраний тип кузова, тоді відображається блок -->
      <div v-if="selectedTipe">
        <p>Тип кузова</p>
        <select v-model="selectedBody" @change="selectedOption">
          <option
            v-for="(carType, index) in listCars"
            :key="index"
            :value="carType"
          >
            {{ carType }}
          </option>
        </select>
      </div>
      <div>
        <p>Марка</p>
        <select v-model="selectedBrand" @change="selectedOption">
          <option
            v-for="(brand, index) in listBrandCars"
            :key="index"
            :value="brand"
          >
            {{ brand }}
          </option>
        </select>
      </div>
      <div>
        <p>Модель</p>
        <select v-model="selectedModel" @change="selectedOption">
          <option
            v-for="(model, index) in listModelCars"
            :key="index"
            :value="model"
          >
            {{ model }}
          </option>
        </select>
      </div>
      <div>
        <div>
          <p>Рік</p>
          <select
            v-model="yearFrom"
            class="selectYear"
            @change="selectedOption"
          >
            <option disabled value="">Від</option>
            <option v-for="year in yearsCars" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <select v-model="yearTo" class="selectYear" @change="selectedOption">
            <option disabled value="">До</option>
            <option v-for="year in yearsCars" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateYears } from "./utils";
export default {
  name: "SelectType",
  data() {
    return {
      selectedTipe: null,
      selectedBody: null,
      selectedBrand: null,
      selectedModel: null,
      yearFrom: null,
      yearTo: null,
    };
  },

  props: {
    listCars: {
      type: Array,
      default: () => [],
    },
    listBrandCars: {
      type: Object,
      default: () => ({}),
    },
    listModelCars: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    yearsCars() {
      return generateYears();
    },
  },
  methods: {
    selectedOption() {
      let selected = {
        selectedTipe: this.selectedTipe,
        selectedBody: this.selectedBody,
        selectedBrand: this.selectedBrand,
        selectedModel: this.selectedModel,
        yearFrom: this.yearFrom,
        yearTo: this.yearTo,
      };
      this.$emit("selectedOptions", selected);
    },
  },
};
</script>

<style lang="css" scoped>
.wrapper__select {
  width: 100%;
  height: 500px;
}
select {
  width: 50%;
}
option {
  width: 30%;
}
.selectYear {
  width: 20%;
}
</style>