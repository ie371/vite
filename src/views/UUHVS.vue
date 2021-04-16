<template>
  <div
    class="grid sm:grid-cols-1 gap-6 md:grid-cols-12 xl:grid-cols-10 px-2 z-10"
  >
    <div class="text-sm xl:col-span-2 md:col-span-3">
      <div class=""><Atm :project="project" /></div>
    </div>
    <div class="text-xs px-1 xl:col-span-2 md:col-span-3">
      <Hvs :project="project" @no_hvs="no_hvs" />
    </div>

    <div class="text-xs xl:col-span-2 md:col-span-3">
      <div class="p-3">
        <div class="flex justify-center items-baseline flex-wrap">
          <div class="flex m-2">
            <button
              type="button"
              @click="openPDF()"
              :disabled="no_pr"
              class="w-28 h-10 text-base rounded-r-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-700 hover:text-blue-100 bg-blue-200 text-blue-700 duration-200 ease-in-out transition disabled:opacity-50"
            >
              ХВС
            </button>

            <button
              type="button"
              @click="openKP"
              :disabled="no_pr"
              class="w-28 h-10 text-base rounded-l-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-green-700 hover:text-green-100 bg-green-200 text-green-700 duration-200 ease-in-out transition disabled:opacity-50"
            >
              КП
            </button>
          </div>
        </div>
      </div>

      <But :project="project" />
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import Atm from "../components/uuhvs/Atm.vue";
import Hvs from "../components/uuhvs/Hvs.vue";
import But from "../components/uuhvs/But.vue";
import { OBJ_HVS } from "../utils/classHVS";

export default {
  name: "Home",
  components: {
    Atm,
    Hvs,
    But,
  },

  setup() {
    const store = useStore();
    const rekv_store = ref(store.state.Rekv);
    const data_store = computed(() => store.state.UuHvs.DATA);
    const hvs_store = computed(() => store.state.UuHvs.hvs);
    const atm_store = computed(() => store.state.UuHvs.atm);
    const dop_store = computed(() => store.state.UuHvs.dop);
    const project_store = ref(store.state.UuHvs.project);
    const no_pr = ref(true);
    const h = ref(true);
    const no_hvs = (a) => (h.value = a);

    if (!project_store.value.OBJ_HVS) {
      const add_class = ref(
        new OBJ_HVS({
          DATA: data_store.value,
          HVS: hvs_store.value,
          ATM: atm_store.value,
          DOP: dop_store.value,
        })
      );
      project_store.value.OBJ_HVS = add_class.value;
    }
    const project = ref(project_store.value.OBJ_HVS);

    function check() {
      h.value ? (no_pr.value = true) : (no_pr.value = false);
    }
    check();

    watch(project.value, () => check());
    watch([project.value, h], () => check());
    const openPDF = () => {
      let f = document.getElementById("formTS");
      f.action = "./pdf/project/pr_hvs.php";
      let a = document.createElement("input");
      a.type = "hidden";
      a.value = JSON.stringify(project.value);
      a.name = "A";
      f.appendChild(a);
      let r = document.createElement("input");
      r.type = "hidden";
      r.value = JSON.stringify(rekv_store.value.R);
      r.name = "R";
      f.appendChild(r);
      f.submit();
      f.removeChild(a);
      f.removeChild(r);
    };
    const openKP = () => {
      let f = document.getElementById("formTS");
      f.action = "./pdf/project/kp.php";
      let a = document.createElement("input");
      a.type = "hidden";
      a.value = JSON.stringify(project.value);
      a.name = "A";
      f.appendChild(a);
      let r = document.createElement("input");
      r.type = "hidden";
      r.value = JSON.stringify(rekv_store.value);
      r.name = "R";
      f.appendChild(r);
      f.submit();
      f.removeChild(a);
      f.removeChild(r);
    };
    return { project, no_hvs, no_pr, openPDF, openKP };
  },
};
</script>
<style>
</style>