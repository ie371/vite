<template>
  <div>
    <div class="w-full text-center text-blue-800 font-bold">
      <input
        class="w-full outline-none border-none"
        v-model="project.ot.data.name"
        type="text"
      />
    </div>
    <div class="flex justify-between mt-3">
      <div class="w-1/3">
        <label>Q, Гкал/ч</label>
        <input
          class="w-full"
          v-model.number="project.ot.isx.q"
          type="number"
          step="0.0000001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
    </div>
    <div class="flex justify-between mt-3">
      <div class="w-2/3">
        <label>формула учета</label>
        <select v-model="project.ot.isx.fuCo" class="w-full">
          <option
            v-for="item in opt.fuco"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>

    <!-- Колонки -->
    <div class="flex justify-between mt-2 px-3">
      <div class="w-1/2"></div>
      <div class="w-3/12 pl-1 flex justify-center">
        <span class="text-sm text-red-500 font-bold">T1</span>
      </div>
      <div class="w-3/12 flex justify-center">
        <span class="text-sm text-blue-500 font-bold">T2</span>
      </div>
    </div>
    <!-- температура ТС-->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12">
        <span class="text-xs text-gray-500">темп.гр. т/с</span>
      </div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.ot.isx.t1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.ot.isx.t2"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- температура СО-->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12">
        <span class="text-xs text-gray-500">темп.гр. с/о</span>
      </div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.ot.isx.t11"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.ot.isx.t21"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- Давление-->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12">
        <span class="text-xs text-gray-500">давление, мвст</span>
      </div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.ot.isx.p1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.ot.isx.p2"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- Расход -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-6/12">
        <span class="text-xs text-gray-500">Расход, м³/ч</span>
      </div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.rash.ot.G1v"
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
          v-model.number="project.rash.ot.G2v"
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
      <div class="w-1/2">
        <span class="text-xs text-gray-500">Ду ИМ</span>
      </div>
      <div class="w-1/2 pl-1">
        <select v-model.number="project.ot.uu.di1" class="w-full">
          <option
            v-for="item in opt.du_im"
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
      <div class="w-6/12">
        <span class="text-xs text-gray-500">Скорость, м/с</span>
      </div>
      <div class="w-1/4 px-1">
        <input
          v-model="project.gidr.gdr1.V"
          class="w-full"
          :class="Lim1.lim ? 'bg-red-500 text-white' : 'bg-white'"
          type="text"
          disabled
        />
      </div>
      <div class="w-1/4">
        <input
          v-model="project.gidr.gdr2.V"
          class="w-full"
          :class="Lim2.lim ? 'bg-red-500 text-white' : 'bg-white'"
          type="text"
          disabled
        />
      </div>
    </div>
    <!-- тип ИМ -->
    <div class="flex w-full justify-between mt-1">
      <div class="w-1/2">
        <span class="text-xs text-gray-500">тип ИМ</span>
      </div>
      <div class="w-1/2 pl-1">
        <select
          v-model.number="project.ot.uu.tipIm1"
          class="w-full"
          :class="no6.a ? 'bg-red-500 text-white focus:bg-red-600' : 'bg-white'"
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
      <div class="w-1/2">
        <span class="text-xs text-gray-500">Ду тр-в</span>
      </div>
      <div class="w-1/4 px-1">
        <select v-model.number="project.ot.uu.dut1" class="w-full">
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
        <select v-model.number="project.ot.uu.dut2" class="w-full">
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
      <div class="w-1/2">
        <span class="text-xs text-gray-500">Отметки, мм</span>
      </div>
      <div class="w-1/4 px-1">
        <input
          class="w-full"
          v-model.number="project.ot.uu.otmetka_T1"
          type="number"
          step="0.001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.ot.uu.otmetka_T2"
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
          v-model.number="project.ot.uu.tipL"
          class="w-full"
          :class="
            modif.a ? 'bg-red-500 text-white focus:bg-red-600' : 'bg-white'
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
        <label>Фильтр</label>
        <select
          v-model.number="project.ot.uu.filter"
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
    </div>

    <!-- ПОДПИТКА-->
    <div class="flex w-full justify-between mt-4">
      <div class="w-1/3">
        <span class="text-xs text-gray-500">Схема с/о</span>
      </div>
      <div class="w-2/3">
        <select v-model.number="project.ot.isx.sx_ot" class="w-full">
          <option
            v-for="item in opt.podp"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
    <div
      class="flex-wrap"
      :class="project.ot.isx.sx_ot > 0 ? 'flex' : 'hidden'"
    >
      <div class="flex w-full justify-between mt-4">
        <div class="w-2/3 pr-1">
          <label>Фильтр Т94</label>
          <select v-model.number="project.ot.uu.filter_p" class="w-full">
            <option
              v-for="item in opt.tip_filtr"
              :value="item.value"
              :key="item.index"
            >
              {{ item.text }}
            </option>
          </select>
        </div>

        <div class="w-1/3">
          <label>Отметка</label>
          <input
            class="w-full"
            v-model.number="project.ot.uu.otmetka_T9"
            type="number"
            step="0.001"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="5"
          />
        </div>
      </div>
      <div class="flex w-full justify-between mt-4">
        <div class="w-1/4 pr-1">
          <label>Расход</label>
          <input
            class="w-full"
            v-model.number="project.rash.ot.G9v"
            type="number"
            step="0.01"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="6"
          />
        </div>
        <div class="w-1/4 pr-1">
          <label>Ду ИМ</label>
          <select v-model.number="project.ot.uu.di9" class="w-full">
            <option
              v-for="item in opt.du_im"
              :value="item.value"
              :key="item.index"
            >
              {{ item.text }}
            </option>
          </select>
        </div>
        <div class="w-1/4 pr-1">
          <label>Скорость</label>
          <input
            v-model="project.gidr.gdr9.V"
            class="w-full"
            :class="Lim9.lim ? 'bg-red-500 text-white' : 'bg-white'"
            type="text"
            disabled
          />
        </div>
        <div class="w-1/4">
          <label>Ду Т94</label>
          <select v-model.number="project.ot.uu.dut9" class="w-full">
            <option
              v-for="item in diap_tr9"
              :value="item.value"
              :key="item.index"
            >
              {{ item.text }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, watch } from "vue";
