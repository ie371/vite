<template>
  <div class="grid sm:grid-cols-1 gap-4 md:grid-cols-4 px-2">
    <div>
      Отопление
      <div class="text-sm">{{ project.rash.rashod_ot }}</div>
      ГВС
      <div class="text-sm">{{ project.uu_gvs }}</div>
    </div>
    <div class="text-xs px-1"><UuCo :project="project" /></div>
    <div class="text-xs"><UuGvs :project="project" /></div>
  </div>
</template>

<script>
import { ref, reactive, watch, computed } from "vue";
import { useStore } from "vuex";
import UuCo from "../components/UuCo.vue";
import UuGvs from "../components/UuGvs.vue";
import { OBJ } from "../utils/clasess";

export default {
  name: "Home",
  components: {
    UuCo,
    UuGvs,
  },

  setup() {
    const store = useStore();
    const data_store = computed(() => store.state.Isx.DATA);
    const ot_store = computed(() => store.state.Isx.ot);
    const gvs_store = computed(() => store.state.Isx.gvs);
    const project_store = ref(computed(() => store.state.Isx.project));

    if (!project_store.value.OBJ) {
      const add_class = ref(
        new OBJ({
          DATA: data_store.value,
          OT: ot_store.value,
          GVS: gvs_store.value,
        })
      );
      project_store.value.OBJ = add_class.value;
    }
    const project = ref(project_store.value.OBJ);
    watch(project.value, () => {
      console.log("PROJECT WAS CHANGED!", project.value);
    });
    return { project };
  },
};
</script>
<style>
</style>