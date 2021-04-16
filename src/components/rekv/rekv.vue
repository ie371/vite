<template>
  <div class="z-50">
    <!-- Реквизиты проекта-->
    <div>
      <div class="w-full text-center text-blue-800 font-bold">
        <span>Реквизиты проекта</span>
      </div>
      <div class="flex justify-between mt-3">
        <div class="w-full">
          <label>Название проекта</label>
          <input
            class="w-full"
            v-model="rekv_data.R.name"
            list="name_prj_list"
          />
          <datalist id="name_prj_list">
            <option>
              Узел коммерческого учёта тепловой энергии, теплоносителя
            </option>
            <option>
              Узел технологического учёта тепловой энергии, теплоносителя
            </option>
            <option>
              Индивидуальный узел учета тепловой энергии, теплоносителя
            </option>
            <option>Узел коммерческого учёта холодного водоснабжения</option>
          </datalist>
        </div>
      </div>
      <!-- Название проектной организации-->
      <div class="flex w-full justify-between mt-2">
        <div class="w-2/3">
          <label>Название проектной организации</label>
          <input class="w-full" v-model="rekv_data.R.name_ooo" />
        </div>
        <div class="w-1/3 pl-1">
          <label>Шифр</label>
          <input class="w-full" v-model="rekv_data.R.cod" />
        </div>
      </div>
      <!-- 1111111-->
      <div class="flex w-full justify-start items-end mt-2">
        <div class="w-1/3">
          <label>Должность 1</label>
          <input class="w-full" v-model="rekv_data.R.post1" list="posts" />
        </div>
        <div class="w-1/3 px-1">
          <label>Фамилия 1</label>
          <input class="w-full" v-model="rekv_data.R.surname1" />
        </div>
        <div class="w-1/3">
          <file-input v-model="file" name="sign1" isImage />
        </div>
      </div>
      <!-- 2222222-->
      <div class="flex w-full justify-start items-end mt-2">
        <div class="w-1/3">
          <label>Должность 2</label>
          <input class="w-full" v-model="rekv_data.R.post2" list="posts" />
        </div>
        <div class="w-1/3 px-1">
          <label>Фамилия 2</label>
          <input class="w-full" v-model="rekv_data.R.surname2" />
        </div>
        <div class="w-1/3">
          <file-input v-model="file" name="sign2" isImage />
        </div>
      </div>
      <!-- 33333333333-->
      <div class="flex w-full justify-start items-end mt-2">
        <div class="w-1/3">
          <label>Должность 3</label>
          <input class="w-full" v-model="rekv_data.R.post3" list="posts" />
        </div>
        <div class="w-1/3 px-1">
          <label>Фамилия 3</label>
          <input class="w-full" v-model="rekv_data.R.surname3" />
        </div>
        <div class="w-1/3">
          <file-input v-model="file" name="sign3" isImage />
        </div>
      </div>
      <!-- 444444444-->
      <div class="flex w-full justify-start items-end mt-2">
        <div class="w-1/3">
          <label>Должность 4</label>
          <input class="w-full" v-model="rekv_data.R.post4" list="posts" />
        </div>
        <div class="w-1/3 px-1">
          <label>Фамилия 4</label>
          <input class="w-full" v-model="rekv_data.R.surname4" />
        </div>
        <div class="w-1/3">
          <file-input v-model="file" name="sign4" isImage />
        </div>
      </div>
      <!-- 555555555-->
      <div class="flex w-full justify-start items-end mt-2">
        <div class="w-1/3">
          <label>Должность 5</label>
          <input class="w-full" v-model="rekv_data.R.post5" list="posts" />
        </div>
        <div class="w-1/3 px-1">
          <label>Фамилия 5</label>
          <input class="w-full" v-model="rekv_data.R.surname5" />
        </div>
        <div class="w-1/3">
          <file-input v-model="file" name="sign5" isImage />
        </div>
      </div>
      <datalist id="posts">
        <option>Разраб.</option>
        <option>ГИП</option>
        <option>Проверил</option>
        <option>Н.контроль</option>
      </datalist>
    </div>

    <!-- Реквизиты объекта-->
    <div class="mt-6">
      <div class="w-full text-center text-blue-800 font-bold">
        <span>Реквизиты объекта</span>
      </div>

      <div class="flex w-full justify-between mt-2">
        <div class="w-2/3">
          <label>Адрес</label>
          <input class="w-full" v-model="rekv_data.R.adress" />
        </div>
        <div class="w-1/3 pl-1">
          <label>Тип объекта</label>
          <input
            class="w-full"
            v-model="rekv_data.R.tip_obj"
            list="tip_obj_list"
          />
        </div>
        <datalist id="tip_obj_list">
          <option>Многоквартирный жилой дом</option>
          <option>Школа</option>
          <option>Детский сад</option>
          <option>Административное здание</option>
        </datalist>
      </div>

      <div class="flex w-full justify-between mt-2">
        <div class="w-2/3">
          <label>Заказчик</label>
          <input class="w-full" v-model="rekv_data.R.zakazchik" />
        </div>
        <div class="w-1/3 pl-1">
          <label>Абонент</label>
          <input class="w-full" v-model="rekv_data.R.abonent" />
        </div>
      </div>

      <div class="flex w-full justify-between mt-2">
        <div class="w-2/3">
          <label>Источник теплоснабжения</label>
          <input class="w-full" v-model="rekv_data.R.istochnik" />
        </div>
        <div class="w-1/3 pl-1">
          <label>Ресурсосн. компания</label>
          <input class="w-full" v-model="rekv_data.R.resurscomp" />
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="w-full text-center text-blue-800 font-bold">
        <span>Сохранение настроек</span>
      </div>
      <div class="flex w-full justify-end items-end mt-2">
        <div class="w-1/2 pl-3 flex">
          <button
            type="button"
            @click="savePr"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
        <div class="w-1/3 flex justify-end">
          <file-input v-model="sfile" @change="input_json" name="" isText />
        </div>

        <div class="w-1/6 pr-3 flex justify-end">
          <button
            type="button"
            @click="loadPr"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Load
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import FileInput from "../filePost.vue";
import { saveAs } from "file-saver";
import { OBJ_TS } from "../../utils/classTS";
import { OBJ_HVS } from "../../utils/classHVS";

