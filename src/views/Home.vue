<template>
  <div class="">
    <!-- <Modal v-if="visible" :onAdd="addUu" :sel="selected" @closepopup="toggle" /> -->
    <!-- <div class="row">
      <div class="col-2">
        <div class="form-group">
          <label for="s">choise system</label>
          <select
            class="form-control"
            id="s"
            v-model="selected"
            @change="toggle"
          >
            <option v-for="(item, i) in list_uu" :key="i" :value="item">
              {{ item.text }}
            </option>
          </select>
        </div>
      </div> -->
    <!-- <div class="col-sm">
        <UuList @select="selectUu" :uus="uus" />
      </div>
      <div class="col-sm">
        <UuDetail :uu="current" @remove="removeUu" />
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { ref, reactive } from "vue";
// import Modal from "../components/modal.vue";
// // import AddUu from "@/components/AddUu";
// import UuDetail from "../components/UuDetail.vue";
// import UuList from "../components/UuList.vue";
// import { useArrayUu } from "../composition/uus";
// import { useToggle } from "../composition/toggle";

export default {
  name: "Home",
  components: {
    // Modal,
    // UuList,
    // UuDetail,
  },

  setup() {
    return {};
  },
};
</script>
<style>
</style>