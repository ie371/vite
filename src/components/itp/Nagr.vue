<template>
  <div>
    <div class="p-1 m-3">
      <button
        type="button"
        @click="openPDF()"
        class="
          w-full
          h-10
          text-base
          hover:scale-110
          focus:outline-none
          flex
          justify-center
          px-4
          py-2
          rounded
          font-bold
          cursor-pointer
          hover:bg-blue-700
          hover:text-blue-100
          bg-blue-200
          text-blue-700
          duration-200
          ease-in-out
          transition
          disabled:opacity-50
        "
      >
        PDF
      </button>
    </div>

    <div class="flex pb-2 justify-between items-end">
      <div class="w-1/6 pl-1">
        <label>t1, C</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.isx.t1"
          type="number"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>t2, C</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.isx.t2"
          type="number"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>t1лето, C</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.isx.t1_l"
          type="number"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>t2лето, C</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.isx.t2_l"
          type="number"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>p1, мвст</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.isx.p1"
          type="number"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>p2, мвст</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.isx.p2"
          type="number"
        />
      </div>
    </div>

    <div class="w-full text-left text-blue-600 font-bold px-2 mt-2">
      <span>Климатология</span>
    </div>
    <div class="flex w-full justify-start items-end px-2">
      <div class="w-1/2">
        <label>Республика, край, область:</label>
        <select v-model="project.data.region" class="w-full" @change="nasp">
          <option v-for="item in Regions" :value="item.value" :key="item.index">
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/2 px-1">
        <label>Населенный пункт:</label>
        <select
          v-model="project.data.naspunkt"
          class="w-full"
          :disabled="project.data.region == 0"
        >
          <option v-for="item in nas_pu" :value="item" :key="item.index">
            {{ item }}
          </option>
        </select>
      </div>
    </div>

    <div class="border border-gray-300 rounded-md p-2 pt-0 mb-2 mt-3">
      <!-- -------Отопление------------ -->
      <div class="flex w-full justify-start items-end mt-1">
        <div class="w-1/6 pl-2">
          <button
            type="button"
            @click="add('o')"
            class="
              focus:outline-none
              hover:text-blue-600
              text-green-500 text-2xl
              font-semibold
              pt-0
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div class="w-1/4 text-pink-700 font-bold pb-1">
          <input
            class="w-full appearance-none border-0"
            v-model="project.ot.data.name_sys"
            type="text"
          />
        </div>

        <div class="w-1/6 text-left pb-1 pl-1">
          <label>t11, C</label>
          <input
            class="w-full appearance-none"
            v-model.number="project.isx.t11"
            type="number"
          />
        </div>
        <div class="w-1/6 pl-1 text-left pb-1">
          <label>t21, C</label>
          <input
            class="w-full appearance-none"
            v-model.number="project.isx.t21"
            type="number"
          />
        </div>
        <div class="w-1/4 text-left pb-1 pl-1"></div>
      </div>

      <div class="flex w-full items-end" v-for="(item, i) in project.ot_arr">
        <div class="flex 11/12 justify-between">
          <div class="w-1/5">
            <label>Q, Гкал/ч</label>
            <input
              class="w-full appearance-none"
              v-model.number="item.q"
              type="number"
              step="0.0000001"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="8"
            />
          </div>
          <div class="w-4/5 pl-1 pb-1">
            <label>название</label>
            <input class="w-full" v-model="item.name" type="text" />
          </div>
        </div>
        <div class="w-1/12 text-left pl-1 text-red-500">
          <button
            type="button"
            @click="remove('o', item.id)"
            class="focus:outline-none hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- -------Вентиляция------------ -->
      <div class="flex w-full justify-start items-end pt-3">
        <div class="w-1/6 pl-2">
          <button
            type="button"
            @click="add('v')"
            class="
              focus:outline-none
              hover:text-blue-600
              text-green-500 text-2xl
              font-semibold
              pt-0
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div class="w-1/2 text-pink-700 font-bold pb-1">
          <input
            class="w-full appearance-none border-0"
            v-model="project.vent.data.name_sys"
            type="text"
          />
        </div>
      </div>
      <div class="pb-1 border-gray-300">
        <div
          class="flex w-full items-end"
          v-for="(item, i) in project.vent_arr"
        >
          <div class="flex 11/12 justify-between">
            <div class="w-1/5">
              <label>Q, Гкал/ч</label>
              <input
                class="w-full appearance-none"
                v-model.number="item.q"
                type="number"
                step="0.0000001"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="8"
              />
            </div>
            <div class="w-4/5 pl-1 pb-1">
              <label>название</label>
              <input class="w-full" v-model="item.name" type="text" />
            </div>
          </div>
          <div class="w-1/12 text-left pl-1 text-red-500">
            <button
              type="button"
              @click="remove('v', item.id)"
              class="focus:outline-none hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="border border-gray-300 rounded-md p-2 pt-0">
      <div class="flex w-full justify-start items-end">
        <div class="w-1/6 pl-2">
          <button
            type="button"
            @click="add('g')"
            class="
              focus:outline-none
              hover:text-blue-600
              text-green-500 text-2xl
              font-semibold
              pt-0
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div class="w-1/4 text-pink-700 font-bold text-left pb-1">
          <input
            class="w-full appearance-none border-0"
            v-model="project.gvs.data.name_sys"
            type="text"
          />
        </div>

        <div class="w-1/5 pl-1 pb-1">
          <label>Кчн</label>
          <input
            class="w-full appearance-none"
            v-model.number="project.isx.kchn"
            type="number"
          />
        </div>
        <div class="w-1/5 pl-1 pb-1">
          <label>t3, C</label>
          <input
            class="w-full appearance-none"
            v-model.number="project.isx.t3"
            type="number"
          />
        </div>
        <div class="w-1/5 pl-1 pb-1">
          <label>t4, C</label>
          <input
            class="w-full appearance-none"
            v-model.number="project.isx.t4"
            type="number"
          />
        </div>
      </div>

      <div
        class="flex justify-between items-end mt-1"
        v-for="(item, i) in project.gvs_arr"
      >
        <div class="flex w-11/12">
          <div class="w-1/3">
            <label>Qmax, Гкал/ч</label>
            <input
              class="w-full appearance-none"
              v-model.number="item.q"
              v-on:input="qgvs('qm', item.id)"
              type="number"
              step="0.0000001"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="8"
            />
          </div>
          <div class="w-1/3 pl-1">
            <label>Qs, Гкал/ч</label>
            <input
              class="w-full appearance-none"
              v-model.number="item.qs"
              v-on:input="qgvs('qs', item)"
              type="number"
              step="0.0000001"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="8"
            />
          </div>
          <div class="w-5/6 pl-1 pb-1">
            <label>название</label>
            <input class="w-full" v-model="item.name" type="text" />
          </div>
        </div>
        <div class="flex w-1/12">
          <div class="w-1/6 pl-1 text-right text-red-600">
            <button
              type="button"
              @click="remove('g', item.id)"
              class="focus:outline-none hover:text-blue-600 text-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import Axios from "axios";
