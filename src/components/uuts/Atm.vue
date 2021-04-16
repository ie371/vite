<template>
  <div class="z-20">
    <div class="w-full text-center text-blue-600 font-bold">
      <input
        class="w-full border-t-0 border-l-0 border-r-0"
        v-model="project.data.name"
        type="text"
      />
    </div>

    <div class="flex justify-between items-center mt-3">
      <div class="w-5/6">
        <label>Системный блок</label>
        <select v-model="project.atm.tipSB" class="w-full">
          <option
            v-for="item in opt.items_sb"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/6 pl-1 text-center">
        <label class="pl-0">Изм. линии</label>
        <input
          type="checkbox"
          v-model.number="project.data.IL"
          class="h-6 w-6 m-auto"
        />
      </div>
    </div>

    <div class="mt-3">
      <div class="w-full">
        <label>Платы расширения</label>
        <multiselect
          v-model="project.atm.pltr"
          :options="opt.items_pltr"
          mode="tags"
          placeholder="Платы расширения"
          :searchable="false"
          :hideSelected="false"
          :maxHeight="300"
        ></multiselect>
      </div>
    </div>
    <div class="w-full text-left text-blue-600 font-bold mt-4">
      <span>Кабельные проводки</span>
    </div>
    <div class="flex w-full justify-start mt-2 items-center">
      <div class="w-1/4">
        <label>ВРУ=>СБ</label>
        <input class="w-full" v-model="project.atm.lvru" />
      </div>
      <div class="w-1/4 pl-1">
        <label>СБ=>ИМ ЦО</label>
        <input class="w-full" v-model="project.atm.lsbo" />
      </div>
      <div class="w-1/4 pl-1">
        <label>СБ=>ИМ ГВС</label>
        <input class="w-full" v-model="project.atm.lsbg" />
      </div>
      <div class="w-1/4 pl-1 text-center">
        <label class="pl-0">Мет. рукав</label>
        <input
          type="checkbox"
          v-model.number="project.atm.met_ruk"
          class="h-6 w-6 m-auto"
        />
      </div>
    </div>
    <div class="w-full text-left text-blue-600 font-bold mt-4">
      <span>Теплоизоляция</span>
    </div>
    <div class="flex w-full justify-start items-end">
      <div class="w-1/2">
        <label>TC</label>
        <select v-model="project.atm.teploiz_ot" class="w-full">
          <option
            v-for="item in opt.teploiz"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/2 px-1">
        <label>ГВС</label>
        <select v-model="project.atm.teploiz_gvs" class="w-full">
          <option
            v-for="item in opt.teploiz"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="w-full text-left text-blue-600 font-bold mt-4">
      <span>Климатология</span>
    </div>
    <div class="flex w-full justify-start items-end">
      <div class="w-1/2">
        <label>Республика, край, область:</label>
        <select v-model="project.atm.region" class="w-full" @change="nasp">
          <option v-for="item in Regions" :value="item.value" :key="item.index">
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/2 px-1">
        <label>Населенный пункт:</label>
        <select
          v-model="project.atm.naspunkt"
          class="w-full"
          :disabled="project.atm.region == 0"
        >
          <option v-for="item in nas_pu" :value="item" :key="item.index">
            {{ item }}
          </option>
        </select>
      </div>
    </div>

    <div class="w-full text-left text-blue-600 font-bold mt-4">
      <span>Схема</span>
    </div>

    <div>
      <img class="object-contain h-48 w-full" :src="img" />
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import Axios from "axios";
import Multiselect from "@vueform/multiselect";
import opt from "../../utils/selects.js";
import Regions from "../../utils/regions.js";