export default {
  name: "Rekvizit",
  components: { FileInput },
  props: {},
  setup() {
    const store = useStore();
    const rekv_data = ref(store.state.Rekv);
    const project_store_ts = ref(store.state.UuTs.project);
    const project_store_hvs = ref(store.state.UuHvs.project);
    const file = ref(null);
    const sfile = ref(null);
    const load = ref(null);

    const savePr = () => {
      let nam;
      rekv_data.value.R.adress
        ? (nam = rekv_data.value.R.adress)
        : (nam = "project");

      let join = {
        uuto: store.state.UuTs.project,
        uuhvs: store.state.UuHvs.project,
        rekv: store.state.Rekv,
      };
      let obj = JSON.stringify(join);
      var file = new File([obj], nam + ".txt", {
        type: "text/plain;charset=utf-8",
      });
      saveAs(file);
    };
    const input_json = () => {
      if (sfile.value.file) {
        const reader = new FileReader();
        reader.readAsText(sfile.value.file);
        reader.onload = () => (load.value = reader.result);
      }
    };

    const loadPr = () => {
      if (load.value) {
        let obj = JSON.parse(load.value);
        rekv_data.value.R = obj.rekv.R;

        if (!project_store_ts.value.OBJ_TS) {
          const add_class = ref(
            new OBJ_TS({
              DATA: obj.uuto.OBJ_TS.data,
              OT: obj.uuto.OBJ_TS.ot,
              GVS: obj.uuto.OBJ_TS.gvs,
              ATM: obj.uuto.OBJ_TS.atm,
              DOP: obj.uuto.OBJ_TS.dop,
            })
          );
          project_store_ts.value.OBJ_TS = add_class.value;
        } else {
          project_store_ts.value.OBJ_TS.data = obj.uuto.OBJ_TS.data;
          project_store_ts.value.OBJ_TS.ot = obj.uuto.OBJ_TS.ot;
          project_store_ts.value.OBJ_TS.gvs = obj.uuto.OBJ_TS.gvs;
          project_store_ts.value.OBJ_TS.atm = obj.uuto.OBJ_TS.atm;
          project_store_ts.value.OBJ_TS.dop = obj.uuto.OBJ_TS.dop;
        }
        if (!project_store_hvs.value.OBJ_HVS) {
          const add_class = ref(
            new OBJ_HVS({
              DATA: obj.uuhvs.OBJ_HVS.data,
              HVS: obj.uuhvs.OBJ_HVS.hvs,
              ATM: obj.uuhvs.OBJ_HVS.atm,
              DOP: obj.uuhvs.OBJ_HVS.dop,
            })
          );
          project_store_hvs.value.OBJ_HVS = add_class.value;
        } else {
          project_store_hvs.value.OBJ_HVS.data = obj.uuhvs.OBJ_HVS.data;
          project_store_hvs.value.OBJ_HVS.hvs = obj.uuhvs.OBJ_HVS.hvs;
          project_store_hvs.value.OBJ_HVS.atm = obj.uuhvs.OBJ_HVS.atm;
          project_store_hvs.value.OBJ_HVS.dop = obj.uuhvs.OBJ_HVS.dop;
        }

        load.value = null;
        sfile.value = null;
      }
    };

    return { rekv_data, file, savePr, loadPr, sfile, input_json };
  },
};
</script>