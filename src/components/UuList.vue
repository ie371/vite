<template>
  <div class="list" :class="{ empty: uus.length == 0 }">
    <div v-if="uus.length">
      <div
        class="uu_item"
        v-for="uu of uus"
        :key="uu.id"
        @click="$emit('select', uu.id)"
      >
        <h2 class="card-title">{{ uu.title }}</h2>
      </div>
    </div>

    <p v-else class="center">Нет рецептов. Добавьте первый</p>
  </div>
</template>

<script>
export default {
  props: {
    uus: {
      type: Array,
    },
  },
};
</script>

<style>
.uu_item {
  border-bottom: 1px solid #eee;
  padding: 1rem;
  transition: 300ms all ease;
  cursor: pointer;
  background: #fff;
}

.empty {
  padding: 1rem;
  background: #fff !important;
}

.card-title {
  padding: 1rem;
  text-align: center;
}

.card:hover {
  background: #eee;
}

.list {
  background: #fffeee;
}
</style>