import { rash_co, rash_gvs } from "../../utils/FuncItp.js";
import { useStore } from "vuex";
import Regions from "../../utils/regions.js";
export default {
  name: "Itp",
  components: {},
  props: {
    project: { type: Object, required: true },
  },
  setup(props) {
    const store = useStore();
    const rekv_store = ref(store.state.Rekv);
    const project = ref(props.project);
    const nas_pu = ref([]);

    function check() {
      project.value.rash.ot_sum.q > 0 && project.value.rash.gvs_sum.q > 0
        ? project.value.rash.gvs_sum.q / project.value.rash.ot_sum.q <= 0.2 ||
          project.value.rash.gvs_sum.q / project.value.rash.ot_sum.q > 1
          ? (project.value.gvs.data.sx = 1)
          : (project.value.gvs.data.sx = 2)
        : "";
    }

    const add = (t) => {
      let j;
      switch (t) {
        case "o":
          j = project.value.ot_arr.length;
          project.value.ot_arr.push({
            id: Date.now().toString(),
            name: `Система отопления ${j + 1}`,
            q: null,
            qkvt: null,
            g_set: null,
            g_sys: null,
            tn: null,
            t_set: project.value.isx.t1 + "/" + project.value.isx.t2,
            t_sys: project.value.isx.t11 + "/" + project.value.isx.t21,
          });
          break;
        case "v":
          j = project.value.vent_arr.length;
          project.value.vent_arr.push({
            id: Date.now().toString(),
            name: `Вентиляция ${j + 1}`,
            q: null,
            qkvt: null,
            g_set: null,
            g_sys: null,
            tn: null,
            t_set: project.value.isx.t1 + "/" + project.value.isx.t2,
            t_sys: project.value.isx.t1 + "/" + project.value.isx.t2,
          });
          break;
        case "g":
          j = project.value.gvs_arr.length;
          project.value.gvs_arr.push({
            id: Date.now().toString(),
            name: `ГВС ${j + 1}`,
            q: null,
            qkvt: null,
            qs: null,
            g_set: null,
            g_sys: null,
            g_cirk: null,
            g_set_l: null,
            g_sys_l: null,
            t4: null,
            t_set_z: project.value.isx.t1 + "/" + project.value.isx.t2,
            t_sys_z: project.value.isx.txv_z + "/" + project.value.isx.t3,
            t_set_l: project.value.isx.t1_l + "/" + project.value.isx.t2_l,
            t_sys_l: project.value.isx.txv_l + "/" + project.value.isx.t3,
          });
          break;
        default:
          break;
      }
    };

    const remove = (t, n) => {
      switch (t) {
        case "o":
          project.value.ot_arr.splice(
            project.value.ot_arr.findIndex((r) => r.id == n),
            1
          );
          break;
        case "v":
          project.value.vent_arr.splice(
            project.value.vent_arr.findIndex((r) => r.id == n),
            1
          );
          break;
        case "g":
          project.value.gvs_arr.splice(
            project.value.gvs_arr.findIndex((r) => r.id == n),
            1
          );
          break;
        default:
          break;
      }
    };

    watch(project.value, () => {
      for (let q of project.value.ot_arr.values()) {
        q.q > 100 ? (q.q = q.q / 1000) : "";
        q.g_set = rash_co(q.q, project.value.isx.t1, project.value.isx.t2);
        q.g_sys = rash_co(q.q, project.value.isx.t11, project.value.isx.t21);
      }
      for (let q of project.value.vent_arr.values()) {
        q.q > 100 ? (q.q = q.q / 1000) : "";
        q.g_set = rash_co(q.q, project.value.isx.t1, project.value.isx.t2);
        q.g_sys = q.g_set;
      }

      for (let q of project.value.gvs_arr.values()) {
        q.q > 100 ? (q.q = q.q / 1000) : "";
        q.t_set_z = project.value.isx.t1 + "/" + project.value.isx.t2;
        q.t_sys_z = project.value.isx.t3 + "/" + project.value.isx.txv_z;
        q.t_set_l = project.value.isx.t1_l + "/" + project.value.isx.t2_l;
        q.t_sys_l = project.value.isx.t3 + "/" + project.value.isx.txv_l;
      }
      for (let q of project.value.gvs_arr.values()) {
        q.qs > 100 ? (q.qs = q.qs / 1000) : "";
        let g = rash_gvs(
          q.q,
          q.qs,
          project.value.isx.t3,
          project.value.isx.t4,
          project.value.isx.t1_l,
          project.value.isx.t2_l,
          project.value.isx.txv_z,
          project.value.isx.txv_l,
          project.value.isx.kchn,
          project.value.isx.ktp,
          project.value.gvs.data.sx
        );

        q.g_set = +g.Gset_max_z;
        q.g_sys = +g.Gsys_max_z;
        q.g_set_l = +g.Gset_max_l;
        q.g_sys_l = +g.Gsys_max_l;
        q.g_set_ = g.Gset_max_z + "/" + g.Gset_sr_z;
        q.g_sys_ = g.Gsys_max_z + "/" + g.Gsys_sr_z;
        q.g_set_l_ = +g.Gset_max_l + "/" + g.Gset_sr_l;
        q.g_sys_l_ = +g.Gsys_max_l + "/" + g.Gsys_sr_l;
        q.g_cirk = +g.Gsys_circ;
        q.t4 = +project.value.isx.t4;
      }

      if (+project.value.isx.kchn > 0) {
        project.value.gvs_arr.map((r) =>
          r.q > 0 ? (r.qs = +(r.q / project.value.isx.kchn).toFixed(6)) : ""
        );
      } else {
        project.value.gvs_arr.map((r) => {
          r.q = null;
          r.qs = null;
        });
      }

      check();
    });

    const qgvs = (m, id) => {
      let a = project.value.gvs_arr.findIndex((r) => r.id == id);
      switch (m) {
        case "qm":
          project.value.gvs_arr[a].q > 0
            ? (project.value.gvs_arr[a].qs = +(
                project.value.gvs_arr[a].q / project.value.isx.kchn
              ).toFixed(6))
            : (project.value.gvs_arr[a].qs = null);
          break;
        case "qs":
          project.value.gvs_arr[a].qs > 0
            ? (project.value.gvs_arr[a].qs = +(
                project.value.gvs_arr[a].qs * project.value.isx.kchn
              ).toFixed(6))
            : (project.value.gvs_arr[a].q = null);
          break;
      }
    };

    const openPDF = () => {
      let f = document.getElementById("formTS");
      f.action = "./pdf/project/itp.php";
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
    const nasp = () => {
      nas_pu.value = [];
      if (project.value.data.region != 0) {
        Axios.post("./pdf/project/regions.php", {
          sReg: project.value.data.region,
        })
          .then((response) => {
            nas_pu.value = response.data;
            project.value.data.naspunkt = nas_pu.value[0];
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        project.value.data.naspunkt = "";
      }
    };

    return {
      project,
      add,
      remove,
      qgvs,
      openPDF,
      Regions,
      nasp,
      nas_pu,
    };
  },
};
</script>
