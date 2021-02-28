<template>
  <div>
    <div class="w-full text-center text-blue-800 font-bold">
      <input
        class="w-full outline-none border-none"
        v-model="project.data.name"
        type="text"
      />
    </div>

    <div class="flex justify-between mt-3">
      <div class="w-2/3">
        <label>схема присоединения ГВС</label>
        <select
          v-model="project.data.type_gvs"
          :disabled="no_gvs"
          class="w-full"
          :class="
            no_gvs ? ' text-white bg-gray-500 cursor-not-allowed z-10' : ''
          "
        >
          <option
            v-for="item in opt.sx_ts"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, watch } from "vue";
import opt from "../utils/selects.js";

export default {
  name: "Home",
  components: {},
  props: {
    project: { type: Object, required: true },
  },
  setup(props) {
    const project = ref(props.project);
    const no_gvs = ref(true);

    watch(
      () => project.value.data.type,
      () => {
        project.value.data.type != "og"
          ? (no_gvs.value = true)
          : (no_gvs.value = false);
      }
    );

    return {
      opt,
      project,
      no_gvs,
    };
  },
};
</script>