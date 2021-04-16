<template>
  <div>
    <div class="w-full text-center text-blue-600">
      <input
        class="w-full border-t-0 border-l-0 border-r-0"
        v-model="project.ot.data.name"
        type="text"
      />
    </div>
    <div class="flex justify-between mt-3">
      <div class="w-1/3">
        <label>Qco, Гкал/ч</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.ot.isx.qco"
          type="number"
          step="0.0000001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
      <div class="w-1/3 px-1">
        <label>Qvent, Гкал/ч</label>
        <input
          class="w-full"
          v-model.number="project.ot.isx.qvent"
          type="number"
          step="0.0000001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
      <div class="w-1/3">
        <label>Qsum, Гкал/ч</label>
        <input
          class="w-full text-white bg-gray-400"
          v-model.number="project.ot.isx.q"
          type="number"
          disabled
        />
      </div>
    </div>
    <div class="flex justify-start mt-3">
      <div class="w-1/2">
        <label>формула учета</label>
        <select
          v-model="project.ot.isx.fuCo"
          class="w-full"
          :disabled="no_fuco"
          :class="no_fuco ? 'text-white bg-gray-500' : 'bg-white'"
        >
          <option
            v-for="item in opt.fuco"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/4 px-1">
        <label>Т до срезки</label>
        <input
          class="w-full"
          v-model.number="project.ot.isx.t_srez"
          type="number"
          step="1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="3"
        />
      </div>
      <div class="w-1/4 pl-1 text-center">
        <label class="pl-0">реверс на Т2</label>
        <input
          type="checkbox"
          v-model.number="project.ot.isx.revers"
          class="h-6 w-6 m-auto"
        />
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
    <div class="flex w-full justify-between mt-1 items-center">
      <div class="w-6/12 text-gray-500 text-right">темп.гр. т/с</div>
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
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-6/12 text-gray-500 text-right">темп.гр. с/о</div>
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
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-6/12 text-gray-500 text-right">давление, мвст</div>
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
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-6/12 text-gray-500 text-right">Расход, м³/ч</div>
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
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">Ду ИМ</div>
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
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-6/12 text-gray-500 text-right">Скорость, м/с</div>
      <div class="w-1/4 px-1">
        <input
          v-model="project.gidr.gdr1.V"
          class="w-full"
          :class="Lim1.lim ? 'text-red-600' : ''"
          type="text"
          disabled
        />
      </div>
      <div class="w-1/4">
        <input
          v-model="project.gidr.gdr2.V"
          class="w-full"
          :class="Lim2.lim ? 'text-red-600' : ''"
          type="text"
          disabled
        />
      </div>
    </div>
    <!-- тип ИМ -->
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">тип ИМ</div>
      <div class="w-1/2 pl-1">
        <select
          v-model.number="project.ot.uu.tipIm1"
          class="w-full"
          :class="no6 ? 'bg-red-500 text-white focus:bg-red-600' : 'bg-white'"
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
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">Ду тр-в</div>
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
    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">Отметки, мм</div>
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
          :class="modif ? 'bg-red-600 text-white focus:bg-red-600' : 'bg-white'"
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
          :class="
            (no_filter ? ' text-white bg-gray-500' : '',
            nogrz
              ? 'bg-red-600 text-white focus:bg-red-600'
              : no_filter
              ? ' text-white bg-gray-500'
              : '')
          "
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
    <div class="flex w-full justify-between items-center mt-4">
      <div class="w-1/3 text-gray-500 text-right pr-1">Схема с/о</div>
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
    <transition name="bounce">
      <div class="flex-wrap" v-show="project.ot.isx.sx_ot > 0">
        <div class="flex w-full justify-between mt-4">
          <div class="w-2/3 pr-1">
            <label>Фильтр Т94</label>
            <select
              v-model.number="project.ot.uu.filter_p"
              class="w-full"
              :class="nogrz9 ? 'bg-red-600 text-white focus:bg-red-600' : ''"
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
              :class="Lim9.lim ? ' text-red-600' : ''"
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
    </transition>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import opt from "../../utils/selects.js";
import { podbor, diap_tr } from "../../utils/FuncUu.js";
import { speed, no_mod, no_i6 } from "../../utils/checks.js";

