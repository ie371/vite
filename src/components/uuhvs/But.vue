<template>
  <div>
    <div class="w-full text-center text-blue-600 font-bold mt-4 text-sm">
      <span>Вставка файлов</span>
    </div>

    <div class="px-1 truncate">
      <div class="flex w-full justify-end items-end mt-2">
        <div class="w-11/12">
          <label>Название листа</label>
          <input
            class="w-full"
            type="text"
            v-model.number="project.atm.listn.prsx"
          />
        </div>
        <div class="w-1/12 pl-1 text-center">
          <button
            type="button"
            @click="pr1 = !pr1"
            class="focus:outline-none text-xs pb-1 hover:text-blue-600"
            :class="
              project.atm.prim.prsx || file1 ? 'text-red-600 font-bold' : ''
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
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <transition name="bounce">
        <div class="w-full px-2 mt-1 border border-dotted" v-show="pr1">
          <div class="flex w-full items-end">
            <div class="w-8/12">
              <file-input v-model="file1" name="princ_sx_uploads" isImage />
            </div>
            <div class="w-1/12 pl-1 text-center">
              <label class="pl-0">A2</label>
              <input
                type="checkbox"
                v-model.number="project.atm.format.prsx"
                :disabled="dis1"
                class="h-4 w-4 m-auto"
              />
            </div>
            <div class="w-2/12 pl-1 text-center">
              <label class="pl-0">+1</label>
              <input
                type="checkbox"
                v-model.number="project.atm.add.prsx"
                :disabled="dis1"
                class="h-4 w-4 m-auto"
              />
            </div>
          </div>
          <div>
            <label>Примечание</label>
            <textarea
              class="w-full border border-gray-300 focus:outline-none p-2 overflow-y h-20 text-xss font-bold"
              v-model="project.atm.prim.prsx"
              rows="10"
            ></textarea>
          </div>
        </div>
      </transition>
      <!-- ==================== -->
      <div class="flex justify-between mt-3 items-end">
        <div class="flex w-full items-end">
          <div class="w-11/12">
            <label>Название листа</label>
            <input
              class="w-full"
              type="text"
              v-model.number="project.atm.listn.spl"
            />
          </div>

          <div class="w-1/12 pl-1 text-center">
            <button
              type="button"
              @click="pr2 = !pr2"
              class="focus:outline-none text-xs hover:text-blue-600"
              :class="
                project.atm.prim.spl || file2 ? 'text-red-600 font-bold' : ''
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
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <transition name="bounce">
        <div class="w-full px-2 mt-1" v-show="pr2">
          <div class="flex w-full items-end">
            <div class="w-8/12">
              <!-- <label>Ситуационный план</label> -->
              <file-input v-model="file2" name="sitplan_uploads" isImage />
            </div>
            <div class="w-1/12 pl-1 text-center">
              <label class="pl-0">A2</label>
              <input
                type="checkbox"
                v-model.number="project.atm.format.spl"
                :disabled="dis2"
                class="h-4 w-4 m-auto"
              />
            </div>
            <div class="w-2/12 pl-1 text-center">
              <label class="pl-0">+1</label>
              <input
                type="checkbox"
                v-model.number="project.atm.add.spl"
                :disabled="dis2"
                class="h-4 w-4 m-auto"
              />
            </div>
          </div>
          <textarea
            class="w-full mt-2 border border-gray-300 focus:outline-none p-2 overflow-y h-20 text-xss font-bold"
            v-model="project.atm.prim.spl"
            rows="10"
          ></textarea>
        </div>
      </transition>
      <!-- ==================== -->
      <div class="flex justify-between mt-3 items-end">
        <div class="flex w-full items-end">
          <div class="w-11/12">
            <label>Название листа</label>
            <input
              class="w-full"
              type="text"
              v-model.number="project.atm.listn.mont_hvs"
            />
          </div>

          <div class="w-1/12 pl-1 text-center">
            <button
              type="button"
              @click="pr3 = !pr3"
              class="focus:outline-none text-xs hover:text-blue-600"
              :class="
                project.atm.prim.mont_hvs || file3
                  ? 'text-red-600 font-bold'
                  : ''
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
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <transition name="bounce">
        <div class="w-full px-2 mt-1" v-show="pr3">
          <div class="flex w-full items-end">
            <div class="w-8/12">
              <file-input v-model="file3" name="mont_hvs_uploads" isImage />
            </div>
            <div class="w-1/12 pl-1 text-center">
              <label class="pl-0">A2</label>
              <input
                type="checkbox"
                v-model.number="project.atm.format.mont_hvs"
                :disabled="dis3"
                class="h-4 w-4 m-auto"
              />
            </div>
            <div class="w-2/12 pl-1 text-center">
              <label class="pl-0">+1</label>
              <input
                type="checkbox"
                v-model.number="project.atm.add.mont_hvs"
                :disabled="dis3"
                class="h-4 w-4 m-auto"
              />
            </div>
          </div>
          <textarea
            class="w-full mt-2 border border-gray-300 focus:outline-none p-2 overflow-y h-20 text-xss font-bold"
            v-model="project.atm.prim.mont_hvs"
            rows="10"
          ></textarea>
        </div>
      </transition>
      <!-- ==================== -->
      <div class="flex justify-between mt-3 items-end">
        <div class="flex w-full items-end">
          <div class="w-11/12">
            <label>Название листа</label>
            <input
              class="w-full"
              type="text"
              v-model.number="project.atm.listn.funcsx"
            />
          </div>
          <div class="w-1/12 pl-1 text-center">
            <button
              type="button"
              @click="pr4 = !pr4"
              class="focus:outline-none text-xs hover:text-blue-600"
              :class="
                project.atm.prim.funcsx || file4
                  ? 'text-red-600  font-bold'
                  : ''
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
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <transition name="bounce">
        <div class="w-full px-2 mt-2" v-show="pr4">
          <div class="flex w-full items-end">
            <div class="w-8/12">
              <file-input v-model="file4" name="func_uploads" isImage />
            </div>
            <div class="w-1/12 pl-1 text-center">
              <label class="pl-0">A2</label>
              <input
                type="checkbox"
                v-model.number="project.atm.format.funcsx"
                :disabled="dis4"
                class="h-4 w-4 m-auto"
              />
            </div>
            <div class="w-2/12 pl-1 text-center">
              <label class="pl-0">+1</label>
              <input
                type="checkbox"
                v-model.number="project.atm.add.funcsx"
                :disabled="dis4"
                class="h-4 w-4 m-auto"
              />
            </div>
          </div>
          <textarea
            class="w-full mt-2 border border-gray-300 focus:outline-none p-2 overflow-y h-20 text-xss font-bold"
            v-model="project.atm.prim.funcsx"
            rows="10"
          ></textarea>
        </div>
      </transition>
      <!-- ==================== -->
      <div class="flex justify-between mt-3 items-end">
        <div class="flex w-full items-end">
          <div class="w-11/12">
            <label>Название листа</label>
            <input
              class="w-full"
              type="text"
              v-model.number="project.atm.listn.spec"
            />
          </div>

          <div class="w-1/12 pl-1 text-center">
            <button
              type="button"
              @click="pr5 = !pr5"
              class="focus:outline-none text-xs hover:text-blue-600"
              :class="
                project.atm.prim.spec || file5 ? 'text-red-600 font-bold' : ''
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
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <transition name="bounce">
        <div class="w-full px-2 mt-1" v-show="pr5">
          <div class="w-2/3">
            <file-input v-model="file5" name="spec_uploads" isPdf />
          </div>
          <textarea
            class="w-full border mt-2 border-gray-300 focus:outline-none p-2 overflow-y h-20 text-xss font-bold"
            v-model="project.atm.prim.spec"
            rows="10"
          ></textarea>
        </div>
      </transition>
    </div>

    <div class="flex w-full text-center mt-4 text-sm">
      <div class="w-11/12 text-center text-blue-600 font-bold">
        Доп. материалы
      </div>
      <div class="w-1/12 pr-1 text-center">
        <button
          type="button"
          @click="dop = !dop"
          class="focus:outline-none text-xs pb-1 hover:text-blue-600"
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
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
    <transition name="bounce">
      <div class="w-full" v-show="dop">
        <div class="flex w-full justify-between">
          <div class="w-5/6">
            <label>Доп. трубы</label>
            <input
              class="w-full"
              type="text"
              v-model="project.dop.truba_dop"
              placeholder="4-50, 3-80-z"
            />
          </div>

          <div class="w-1/6 pl-1 text-center">
            <label class="pl-0">теплоиз</label>
            <input
              type="checkbox"
              v-model="project.dop.tpl_dop"
              class="h-6 w-6 m-auto"
            />
          </div>
        </div>
        <div class="flex w-full justify-between">
          <div class="w-full">
            <label>Доп. переходы</label>
            <input
              class="w-full"
              type="text"
              v-model="project.dop.perehod_dop"
              placeholder="2-40-32, 3-65-40-z"
            />
          </div>
        </div>
        <div class="flex w-full justify-between">
          <div class="w-full">
            <label>Доп. отводы</label>
            <input
              class="w-full"
              type="text"
              v-model="project.dop.otvod_dop"
              placeholder="6-32, 6-50-z"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import FileInput from "../filePost.vue";

