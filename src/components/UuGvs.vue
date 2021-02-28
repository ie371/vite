<template>
  <div>
    <div class="w-full text-center text-blue-800 font-bold">
      <input
        class="w-full outline-none border-none"
        v-model="project.gvs.data.name"
        type="text"
      />
    </div>
    <div class="flex justify-start mt-3">
      <div class="w-1/3">
        <label>Qmax, Гкал/ч</label>
        <input
          class="w-full"
          v-model.number="project.gvs.isx.q"
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
          v-model.number="project.gvs.isx.qs"
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
          v-model.number="project.gvs.isx.Kchn"
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
          v-model.number="project.gvs.isx.txvL"
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
          v-model.number="project.gvs.isx.txvZ"
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
          v-model.number="project.gvs.isx.knp"
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
          v-model.number="project.gvs.isx.ktp"
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
          v-model.number="project.gvs.isx.beta"
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
    <div v-if="itp" class="flex w-full justify-start mt-1">
      <div class="w-6/12 text-gray-500 text-right">темп.гр. ГВС</div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.gvs.isx.t1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div v-if="tup" class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.gvs.isx.t2"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- температура СО-->
    <div v-if="!itp" class="flex w-full justify-between mt-1">
      <div class="w-1/2 text-gray-500 text-right">темп.гр. т/с лето</div>
      <div class="w-1/4 px-1">
        <input
          class="w-full"
          v-model.number="project.gvs.isx.t1L"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="w-1/4">
        <input
          class="w-full"
          v-model.number="project.gvs.isx.t2L"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>

    <!-- Давление-->
    <div class="flex w-full justify-start mt-1">
      <div class="w-6/12 text-gray-500 text-right">давление, мвст</div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.gvs.isx.p1"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div v-if="tup || !itp" class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.gvs.isx.p2"
          type="number"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>
    <!-- Расход -->
    <div class="flex w-full justify-start mt-1">
      <div class="w-6/12 text-gray-500 text-right">Расход, м³/ч</div>
      <div class="w-3/12 px-1">
        <input
          class="w-full"
          v-model.number="project.rash.gvs.G1v"
          type="number"
          step="0.01"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="6"
          readonly
        />
      </div>
      <div v-if="tup || !itp" class="w-3/12">
        <input
          class="w-full"
          v-model.number="project.rash.gvs.G2v"
          type="number"
          step="0.01"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="6"
          readonly
        />
      </div>
    </div>

    <div v-if="itp">
      <!-- Ду ИМ -->
      <div class="flex w-full justify-between mt-1">
        <div class="w-1/2 text-gray-500 text-right">Ду ИМ</div>
        <div class="w-1/4 px-1">
          <select v-model.number="project.gvs.uu.di1" class="w-full">
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
          <select v-model.number="project.gvs.uu.di2" class="w-full">
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
      <div class="flex w-full justify-start mt-1">
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
        <div v-if="tup" class="w-1/4">
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
      <div class="flex w-full justify-start mt-1">
        <div class="w-1/2 text-gray-500 text-right">тип ИМ</div>
        <div class="w-1/4 px-1">
          <select
            v-model.number="project.gvs.uu.tipIm1"
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
        <div v-if="tup" class="w-1/4">
          <select
            v-model.number="project.gvs.uu.tipIm2"
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
      <div class="flex w-full justify-start mt-1">
        <div class="w-1/2 text-gray-500 text-right">Ду тр-в</div>
        <div class="w-1/4 px-1">
          <select v-model.number="project.gvs.uu.dut1" class="w-full">
            <option
              v-for="item in diap_tr1"
              :value="item.value"
              :key="item.index"
            >
              {{ item.text }}
            </option>
          </select>
        </div>
        <div v-if="tup" class="w-1/4">
          <select v-model.number="project.gvs.uu.dut2" class="w-full">
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
      <div class="flex w-full justify-start mt-1">
        <div class="w-1/2 text-gray-500 text-right">Отметки, мм</div>
        <div class="w-1/4 px-1">
          <input
            class="w-full"
            v-model.number="project.gvs.uu.otmetka_T3"
            type="number"
            step="0.001"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="5"
          />
        </div>
        <div v-if="tup" class="w-1/4">
          <input
            class="w-full"
            v-model.number="project.gvs.uu.otmetka_T4"
            type="number"
            step="0.001"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="5"
          />
        </div>
      </div>
      <!-- ТИП ЛИНИИ-->
      <div
        class="flex w-full justify-between border-t border-gray-400 pt-2 mt-4"
      >
        <div class="w-1/2 pr-1">
          <label>Тип линии T3</label>
          <select
            v-model.number="project.gvs.uu.tipL1"
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
        <div v-if="tup" class="w-1/2">
          <label>Тип линии T4</label>
          <select
            v-model.number="project.gvs.uu.tipL2"
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
            v-model.number="project.gvs.uu.filter"
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
        <div v-if="tup" class="w-1/3 pt-2">
          <label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              v-model.number="project.gvs.uu.ok"
              class="h-4 w-4"
              :disabled="no_ok"
            /><span class="ml-2 text-base text-gray-700">ОК</span>
          </label>
        </div>
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
    const du3 = ref(podbor(project.value.rash.gvs.G1v));
    const du4 = ref(podbor(project.value.rash.gvs.G2v));
    const diap_tr1 = ref(diap_tr(project.value.gvs.uu.di1));
    const diap_tr2 = ref(diap_tr(project.value.gvs.uu.di2));
    const diap_T4 = ref(diapT4(project.value.gvs.uu.di1));
    const itp = ref(true);
    const tup = ref(true);

    const Lim1 = ref(speed(project.value.gidr.gdr3.V));
    const Lim2 = ref(speed(project.value.gidr.gdr4.V));
    const modif1 = ref(no_mod(project.value.gvs.uu.di1));
    const modif2 = ref(no_mod(project.value.gvs.uu.di2));
    const no61 = ref(no_i6(project.value.gvs.uu.di1));
    const no62 = ref(no_i6(project.value.gvs.uu.di1));
    const no_filter = ref(false);
    const no_ok = ref(false);
    const yellow_mod = ref(false);
    const yellow_im = ref(false);

    no61.value = no_i6(project.value.gvs.uu.di1);
    no62.value = no_i6(project.value.gvs.uu.di2);
    modif1.value = no_mod(project.value.gvs.uu.di1);
    modif2.value = no_mod(project.value.gvs.uu.di2);

    project.value.gvs.uu.tipIm2 !== project.value.gvs.uu.tipIm1
      ? (yellow_im.value = true)
      : (yellow_im.value = false);

    project.value.gvs.uu.tipL2 !== project.value.gvs.uu.tipL1
      ? (yellow_mod.value = true)
      : (yellow_mod.value = false);

    watch(project.value.gvs.isx, () => {
      project.value.rash.gvs.G1v > 0
        ? ((du3.value = podbor(project.value.rash.gvs.G1v)),
          (project.value.gvs.uu.di1 = du3.value.d))
        : "";

      project.value.rash.gvs.G1v > 0 && project.value.data.sx_gvs != 1
        ? ((du4.value = podbor(project.value.rash.gvs.G2v)),
          (project.value.gvs.uu.di2 = du4.value.d))
        : "";
    });

    watch(project.value.gvs.uu, () => {
      project.value.gvs.uu.tipIm1 == 6
        ? (no61.value = no_i6(project.value.gvs.uu.di1))
        : (no61.value = false);

      project.value.gvs.uu.tipIm2 == 6
        ? (no62.value = no_i6(project.value.gvs.uu.di2))
        : (no62.value = false);

      project.value.gvs.uu.tipL1 == "ml"
        ? (modif1.value = no_mod(project.value.gvs.uu.di1))
        : (modif1.value = false);

      project.value.gvs.uu.tipL2 == "ml"
        ? (modif2.value = no_mod(project.value.gvs.uu.di2))
        : (modif2.value = false);

      project.value.gvs.uu.tipIm2 !== project.value.gvs.uu.tipIm1
        ? (yellow_im.value = true)
        : (yellow_im.value = false);

      project.value.gvs.uu.tipL2 !== project.value.gvs.uu.tipL1
        ? (yellow_mod.value = true)
        : (yellow_mod.value = false);

      project.value.gvs.uu.tipL1 == "ml" || project.value.gvs.uu.tipL2 == "ml"
        ? ((no_filter.value = true), (project.value.gvs.uu.filter = 0))
        : (no_filter.value = false);

      project.value.gvs.uu.tipL2 == "ml"
        ? ((project.value.gvs.uu.ok = false), (no_ok.value = true))
        : (no_ok.value = false);
    });

    watch(project.value.data, () => {
      project.value.data.type_gvs == "1st" ||
      project.value.data.type_gvs == "2st"
        ? (itp.value = false)
        : (itp.value = true);
    });

    // tipIm1
    watch(
      () => project.value.gvs.uu.tipIm1,
      () => {
        project.value.gvs.uu.tipIm2 = project.value.gvs.uu.tipIm1;
      }
    );
    // tipL1
    watch(
      () => project.value.gvs.uu.tipL1,
      () => {
        project.value.gvs.uu.tipL2 = project.value.gvs.uu.tipL1;
      }
    );
    // di1
    watch(
      () => project.value.gvs.uu.di1,
      () => {
        project.value.gvs.uu.di1 == 0
          ? ((project.value.gvs.uu.dut1 = 0),
            (project.value.gvs.uu.di2 = 0),
            (project.value.gvs.uu.dut2 = 0),
            (project.value.data.type_gvs = "close"))
          : "";

        project.value.gvs.uu.di2 > project.value.gvs.uu.di1
          ? (project.value.gvs.uu.di2 = project.value.gvs.uu.di1)
          : "";

        diap_tr1.value = diap_tr(project.value.gvs.uu.di1);
        diap_T4.value = diapT4(project.value.gvs.uu.di1);

        if (project.value.gvs.uu.di1 > 0) {
          diap_tr1.value.find((x) => x.value === project.value.gvs.uu.dut1)
            ? ""
            : (project.value.gvs.uu.dut1 = diap_tr1.value[1].value);
        }
        Lim1.value = speed(project.value.gidr.gdr3.V);
      }
    );
    // di2
    watch(
      () => project.value.gvs.uu.di2,
      () => {
        project.value.gvs.uu.di2 == 0
          ? ((project.value.gvs.uu.dut2 = 0),
            (project.value.gvs.data.sx_gvs = 1),
            (tup.value = false))
          : ((project.value.gvs.data.sx_gvs = 0), (tup.value = true));

        diap_tr2.value = diap_tr(project.value.gvs.uu.di2);

        if (project.value.gvs.uu.di2 > 0) {
          diap_tr2.value.find((x) => x.value === project.value.gvs.uu.dut2)
            ? ""
            : (project.value.gvs.uu.dut2 = diap_tr2.value[1].value);
        }

        Lim2.value = speed(project.value.gidr.gdr4.V);
      }
    );
    // Kchn
    watch(
      () => project.value.gvs.isx.Kchn,
      () => {
        if (project.value.gvs.isx.Kchn > 0 && project.value.gvs.isx.q > 0) {
          project.value.gvs.isx.qs = +(
            project.value.gvs.isx.q / project.value.gvs.isx.Kchn
          ).toFixed(6);
        }
      }
    );

    const qgvs = (m) => {
      switch (m) {
        case "qm":
          project.value.gvs.isx.q > 100
            ? (project.value.gvs.isx.q = project.value.gvs.isx.q / 1000)
            : project.value.gvs.isx.q;
          project.value.gvs.isx.q > 0
            ? (project.value.gvs.isx.qs = +(
                project.value.gvs.isx.q / project.value.gvs.isx.Kchn
              ).toFixed(6))
            : (project.value.gvs.isx.qs = "");
          break;
        case "qs":
          project.value.gvs.isx.qs > 100
            ? (project.value.gvs.isx.qs = project.value.gvs.isx.qs / 1000)
            : project.value.gvs.isx.qs;
          project.value.gvs.isx.qs > 0
            ? (project.value.gvs.isx.q = +(
                project.value.gvs.isx.qs * project.value.gvs.isx.Kchn
              ).toFixed(6))
            : project.value.gvs.isx.q;
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
      no_ok,
      itp,
      tup,
    };
  },
};
</script>