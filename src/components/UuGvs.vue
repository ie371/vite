<template>
  <div>
    <div class="w-full text-center text-red-800 font-bold">
      <input
        class="w-full outline-none border-none"
        v-model="project.data_gvs.name"
        type="text"
      />
    </div>
    <div class="flex justify-start mt-3">
      <div class="w-1/3">
        <label>Qmax, Гкал/ч</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.q"
          v-on:input="qgvs('qm')"
          type="number"
          step="0.0000001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
      <div class="w-1/3 pl-1">
        <label>Qср, Гкал/ч</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.qs"
          v-on:input="qgvs('qs')"
          type="number"
          step="0.0000001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
    </div>
    <!-- Kcn -->
    <div class="flex justify-start mt-3">
      <div class="w-1/6">
        <label>Кчн</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.Kchn"
          type="number"
          step="0.01"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="4"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>Тхвл</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.txvL"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="4"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>Тхвз</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.txvZ"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="4"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>Кнп</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.knp"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="4"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>Ктп</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.ktp"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="4"
        />
      </div>
      <div class="w-1/6 pl-1">
        <label>beta</label>
        <input
          class="w-full"
          v-model.number="project.isx_gvs.beta"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="4"
        />
      </div>
    </div>
    <!-- Колонки -->
    <div class="flex justify-between mt-2 px-3">
      <div class="w-1/2"></div>
      <div class="w-3/12 pl-1 flex justify-center">
        <span class="text-sm text-red-500 font-bold">T3</span>
      </div>
      <div class="w-3/12 flex justify-center">
        <span class="text-sm text-blue-500 font-bold">T4</span>
      </div>
    </div>
    <!-- температура ГВС-->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12 text-gray-500 text-right">темп.гр. ГВС</div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.isx_gvs.t1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.isx_gvs.t2"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- температура СО-->
    <div class="flex w-full justify-between mt-1">
      <div class="w-1/2 text-gray-500 text-right">темп.гр. т/с лето</div>
      <div class="w-1/4 px-1">
        <input
          class="w-full"
          v-model.number="project.isx_gvs.t1L"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-1/4">
        <input
          class="w-full"
          v-model.number="project.isx_gvs.t2L"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>

    <!-- Давление-->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12 text-gray-500 text-right">давление, мвст</div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.isx_gvs.p1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.isx_gvs.p2"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- Расход -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12 text-gray-500 text-right">Расход, м³/ч</div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.rash.rashod_gvs.G1v"
          type="number"
          step="0.01"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="6"
          readonly
        />
      </div>
      <div class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.rash.rashod_gvs.G2v"
          type="number"
          step="0.01"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="6"
          readonly
        />
      </div>
    </div>
    <!-- Ду ИМ -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-1/2 text-gray-500 text-right">Ду ИМ</div>
      <div class="w-1/4 px-1">
        <select v-model.number="project.uu_gvs.di1" class="w-full">
          <option
            v-for="item in opt.du_im"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/4">
        <select v-model.number="project.uu_gvs.di2" class="w-full">
          <option
            v-for="item in diap_T4.diap"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
    <!-- Скорость -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12 text-gray-500 text-right">Скорость, м/с</div>
      <div class="w-1/4 px-1">
        <input
          v-model="project.gidr.gdr3.V"
          class="w-full"
          :class="Lim1.lim ? 'bg-red-500 text-white' : 'bg-white'"
          type="text"
          disabled
        />
      </div>
      <div class="w-1/4">
        <input
          v-model="project.gidr.gdr4.V"
          class="w-full"
          :class="Lim2.lim ? 'bg-red-500 text-white' : 'bg-white'"
          type="text"
          disabled
        />
      </div>
    </div>
    <!-- тип ИМ -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-1/2 text-gray-500 text-right">тип ИМ</div>
      <div class="w-1/4 px-1">
        <select
          v-model.number="project.uu_gvs.tipIm1"
          class="w-full"
          :class="
            no61.a ? 'bg-red-500 text-white focus:bg-red-600' : 'bg-white'
          "
        >
          <option
            v-for="item in opt.tip_im"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/4">
        <select
          v-model.number="project.uu_gvs.tipIm2"
          class="w-full"
          :class="
            no62.a
              ? 'bg-red-500 text-white focus:bg-red-600'
              : yellow_im
              ? 'bg-yellow-500 text-white focus:bg-yellow-600'
              : ''
          "
        >
          <option
            v-for="item in opt.tip_im"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div></div>
    </div>
    <!-- Ду трубопроводов -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-1/2 text-gray-500 text-right">Ду тр-в</div>
      <div class="w-1/4 px-1">
        <select v-model.number="project.uu_gvs.dut1" class="w-full">
          <option
            v-for="item in diap_tr1"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/4">
        <select v-model.number="project.uu_gvs.dut2" class="w-full">
          <option
            v-for="item in diap_tr2"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
    <!-- Отметки -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-1/2 text-gray-500 text-right">Отметки, мм</div>
      <div class="w-1/4 px-1">
        <input
          class="w-full"
          v-model.number="project.uu_gvs.otmetka_T3"
          type="number"
          step="0.001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-1/4">
        <input
          class="w-full"
          v-model.number="project.uu_gvs.otmetka_T4"
          type="number"
          step="0.001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- ТИП ЛИНИИ-->
    <div class="flex w-full justify-between border-t border-gray-400 pt-2 mt-4">
      <div class="w-1/2 pr-1">
        <label>Тип линии</label>
        <select
          v-model.number="project.uu_gvs.tipL1"
          class="w-full"
          :class="
            modif1.a ? 'bg-red-500 text-white focus:bg-red-600' : 'bg-white'
          "
        >
          <option
            v-for="item in opt.tip_lin"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/2">
        <label>Тип линии</label>
        <select
          v-model.number="project.uu_gvs.tipL2"
          class="w-full"
          :class="
            modif2.a
              ? 'bg-red-500 text-white focus:bg-red-600'
              : yellow_mod
              ? 'bg-yellow-500 text-white focus:bg-yellow-600'
              : ''
          "
        >
          <option
            v-for="item in opt.tip_lin"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
    <!-- фильтр-->
    <div class="flex w-full justify-between mt-1">
      <div class="w-1/2 pr-1">
        <label>фильтр</label>
        <select
          v-model.number="project.uu_gvs.filter"
          :disabled="no_filter"
          class="w-full"
        >
          <option
            v-for="item in opt.tip_filtr"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/3 pt-2">
        <label class="inline-flex items-center mt-3">
          <input type="checkbox" class="h-4 w-4" checked /><span
            class="ml-2 text-base text-gray-700"
            >ОК</span
          >
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, watch } from "vue";
import opt from "../utils/selects.js";
import { podbor, diap_tr } from "../utils/FuncUu.js";
import { speed, no_mod, no_i6, diapT4 } from "../utils/checks.js";

