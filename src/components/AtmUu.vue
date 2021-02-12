<template>
  <div class="col labl">
    <div class="form-group">
      <b-row class="sticky-bottom">
        <b-col>
          <b-button variant="primary" @click="show=true">добавить УУ</b-button>
        </b-col>
      </b-row>
    </div>
    <b-modal v-model="show" title="Modal Variants">
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="2">
            <label class="col-form-label">Тип УУ</label>
          </b-col>
          <b-col>
            <b-form-select v-model="type" :options="list_uu" size="sm"></b-form-select>
          </b-col>
        </b-row>

        <div class="form-group mt-3" v-if="show_3">
          <b-row class="mb-1 text-center">
            <b-col cols="2">
              <label class="col-form-label">Имя УУ</label>
            </b-col>
            <b-col>
              <b-form-input size="sm" type="text" v-model="ts_name"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="form-group mt-3" v-if="show_1">
          <b-row class="mb-1 text-center">
            <b-col class="text-maroon text-s">Отопление</b-col>
          </b-row>
          <b-row class="mb-1 text-center" v-if="!show_3">
            <b-col cols="2">
              <label class="col-form-label">Имя УУ</label>
            </b-col>
            <b-col>
              <b-form-input size="sm" type="text" v-model="ot.name"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="gutter-2 row">
            <b-col>
              <label class="col-form-label">Нагрузка</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ot.q"
                step="0.0000001"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="8"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">t1</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ot.t1"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">t2</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ot.t2"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">p1</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ot.p1"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">p2</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ot.p2"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="form-group mt-3" v-if="show_2">
          <b-row class="mb-1 text-center">
            <b-col class="text-maroon text-s">ГВС</b-col>
          </b-row>
          <b-row class="mb-1 text-center" v-if="!show_3">
            <b-col cols="2">
              <label class="col-form-label">Имя УУ</label>
            </b-col>
            <b-col>
              <b-form-input size="sm" type="text" v-model="gvs.name"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="gutter-2 row">
            <b-col>
              <label class="col-form-label">Qmax</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="gvs.q"
                step="0.0000001"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="8"
                v-on:input="qgvs('qm')"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">Qсредн</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="gvs.qs"
                step="0.0000001"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="8"
                v-on:input="qgvs('qs')"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">Кчн</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="gvs.Kchn"
                step="0.01"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="4"
                v-on:input="qgvs('kc')"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">t1</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="gvs.t1"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">t2</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="gvs.t2"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">p1</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="gvs.p1"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">p2</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="gvs.p2"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="form-group mt-3" v-if="show_3">
          <b-row class="mb-1 text-center">
            <b-col class="text-maroon text-s">Вентиляция</b-col>
          </b-row>
          <b-row class="mb-1 text-center" v-if="!show_3">
            <b-col cols="2">
              <label class="col-form-label">Имя УУ</label>
            </b-col>
            <b-col>
              <b-form-input size="sm" type="text" v-model="ve.name"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="gutter-2 row">
            <b-col>
              <label class="col-form-label">Нагрузка</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ve.q"
                step="0.0000001"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="8"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">t1</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ve.t1"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">t2</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ve.t2"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">p1</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ve.p1"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
            <b-col>
              <label class="col-form-label">p2</label>
              <b-form-input
                size="sm"
                type="number"
                v-model.number="ve.p2"
                step="0.1"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="5"
              ></b-form-input>
            </b-col>
          </b-row>
        </div>
      </b-container>

      <template v-slot:modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button variant="danger" size="sm" class="float-right" @click="addUu">ADD</b-button>
          <b-button variant="primary" size="sm" class="float-right" @click="show=false">Close</b-button>
        </div>
      </template>
    </b-modal>

    <div>
      <b-table :items="uzels" :fields="fields" responsive="sm">
        <template v-slot:cell(show_)="row">
          <b-button
            size="sm"
            @click="row.toggleDetails"
            class="mr-2"
          >{{ row.detailsShowing ? 'Скрыть' : 'Показать'}}</b-button>
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <b-row>
              <b-col>
                <b-row v-for="(value, key) in row.item" :key="key" class="mb-2">
                  <b-col sm="3" class="text-sm-right">
                    <b>{{ key }}:</b>
                  </b-col>
                  <b-col>{{ value }}</b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row v-for="(value, name, index) in row.item.rash" :key="index" class="mb-2">
                  <b-col sm="3" class="text-sm-right">
                    <b>{{ name }}:</b>
                  </b-col>
                  <b-col>{{ value }}</b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-btn>Редактировать</b-btn>
          </b-card>
        </template>
      </b-table>
    </div>

    <!-- <div>
      <b-table-simple hover small caption-top responsive>
        <caption>Items sold in August, grouped by Country and City:</caption>
        <b-thead head-variant="dark">
          <b-tr>
            <b-th>Узел учета</b-th>
            <b-th>eeeee</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(value, key) in uzels" :key="key">
            <b-th rowspan="3">{{value.name}}</b-th>
            <b-th>
              <b-button size="sm" class="mr-2">erte</b-button>
            </b-th>
          </b-tr>
        </b-tbody>

        <template v-slot:row-details="row">
          <b-card>
            <b-row>
              <b-col>
                <b-row v-for="(value, key) in row.item" :key="key" class="mb-2">
                  <b-col sm="3" class="text-sm-right">
                    <b>{{ key }}:</b>
                  </b-col>
                  <b-col>{{ value }}</b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row v-for="(value, name, index) in row.item.rash" :key="index" class="mb-2">
                  <b-col sm="3" class="text-sm-right">
                    <b>{{ name }}:</b>
                  </b-col>
                  <b-col>{{ value }}</b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </template>
      </b-table-simple>
    </div>-->
  </div>