export default {
  name: "Home",
  components: { Multiselect },
  props: {
    project: { type: Object, required: true },
  },
  setup(props) {
    const project = ref(props.project);
    const nas_pu = ref([]);
    const img = ref("./img/0.svg");
    function check_img() {
      let z = 0,
        z1 = 0,
        z2,
        z3,
        z4;
      project.value.ot.isx.sx_ot ? (z2 = 1) : (z2 = 0);
      project.value.gvs.data.tup ? (z4 = 1) : (z4 = 0);
      switch (project.value.data.type) {
        case "o":
          z1 = 10;
          z = z1 + z2;
          z4 = 0;
          break;
        case "g":
          z1 = 20;
          z = z1 + z4;
          break;
        case "og":
          z3 = 0;
          project.value.data.type_gvs == "close" ? (z3 = 0) : "";
          project.value.data.type_gvs == "open" ? (z3 = 1) : "";
          project.value.data.type_gvs == "open_notim_cirk" ? (z3 = 2) : "";
          project.value.data.type_gvs == "open_notim_tup" ? (z3 = 2) : "";
          project.value.data.type_gvs == "1st" ? (z4 = 4) : "";
          project.value.data.type_gvs == "2st" ? (z4 = 5) : "";
          z1 = 3;
          z = "" + z1 + z2 + z3 + z4;
          break;
        default:
          break;
      }
      img.value = "./img/" + z + ".svg";
      // img.value = "../src/assets/img/" + z + ".svg";
    }
    check_img();
    watch(project.value, () => check_img());
    // flex13
    watch(
      () => project.value.ot.isx.t1,
      () => {
        project.value.ot.isx.t1 > 114
          ? (project.value.atm.teploiz_ot = "flex13")
          : "";
      }
    );
    const nasp = () => {
      nas_pu.value = [];
      if (project.value.atm.region != 0) {
        Axios.post("./pdf/project/regions.php", {
          sReg: project.value.atm.region,
        })
          .then((response) => {
            nas_pu.value = response.data;
            project.value.atm.naspunkt = nas_pu.value[0];
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        project.value.atm.naspunkt = "";
      }
    };
    return {
      opt,
      project,
      Regions,
      nasp,
      nas_pu,
      img,
    };
  },
};
</script>
<style >
.multiselect {
  position: relative;
  margin: 0 auto;
  font-size: 0;
}
.multiselect > * {
  font-size: small;
}
.multiselect.is-searchable {
  cursor: auto;
}
.multiselect-input {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 32px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  outline: none;
}
.multiselect-input:before {
  position: absolute;
  right: 12px;
  top: 50%;
  color: #999;
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: "";
  transform: translateY(-50%);
  transition: transform 0.3s;
}
.is-disabled .multiselect-input {
  background: #f9f9f9;
}
.is-open .multiselect-input {
  border-radius: 3px 3px 0 0;
}
.is-open .multiselect-input:before {
  transform: translateY(-50%) rotate(180deg);
}
.multiselect-placeholder {
  color: #777;
}
.multiselect-tags {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 9px;
  margin-top: 3px;
  flex-wrap: wrap;
  padding-right: 32px;
}
.multiselect-tag {
  background: #306cbb;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 0 0 0 8px;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  cursor: text;
  white-space: nowrap;
}
.multiselect-tag i {
  cursor: pointer;
}
.multiselect-tag i:before {
  content: "\D7";
  color: #02142c;
  font-size: 12px;
  font-weight: 700;
  padding: 1px 5px;
  margin-left: 3px;
  display: flex;
  font-style: normal;
}
.multiselect-tag i:hover:before {
  color: #fff;
  /* background: hsla(0, 0%, 100%, 0.2); */
}

.multiselect-options {
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid #e8e8e8;
  margin-top: -1px;
  max-height: 160px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 100;
  background: #fff;
  overflow-x: hidden;
}
.multiselect-option {
  display: flex;
  min-height: 32px;
  padding: 5px 12px;
  box-sizing: border-box;
  color: #222;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-weight: bold;
}
.multiselect-option.is-pointed {
  background: #e6e6e6;
}
.is-multiple .multiselect-option.is-selected,
.is-tags .multiselect-option.is-selected {
  color: #999;
  background: transparent;
}
</style>