export default {
  name: "Home",
  components: {},
  props: {
    project: { type: Object, required: true },
  },
  setup(props) {
    const project = ref(props.project);
    const du3 = ref(podbor(project.value.rash.rashod_gvs.G1v));
    const du4 = ref(podbor(project.value.rash.rashod_gvs.G2v));
    const diap_tr1 = ref(diap_tr(project.value.uu_gvs.di1));
    const diap_tr2 = ref(diap_tr(project.value.uu_gvs.di2));
    const diap_T4 = ref(diapT4(project.value.uu_gvs.di1));

    const Lim1 = ref(speed(project.value.gidr.gdr3.V));
    const Lim2 = ref(speed(project.value.gidr.gdr4.V));
    const modif1 = ref(no_mod(project.value.uu_gvs.di1));
    const modif2 = ref(no_mod(project.value.uu_gvs.di2));
    const no61 = ref(no_i6(project.value.uu_gvs.di1));
    const no62 = ref(no_i6(project.value.uu_gvs.di1));
    const no_filter = ref(false);
    const yellow_mod = ref(false);
    const yellow_im = ref(false);

    watch(project.value.isx_gvs, () => {
      du3.value = podbor(project.value.rash.rashod_gvs.G1v);
      project.value.uu_gvs.di1 = du3.value.d;
      du4.value = podbor(project.value.rash.rashod_gvs.G2v);
      project.value.uu_gvs.di2 = du4.value.d;
    });

    watch(project.value.uu_gvs, () => {
      project.value.uu_gvs.tipIm1 == 6
        ? (no61.value = no_i6(project.value.uu_gvs.di1))
        : (no61.value = false);

      project.value.uu_gvs.tipIm2 == 6
        ? (no62.value = no_i6(project.value.uu_gvs.di2))
        : (no62.value = false);

      project.value.uu_gvs.tipL1 == "ml"
        ? ((modif1.value = no_mod(project.value.uu_gvs.di1)),
          (project.value.uu_gvs.filter = 0),
          (no_filter.value = true))
        : ((modif1.value = false), (no_filter.value = false));

      project.value.uu_gvs.tipL2 == "ml"
        ? ((modif2.value = no_mod(project.value.uu_gvs.di2)),
          (project.value.uu_gvs.filter = 0),
          (no_filter.value = true))
        : ((modif2.value = false), (no_filter.value = false));

      project.value.uu_gvs.tipIm2 !== project.value.uu_gvs.tipIm1
        ? (yellow_im.value = true)
        : (yellow_im.value = false);

      project.value.uu_gvs.tipL2 !== project.value.uu_gvs.tipL1
        ? (yellow_mod.value = true)
        : (yellow_mod.value = false);
    });

    watch(
      () => project.value.uu_gvs.di1,
      () => {
        project.value.uu_gvs.di1 == 0
          ? ((project.value.uu_gvs.dut1 = 0),
            (project.value.uu_gvs.di2 = 0),
            (project.value.uu_gvs.dut2 = 0))
          : "";

        project.value.uu_gvs.di2 > project.value.uu_gvs.di1
          ? (project.value.uu_gvs.di2 = project.value.uu_gvs.di1)
          : "";

        diap_tr1.value = diap_tr(project.value.uu_gvs.di1);
        diap_T4.value = diapT4(project.value.uu_gvs.di1);

        if (project.value.uu_gvs.di1 > 0) {
          diap_tr1.value.find((x) => x.value === project.value.uu_gvs.dut1)
            ? ""
            : (project.value.uu_gvs.dut1 = diap_tr1.value[1].value);
        }

        Lim1.value = speed(project.value.gidr.gdr3.V);
      }
    );

    watch(
      () => project.value.uu_gvs.di2,
      () => {
        project.value.uu_gvs.di1 == 0
          ? ((project.value.uu_gvs.dut1 = 0),
            (project.value.uu_gvs.di2 = 0),
            (project.value.uu_gvs.dut2 = 0))
          : "";
        project.value.uu_gvs.di2 == 0 ? (project.value.uu_gvs.dut2 = 0) : "";

        diap_tr2.value = diap_tr(project.value.uu_gvs.di2);

        if (project.value.uu_gvs.di2 > 0) {
          diap_tr2.value.find((x) => x.value === project.value.uu_gvs.dut2)
            ? ""
            : (project.value.uu_gvs.dut2 = diap_tr2.value[1].value);
        }
        Lim2.value = speed(project.value.gidr.gdr4.V);
      }
    );

    watch(
      () => project.value.isx_gvs.Kchn,
      () => {
        if (project.value.isx_gvs.Kchn > 0 && project.value.isx_gvs.q > 0) {
          project.value.isx_gvs.qs = +(
            project.value.isx_gvs.q / project.value.isx_gvs.Kchn
          ).toFixed(6);
        }
      }
    );

    const qgvs = (m) => {
      switch (m) {
        case "qm":
          project.value.isx_gvs.q > 100
            ? (project.value.isx_gvs.q = project.value.isx_gvs.q / 1000)
            : project.value.isx_gvs.q;
          project.value.isx_gvs.q > 0
            ? (project.value.isx_gvs.qs = +(
                project.value.isx_gvs.q / project.value.isx_gvs.Kchn
              ).toFixed(6))
            : (project.value.isx_gvs.qs = "");
          break;
        case "qs":
          project.value.isx_gvs.qs > 100
            ? (project.value.isx_gvs.qs = project.value.isx_gvs.qs / 1000)
            : project.value.isx_gvs.qs;
          project.value.isx_gvs.qs > 0
            ? (project.value.isx_gvs.q = +(
                project.value.isx_gvs.qs * project.value.isx_gvs.Kchn
              ).toFixed(6))
            : project.value.isx_gvs.q;
          break;
      }
    };

    return {
      opt,
      project,
      diap_tr1,
      diap_tr2,
      diap_T4,
      Lim1,
      Lim2,
      qgvs,
      no61,
      no62,
      modif1,
      modif2,
      no_filter,
      yellow_mod,
      yellow_im,
    };
  },
};
</script>