</template>
 <script>
import { mapState } from "vuex";
import * as myClass from "@/utils/clasess.js";
export default {
  components: {},
  data() {
    return {
      show: false,
      type: "",
      list_uu: [
        { text: "Теплоснабжение", value: "ts" },
        { text: "Отопление", value: "ot" },
        { text: "Вентиляция", value: "ve" },
        { text: "ГВС", value: "gvs" },
      ],
      uzels: [],
      show_1: false,
      show_2: false,
      show_3: false,
      fields: ["name", "show_"],
      ts_name: "Узел учета теплоснабжения",
    };
  },

  computed: {
    ...mapState({
      ot: (state) => state.Isx.isx_ot,
      ve: (state) => state.Isx.isx_ve,
      gvs: (state) => state.Isx.isx_gvs,
    }),
  },
  watch: {
    type(val) {
      switch (val) {
        case "ts":
          this.show_1 = true;
          this.show_2 = true;
          this.show_3 = true;
          break;
        case "ot":
          this.show_1 = true;
          this.show_2 = false;
          this.show_3 = false;
          break;
        case "ve":
          this.show_1 = false;
          this.show_2 = false;
          this.show_3 = true;
          break;
        case "gvs":
          this.show_1 = false;
          this.show_2 = true;
          this.show_3 = false;
          break;

        default:
          break;
      }
    },
    ot: {
      handler(val) {
        val.q > 100 ? (this.ot.q = this.ot.q / 1000) : this.ot.q / 1;
      },
      deep: true,
    },
    ve: {
      handler(val) {
        val.q > 100 ? (this.ve.q = this.ve.q / 1000) : this.ve.q / 1;
      },
      deep: true,
    },
  },
  methods: {
    qgvs(m) {
      switch (m) {
        case "qm":
        case "kc":
          this.gvs.q > 100 ? (this.gvs.q = this.gvs.q / 1000) : this.gvs.q;
          this.gvs.q > 0
            ? (this.gvs.qs = +(this.gvs.q / this.gvs.Kchn).toFixed(6))
            : (this.gvs.qs = "");
          break;
        case "qs":
          this.gvs.qs > 100 ? (this.gvs.qs = this.gvs.qs / 1000) : this.gvs.qs;
          this.gvs.qs > 0
            ? (this.gvs.q = +(this.gvs.qs * this.gvs.Kchn).toFixed(6))
            : (this.gvs.q = "");
          break;
      }
    },
    addUu() {
      let UU_ot;
      let UU_ve;
      let UU_gvs;
      let UU;
      switch (this.type) {
        case "ts":
          this.ot.q > 0 ? (UU_ot = new myClass.Usel(this.ot)) : "";
          this.ve.q > 0 ? (UU_ve = new myClass.Usel(this.ve)) : "";
          this.gvs.q > 0 ? (UU_gvs = new myClass.UselGvs(this.gvs)) : "";
          UU = new myClass.UselTs({ ot: UU_ot, ve: UU_ve, gvs: UU_gvs });
          break;
        case "ot":
          UU = new myClass.Usel(this.ot);
          break;
        case "ve":
          UU = new myClass.Usel(this.ve);
          break;
        case "gvs":
          UU = new myClass.UselGvs(this.gvs);
          break;
        default:
          break;
      }
      this.show_1 = false;
      this.show_2 = false;
      this.show_3 = false;
      this.uzels.push(UU);
      console.log(this.uzels);
      this.$store.dispatch("RESET_STATE");
      this.show = false;
    },
  },
};
</script>

<style scoped>
.gutter-2.row {
  margin-right: -1px;
  margin-left: -1px;
}
.gutter-2 > [class^="col"],
.gutter-2 > [class^=" col-"] {
  padding-right: 3px;
  padding-left: 3px;
}
.col-form-label {
  font-size: 0.65em;
  color: rgb(96, 113, 162);
}
.labl {
  text-align: left;
}
.form-control-sm {
  border-width: 1px;
  height: 25px;
  font-size: 0.75em;
  font-weight: bold;
}
.custom-select {
  border-width: 1px;
  height: 25px;
  font-size: 0.75em;
  font-weight: bold;
}
.form-control::placeholder {
  color: #868686 !important;
  opacity: 0.5 !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.errs {
  border-color: #dd4b39;
  background: #ff0015 !important;
  color: #ffffff;
}
.errs_y {
  background: #ff9901;
  color: #000000;
}
.text-blue {
  color: #0073b7 !important;
}
.text-maroon {
  color: #d81b60 !important;
}
.text-s {
  font-size: 14px;
  font-weight: bold;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
}
</style>
   