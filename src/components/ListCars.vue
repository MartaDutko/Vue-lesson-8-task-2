<template>
  <div class="block__cars">
    <div class="block-car" v-for="car in listCars" :key="car.id">
      <div class="block-img">
        <a :href="car.link">
          <img :src="car.srcImg" />
        </a>
      </div>

      <div class="block_description">
        <p class="model-car">{{ car.model }}</p>
        <p class="price-car">{{ car.price }}</p>
        <div class="block-technical-characteristic">
          <div class="block-characteristic">
            <p>{{ car.mileage }}</p>
            <p>{{ car.engine }}</p>
          </div>
          <div class="block-characteristic">
            <p>{{ car.city }}</p>
            <p>{{ car.transmission }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCars",
  props: {
    listCars: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.block__cars {
  width: 100%;
}
.block-car {
  width: 100%;
  min-height: 270px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid grey;
}
.block-img {
  width: 30%;
}
img {
  width: 100%;
}
.block_description {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
p {
  margin: 0;
}
.model-car{
    font-weight: 600;
    color: rgb(105, 105, 242)
}
.price-car{
    font-size: 20px;
    color: green;
}
.block-technical-characteristic{
    display: flex;
    gap: 50px;
}
.block-characteristic{
    text-align: left;
}
</style>