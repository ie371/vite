<template>
  <div>
    <div class="w-full text-center text-blue-600">
      <input
        class="w-full border-t-0 border-l-0 border-r-0"
        v-model="project.hvs.data.name"
        type="text"
      />
    </div>
    <div class="flex justify-between mt-3">
      <div class="w-1/3">
        <label>Расход час., м³/ч</label>
        <input
          class="w-full appearance-none"
          v-model.number="project.hvs.isx.G1v"
          v-on:input="qhvs('G1v')"
          type="number"
          step="0.001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
      <div class="w-1/3 px-1">
        <label>Расход сут., м³/сут</label>
        <input
          class="w-full"
          v-model.number="project.hvs.isx.Gvsut"
          v-on:input="qhvs('Gvsut')"
          type="number"
          step="0.001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
      <div class="w-1/3">
        <label>Период, ч</label>
        <input
          class="w-full"
          v-model.number="project.hvs.isx.Tper"
          v-on:input="qhvs('Tper')"
          type="number"
        />
      </div>
    </div>

    <div class="flex justify-between mt-2 px-3">
      <div class="w-1/2"></div>
      <div class="w-1/4 pl-1 flex justify-center">
        <span class="text-sm text-blue-500 font-bold">B1</span>
      </div>
      <div class="w-1/4 flex justify-center"></div>
    </div>

    <div class="flex w-full justify-between mt-1 items-center">
      <div class="w-1/2 text-gray-500 text-right">Tемпература, °C</div>
      <div class="w-1/4 px-1">
        <input
          class="w-full"
          v-model.number="project.hvs.isx.t1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-1/4"></div>
    </div>

    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">давление, мвст</div>
      <div class="w-1/4 px-1">
        <input
          class="w-full"
          v-model.number="project.hvs.isx.p1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-1/4"></div>
    </div>

    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">Ду ИМ</div>
      <div class="w-1/4 px-1">
        <select v-model.number="project.hvs.uu.di1" class="w-full">
          <option
            v-for="item in opt.du_im"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/4"></div>
    </div>

    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">Скорость, м/с</div>
      <div class="w-1/4 px-1">
        <input
          v-model="project.gidr.gdr1.V"
          class="w-full"
          :class="Lim1.lim ? 'text-red-600' : ''"
          type="text"
          disabled
        />
      </div>
      <div class="w-1/4"></div>
    </div>

    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">тип ИМ</div>
      <div class="w-1/4 px-1">
        <select
          v-model.number="project.hvs.uu.tipIm1"
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
      <div class="w-1/4"></div>
      <div></div>
    </div>

    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">Ду тр-в</div>
      <div class="w-1/4 px-1">
        <select v-model.number="project.hvs.uu.dut1" class="w-full">
          <option
            v-for="item in diap_tr1"
            :value="item.value"
            :key="item.index"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="w-1/4"></div>
    </div>

    <div class="flex w-full justify-between mt-2 items-center">
      <div class="w-1/2 text-gray-500 text-right">Отметки, мм</div>
      <div class="w-1/4 px-1">
        <input
          class="w-full"
          v-model.number="project.hvs.uu.otmetka_B1"
          type="number"
          step="0.001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-1/4"></div>
    </div>

    <div class="w-full border-t border-gray-400 pt-2 mt-4">
      <div class="flex text-center mt-3">
        <div class="w-1/4">
          <label class="pl-0">Датч. давл.</label>
          <input
            type="checkbox"
            v-model.number="project.hvs.uu.sens_d"
            class="h-6 w-6 m-auto"
          />
        </div>
        <div class="w-1/4">
          <label class="pl-0">Датч. темп.</label>
          <input
            type="checkbox"
            v-model.number="project.hvs.uu.sens_t"
            class="h-6 w-6 m-auto"
          />
        </div>
        <div class="w-1/4 pl-0">
          <label class="pl-0">Байпас</label>
          <input
            type="checkbox"
            v-model.number="project.hvs.uu.baypass"
            class="h-6 w-6 m-auto"
          />
        </div>
        <div class="w-1/4">
          <label class="pl-0">Теплоизоляция</label>
          <input
            type="checkbox"
            v-model.number="project.atm.teploiz_hvs"
            class="h-6 w-6 m-auto"
          />
        </div>
      </div>

      <div class="flex justify-start mt-3">
        <div class="w-1/2 pr-1">
          <label>Тип линии</label>
          <select
            v-model.number="project.hvs.uu.tipL"
            class="w-full"
            :class="
              modif ? 'bg-red-600 text-white focus:bg-red-600' : 'bg-white'
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
            v-model.number="project.hvs.uu.filter"
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
    </div>
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
    const du1 = ref(podbor(project.value.hvs.isx.G1v));
    const diap_tr1 = ref(diap_tr(project.value.hvs.uu.di1));
    const Lim1 = ref(speed(project.value.gidr.gdr1.V));
    const modif = ref(no_mod(project.value.hvs.uu.di1));
    const no6 = ref(no_i6(project.value.hvs.uu.di1));
    const nogrz = ref(false);
    const no_filter = ref(false);
    const no_hvs = (r) => {
      emit("no_hvs", r);
    };

    function check() {
      project.value.hvs.uu.tipL == "ml"
        ? ((modif.value = no_mod(project.value.hvs.uu.di1)),
          (project.value.hvs.uu.filter = 0),
          (no_filter.value = true))
        : ((modif.value = false), (no_filter.value = false));

      project.value.hvs.uu.tipIm1 == 6
        ? (no6.value = no_i6(project.value.hvs.uu.di1))
        : (no6.value = false);

      project.value.hvs.uu.dut1 < 40
        ? project.value.hvs.uu.filter == 2
          ? (nogrz.value = true)
          : (nogrz.value = false)
        : (nogrz.value = false);

      if (project.value.hvs.isx.G1v > 0) {
        modif.value || no6.value || nogrz.value ? no_hvs(true) : no_hvs(false);
      } else {
        no_hvs(true);
      }
    }
    check();
    watch(project.value, () => {
      check();
    });

    const qhvs = (m) => {
      switch (m) {
        case "G1v":
        case "Tper":
          project.value.hvs.isx.G1v > 0
            ? (project.value.hvs.isx.Gvsut = (
                project.value.hvs.isx.G1v * project.value.hvs.isx.Tper
              ).toFixed(3))
            : (project.value.hvs.isx.Gvsut = "");
          break;
        case "Gvsut":
          project.value.hvs.isx.Gvsut > 0 && project.value.hvs.isx.Tper > 0
            ? (project.value.hvs.isx.G1v = (
                project.value.hvs.isx.Gvsut / project.value.hvs.isx.Tper
              ).toFixed(3))
            : (project.value.hvs.isx.G1v = "");
          break;
      }
    };

    watch(
      () => project.value.hvs.isx.G1v,
      () => {
        project.value.hvs.isx.G1v > 0
          ? ((du1.value = podbor(project.value.hvs.isx.G1v)),
            (project.value.hvs.uu.di1 = du1.value.d),
            (Lim1.value = speed(project.value.gidr.gdr1.V)))
          : "";
      }
    );
    // di1
    watch(
      () => project.value.hvs.uu.di1,
      () => {
        project.value.hvs.uu.di1 == 0 ? (project.value.hvs.uu.dut1 = 0) : "";
        diap_tr1.value = diap_tr(project.value.hvs.uu.di1);
        if (project.value.hvs.uu.di1 > 0) {
          diap_tr1.value.find((x) => x.value === project.value.hvs.uu.dut1)
            ? ""
            : (project.value.hvs.uu.dut1 = diap_tr1.value[1].value);
        }
        Lim1.value = speed(project.value.gidr.gdr1.V);
        // check();
      }
    );
    return {
      opt,
      project,
      qhvs,
      diap_tr1,
      Lim1,
      no6,
      modif,
      no_filter,
      nogrz,
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