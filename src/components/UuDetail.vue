<template>
  <div class="detail">
    <div class="recipe" v-if="uu">
      <h2>{{ uu.title }}</h2>
      <a href="#" @click.prevent="toggle">{{
        visible ? "скрыть" : "показать"
      }}</a>
      <p v-if="visible">{{ uu.desc }}</p>
      <button class="btn remove" @click="$emit('remove', uu.id)">
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
import { useToggle } from "../composition/toggle";
import { watch } from "vue";
export default {
  props: {
    uu: Object,
  },
  setup(props) {
    const { visible, toggle } = useToggle();
    watch(
      () => props.uu,
      () => {
        visible.value = false;
      }
    );
    return { visible, toggle };
  },
};
</script>

<style>
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.recipe p {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.recipe a,
.recipe h2 {
  margin-bottom: 0.5rem;
}
</style>