export default {
  name: "Home",
  components: { FileInput },
  props: {
    project: { type: Object, required: true },
  },
  setup(props) {
    const project = ref(props.project);
    const file1 = ref(null);
    const file2 = ref(null);
    const file3 = ref(null);
    const file4 = ref(null);
    const file5 = ref(null);
    const pr1 = ref(false);
    const pr2 = ref(false);
    const pr3 = ref(false);
    const pr4 = ref(false);
    const pr5 = ref(false);
    const dis1 = ref(true);
    const dis2 = ref(true);
    const dis3 = ref(true);
    const dis4 = ref(true);
    const dis5 = ref(true);
    const dop = ref(false);

    watch(file1, () => {
      file1.value ? (dis1.value = false) : (dis1.value = true),
        (project.value.atm.format.prsx = false),
        (project.value.atm.add.prsx = false);
    });
    watch(file2, () => {
      file2.value ? (dis2.value = false) : (dis2.value = true),
        (project.value.atm.format.spl = false),
        (project.value.atm.add.spl = false);
    });
    watch(file3, () => {
      file3.value ? (dis3.value = false) : (dis3.value = true),
        (project.value.atm.format.mont_hvs = false),
        (project.value.atm.add.mont_hvs = false);
    });
    watch(file4, () => {
      file4.value ? (dis4.value = false) : (dis4.value = true),
        (project.value.atm.format.funcsx = false),
        (project.value.atm.add.funcsx = false);
    });

    return {
      project,
      file1,
      file2,
      file3,
      file4,
      file5,
      pr1,
      pr2,
      pr3,
      pr4,
      pr5,
      dis1,
      dis2,
      dis3,
      dis4,
      dis5,
      dop,
    };
  },
};
</script>
