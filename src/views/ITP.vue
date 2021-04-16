<template>
  <div
    class="grid sm:grid-cols-1 gap-6 md:grid-cols-12 xl:grid-cols-10 px-2 z-10"
  >
    <div class="text-sm xl:col-span-2 md:col-span-3">
      <div class=""><Atm :project="project" /></div>
    </div>
    <div class="text-xs px-1 xl:col-span-2 md:col-span-3">
      <Nagr :project="project" />
    </div>
    <!-- <div class="text-xs xl:col-span-2 md:col-span-3">
      <Gvs :project="project" @no_gvs="no_gvs" />
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
              {{ name_pr }}
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
    </div> -->
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import Atm from "../components/itp/Atm.vue";
import Nagr from "../components/itp/Nagr.vue";
import Gvs from "../components/uuts/Gvs.vue";
import But from "../components/uuts/But.vue";
import { OBJ_ITP } from "../utils/classITP";

export default {
  name: "Home",
  components: {
    Atm,
    Nagr,
    Gvs,
    But,
  },

  setup() {
    const store = useStore();
    const rekv_store = ref(store.state.Rekv);
    const data_store = computed(() => store.state.UuTs.DATA);
    const ot_store = computed(() => store.state.UuTs.ot);
    const gvs_store = computed(() => store.state.UuTs.gvs);
    const atm_store = computed(() => store.state.UuTs.atm);
    const dop_store = computed(() => store.state.UuTs.dop);
    const project_store = ref(store.state.UuTs.project);
    const no_pr = ref(true);
    const name_pr = ref(" + ");
    const o = ref(true);
    const g = ref(true);

    if (!project_store.value.OBJ_ITP) {
      const add_class = ref(
        new OBJ_ITP({
          DATA: data_store.value,
          OT: ot_store.value,
          GVS: gvs_store.value,
          ATM: atm_store.value,
          DOP: dop_store.value,
        })
      );
      project_store.value.OBJ_ITP = add_class.value;
    }
    const project = ref(project_store.value.OBJ_ITP);

    // function check() {
    //   switch (project.value.data.type) {
    //     case "o":
    //       o.value ? (no_pr.value = true) : (no_pr.value = false);
    //       name_pr.value = "ЦО";
    //       break;
    //     case "g":
    //       g.value ? (no_pr.value = true) : (no_pr.value = false);
    //       name_pr.value = "ГВС";
    //       break;
    //     case "og":
    //       o.value || g.value ? (no_pr.value = true) : (no_pr.value = false);
    //       project.value.data.type_gvs == "close"
    //         ? (name_pr.value = "ЦО + ГВС")
    //         : "";
    //       project.value.data.type_gvs == "open"
    //         ? (name_pr.value = "ЦО + ГВС")
    //         : "";
    //       project.value.data.type_gvs == "open_notim_cirk"
    //         ? (name_pr.value = "TC")
    //         : "";
    //       project.value.data.type_gvs == "open_notim_tup"
    //         ? (name_pr.value = "TC")
    //         : "";
    //       project.value.data.type_gvs == "1st" ? (name_pr.value = "ИТП") : "";
    //       project.value.data.type_gvs == "2st" ? (name_pr.value = "ИТП") : "";

    //       break;
    //     default:
    //       no_pr.value = true;
    //       break;
    //   }

    //   let otop;
    //   let gvs;
    //   project.value.ot.isx.q > 0
    //     ? project.value.ot.uu.di1 != 0 || project.value.ot.uu.di1
    //       ? (otop = "o")
    //       : (otop = "")
    //     : (otop = "");
    //   project.value.gvs.isx.q > 0
    //     ? project.value.gvs.uu.di1 != 0 || project.value.gvs.uu.di1
    //       ? (gvs = "g")
    //       : (gvs = "")
    //     : (gvs = "");

    //   project.value.data.type = otop + gvs;

    //   project.value.data.type != "og"
    //     ? (project.value.data.type_gvs = "close")
    //     : "";
    //   // console.log("PROJECT WAS CHANGED!", project.value);
    // }
    // check();
    // watch(project.value, () => {
    //   check();
    // });
    // const no_co = (a) => (o.value = a);
    // const no_gvs = (a) => (g.value = a);
    // watch([project.value, o, g], () => check());

    // const openPDF = () => {
    //   let f = document.getElementById("formTS");
    //   f.action = "./pdf/project/pr.php";
    //   let a = document.createElement("input");
    //   a.type = "hidden";
    //   a.value = JSON.stringify(project.value);
    //   a.name = "A";
    //   f.appendChild(a);
    //   let r = document.createElement("input");
    //   r.type = "hidden";
    //   r.value = JSON.stringify(rekv_store.value.R);
    //   r.name = "R";
    //   f.appendChild(r);
    //   f.submit();
    //   f.removeChild(a);
    //   f.removeChild(r);
    // };
    // const openKP = () => {
    //   let f = document.getElementById("formTS");
    //   f.action = "./pdf/project/kp.php";
    //   let a = document.createElement("input");
    //   a.type = "hidden";
    //   a.value = JSON.stringify(project.value);
    //   a.name = "A";
    //   f.appendChild(a);
    //   let r = document.createElement("input");
    //   r.type = "hidden";
    //   r.value = JSON.stringify(rekv_store.value);
    //   r.name = "R";
    //   f.appendChild(r);
    //   f.submit();
    //   f.removeChild(a);
    //   f.removeChild(r);
    // };

    return {
      project,
      // no_co,
      // no_gvs,
      // no_pr,
      // name_pr,
      // openPDF,
      // openKP,
    };
  },
};
</script>
<style>
</style>