import opt from "../utils/selects.js";
import { podbor, diap_tr } from "../utils/FuncUu.js";
import { speed, no_mod, no_i6 } from "../utils/checks.js";

export default {
  name: "Home",
  components: {},
  props: {
    project: { type: Object, required: true },
  },
  setup(props) {
    const project = ref(props.project);
    const du1 = ref(podbor(project.value.rash.ot.G1v));
    const du9 = ref(podbor(project.value.rash.ot.G9v));
    const diap_tr1 = ref(diap_tr(project.value.ot.uu.di1));
    const diap_tr2 = ref(diap_tr(project.value.ot.uu.di2));
    const diap_tr9 = ref(diap_tr(project.value.ot.uu.di9));

    const Lim1 = ref(speed(project.value.gidr.gdr1.V));
    const Lim2 = ref(speed(project.value.gidr.gdr2.V));
    const Lim9 = ref(speed(project.value.gidr.gdr9.V));
    const modif = ref(no_mod(project.value.ot.uu.di1));
    const no6 = ref(no_i6(project.value.ot.uu.di1));
    const no_filter = ref(false);
    // q
    watch(
      () => project.value.ot.isx.q,
      () => {
        if (project.value.ot.isx.q > 0) {
          project.value.ot.isx.q > 100
            ? (project.value.ot.isx.q = project.value.ot.isx.q / 1000)
            : "";
        }
      }
    );
    // ot
    watch(
      () => project.value.rash.ot,
      () => {
        project.value.rash.ot.G1v > 0
          ? ((du1.value = podbor(project.value.rash.ot.G1v)),
            (project.value.ot.uu.di1 = du1.value.d),
            (du9.value = podbor(project.value.rash.ot.G9v)),
            (project.value.ot.uu.di9 = du9.value.d),
            (Lim1.value = speed(project.value.gidr.gdr1.V)),
            (Lim2.value = speed(project.value.gidr.gdr2.V)))
          : "";
      }
    );
    // ot.uu
    watch(project.value.ot.uu, () => {
      project.value.ot.uu.tipL == "ml"
        ? ((modif.value = no_mod(project.value.ot.uu.di1)),
          (project.value.ot.uu.filter = 0),
          (no_filter.value = true))
        : ((modif.value = false), (no_filter.value = false));

      project.value.ot.uu.tipIm1 == 6
        ? (no6.value = no_i6(project.value.ot.uu.di1))
        : (no6.value = false);
    });
    // di1
    watch(
      () => project.value.ot.uu.di1,
      () => {
        project.value.ot.uu.di1 == 0
          ? ((project.value.ot.uu.dut1 = 0), (project.value.ot.uu.dut2 = 0))
          : "";
        project.value.ot.uu.di2 = project.value.ot.uu.di1;
        diap_tr1.value = diap_tr(project.value.ot.uu.di1);
        diap_tr2.value = diap_tr1.value;
        if (project.value.ot.uu.di1 > 0) {
          diap_tr1.value.find((x) => x.value === project.value.ot.uu.dut1)
            ? ""
            : (project.value.ot.uu.dut1 = diap_tr1.value[1].value);
        }
        if (project.value.ot.uu.di2 > 0) {
          diap_tr2.value.find((x) => x.value === project.value.ot.uu.dut2)
            ? ""
            : (project.value.ot.uu.dut2 = diap_tr2.value[1].value);
        }

        Lim1.value = speed(project.value.gidr.gdr1.V);
        Lim2.value = speed(project.value.gidr.gdr2.V);
      }
    );
    // di9
    watch(
      () => project.value.ot.uu.di9,
      () => {
        project.value.ot.uu.di1 == 0 ? (project.value.ot.uu.dut9 = 0) : "";

        diap_tr9.value = diap_tr(project.value.ot.uu.di9);
        9;
        if (project.value.ot.uu.di9 > 0) {
          diap_tr9.value.find((x) => x.value === project.value.ot.uu.dut9)
            ? ""
            : (project.value.ot.uu.dut9 = diap_tr9.value[1].value);
        }
        Lim9.value = speed(project.value.gidr.gdr9.V);
      }
    );
    // dut1
    watch(
      () => project.value.ot.uu.dut1,
      () => {
        project.value.ot.uu.dut2 = project.value.ot.uu.dut1;
      }
    );

    return {
      opt,
      project,
      diap_tr1,
      diap_tr2,
      diap_tr9,
      Lim1,
      Lim2,
      Lim9,
      no6,
      modif,
      no_filter,
    };
  },
};
</script>