export default {
  name: "Home",
  components: {},
  props: {
    project: { type: Object, required: true },
  },
  setup(props, { emit }) {
    const project = ref(props.project);
    const du1 = ref(podbor(project.value.rash.ot.G1v));
    const du9 = ref(podbor(project.value.rash.ot.G9v));
    const diap_tr1 = ref(diap_tr(project.value.ot.uu.di1));
    const diap_tr2 = ref(diap_tr(project.value.ot.uu.di2));
    const diap_tr9 = ref(diap_tr(project.value.ot.uu.di9));
    const no_co = (r) => emit("no_co", r);
    const Lim1 = ref(speed(project.value.gidr.gdr1.V));
    const Lim2 = ref(speed(project.value.gidr.gdr2.V));
    const Lim9 = ref(speed(project.value.gidr.gdr9.V));
    const modif = ref(no_mod(project.value.ot.uu.di1));
    const no6 = ref(no_i6(project.value.ot.uu.di1));
    const nogrz = ref(false);
    const nogrz9 = ref(false);
    const no_filter = ref(false);
    const no_fuco = ref(true);

    function check() {
      project.value.ot.uu.tipL == "ml"
        ? ((modif.value = no_mod(project.value.ot.uu.di1)),
          (project.value.ot.uu.filter = 0),
          (no_filter.value = true))
        : ((modif.value = false), (no_filter.value = false));

      project.value.ot.uu.tipIm1 == 6
        ? (no6.value = no_i6(project.value.ot.uu.di1))
        : (no6.value = false);

      project.value.ot.uu.dut1 < 40
        ? project.value.ot.uu.filter == 2
          ? (nogrz.value = true)
          : (nogrz.value = false)
        : (nogrz.value = false);

      project.value.ot.uu.dut9 < 40
        ? project.value.ot.uu.filter_p == 2
          ? (nogrz9.value = true)
          : (nogrz9.value = false)
        : (nogrz9.value = false);

      if (project.value.ot.isx.qco > 0) {
        modif.value || no6.value || nogrz.value || nogrz9.value
          ? no_co(true)
          : no_co(false);
      } else {
        no_co(true);
      }

      if (project.value.ot.isx.qco > 0) {
        project.value.ot.isx.qco > 100
          ? (project.value.ot.isx.qco = project.value.ot.isx.qco / 1000)
          : "";
        project.value.data.type_gvs == "open" ||
        project.value.data.type_gvs == "open_notim_cirk" ||
        project.value.data.type_gvs == "open_notim_tup"
          ? ((project.value.ot.isx.fuCo = 1), (no_fuco.value = true))
          : (no_fuco.value = false);
      } else {
        no_fuco.value = true;
      }
      if (project.value.ot.isx.qvent > 0) {
        project.value.ot.isx.qvent > 100
          ? (project.value.ot.isx.qvent = project.value.ot.isx.qvent / 1000)
          : "";
      }
    }
    check();
    watch(project.value, () => check());
    // ot
    watch(
      () => project.value.rash.ot.G1v,
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

        if (project.value.ot.uu.di9 > 0) {
          diap_tr9.value.find((x) => x.value === project.value.ot.uu.dut9)
            ? ""
            : (project.value.ot.uu.dut9 = diap_tr9.value[1].value);
          Lim9.value = speed(project.value.gidr.gdr9.V);
        } else {
          project.value.ot.isx.sx_ot = 0;
        }
      }
    );
    // dut1
    watch(
      () => project.value.ot.uu.dut1,
      () => {
        project.value.ot.uu.dut2 = project.value.ot.uu.dut1;
      }
    );
    // sx_ot
    watch(
      () => project.value.ot.isx.sx_ot,
      () => {
        project.value.ot.isx.sx_ot > 0 && project.value.ot.uu.di9 == 0
          ? ((du9.value = podbor(project.value.rash.ot.G9v)),
            (project.value.ot.uu.di9 = du9.value.d))
          : "";
      }
    );
    // fuCO
    watch(
      () => project.value.data.type_gvs,
      () => {
        project.value.data.type_gvs == "close" ||
        project.value.data.type_gvs == "1st" ||
        project.value.data.type_gvs == "2st"
          ? (project.value.ot.isx.fuCo = 0)
          : "";
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
      nogrz,
      nogrz9,
      no_fuco,
    };
  },
};
</script>
<style >
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>