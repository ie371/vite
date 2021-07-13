<template>
  <div
    class="grid sm:grid-cols-1 gap-6 md:grid-cols-12 xl:grid-cols-12 px-6 z-10"
  >
    <div class="text-sm xl:col-span-3 md:col-span-3">
      <Nagr :project="project" />
    </div>
    <div class="text-sm px-1 xl:col-span-3 md:col-span-3">
      <In :project="project" />
    </div>
    <div class="text-sm xl:col-span-3 md:col-span-3">
      <Otop :project="project" />
    </div>
    <div class="text-sm xl:col-span-3 md:col-span-3">
      <!-- <Gvs :project="project" /> -->
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import Atm from "../components/itp/Atm.vue";
import Nagr from "../components/itp/Nagr.vue";
import In from "../components/itp/In.vue";
import Otop from "../components/itp/Otop.vue";
import Gvs from "../components/itp/Gvs.vue";
import { OBJ_ITP } from "../utils/classITP";

export default {
  name: "Home",
  components: {
    Atm,
    Nagr,
    In,
    Otop,
    Gvs,
  },

  setup() {
    const store = useStore();
    const data_store = computed(() => store.state.ITP.data);
    const isx_store = computed(() => store.state.ITP.isx);
    const in_store = computed(() => store.state.ITP.in);
    const ot_store = computed(() => store.state.ITP.ot);
    const vent_store = computed(() => store.state.ITP.vent);
    const gvs_store = computed(() => store.state.ITP.gvs);
    const project_store = ref(store.state.ITP.project);

    if (!project_store.value.OBJ_ITP) {
      const add_class = ref(
        new OBJ_ITP({
          DATA: data_store.value,
          ISX: isx_store.value,
          IN: in_store.value,
          OT: ot_store.value,
          VENT: vent_store.value,
          GVS: gvs_store.value,
        })
      );
      project_store.value.OBJ_ITP = add_class.value;
    }
    const project = ref(project_store.value.OBJ_ITP);

    // watch(project.value, () => {
    //   console.log(project.value);
    // });

    return {
      project,
    };
  },
};
</script>
<style>
</style>