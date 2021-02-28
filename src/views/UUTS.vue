<template>
  <div class="grid sm:grid-cols-1 gap-6 md:grid-cols-4 px-2">
    <div>
      <div class="text-sm"><UuAtm :project="project" /></div>
      <!-- DATA
      <div class="text-sm">{{ project.data }}</div>
      rash
      <div class="text-sm">{{ project.rash }}</div>
      Отопление
      <div class="text-sm">{{ project.ot }}</div>
      ГВС
      <div class="text-sm">{{ project.gvs }}</div> -->
    </div>
    <div class="text-xs px-1"><UuCo :project="project" /></div>
    <div class="text-xs"><UuGvs :project="project" /></div>
  </div>
</template>

<script>
import { ref, reactive, watch, computed } from "vue";
import { useStore } from "vuex";
import UuAtm from "../components/UuAtm.vue";
import UuCo from "../components/UuCo.vue";
import UuGvs from "../components/UuGvs.vue";
import { OBJ } from "../utils/clasess";

export default {
  name: "Home",
  components: {
    UuAtm,
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
    // console.log("PROJECT WAS CREATED!", project.value);

    let otop;
    let gvs;
    watch(project.value, () => {
      project.value.ot.isx.q > 0
        ? project.value.ot.uu.di1 != 0 || project.value.ot.uu.di1
          ? (otop = "o")
          : (otop = "")
        : (otop = "");
      project.value.gvs.isx.q > 0
        ? project.value.gvs.uu.di1 != 0 || project.value.gvs.uu.di1
          ? (gvs = "g")
          : (gvs = "")
        : (gvs = "");
      project.value.data.type = otop + gvs;

      project.value.data.type != "og"
        ? (project.value.data.type_gvs = "close")
        : "";
      console.log("PROJECT WAS CHANGED!", project.value);
      // console.log("PROJECT WAS CHANGED!");
    });

    return { project };
  },
};
</script>
<style>
</style>