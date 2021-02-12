<template>
  <div class="container-fluid col labl">
    <div class="row">
      <div class="col">
        <span> {{}}</span>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="col-form-label">Название</label>
      </div>
      <div class="col">
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="form.name"
        />
      </div>
    </div>

    <div class="gutter-2 row mt-2">
      <div class="col">
        <label class="col-form-label">Нагрузка</label>
        <input
          class="form-control form-control-sm"
          type="number"
          v-model.number="form.q"
          step="0.0000001"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
      </div>
      <div class="col">
        <label class="col-form-label">t1</label>
        <input
          class="form-control form-control-sm"
          type="number"
          v-model.number="form.t1"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="col">
        <label class="col-form-label">t2</label>
        <input
          class="form-control form-control-sm"
          type="number"
          v-model.number="form.t2"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="col">
        <label class="col-form-label">p1</label>
        <input
          class="form-control form-control-sm"
          type="number"
          v-model.number="form.p1"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
      <div class="col">
        <label class="col-form-label">p2</label>
        <input
          class="form-control form-control-sm"
          type="number"
          v-model.number="form.p2"
          step="0.1"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="5"
        />
      </div>
    </div>

    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-dismiss="modal"
        @click="close"
      >
        Закрыть
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="submit"
        :disabled="!valid"
      >
        Создать
      </button>
    </div>
  </div>
</template>
 <script>
import { reactive, computed } from "vue";

export default {
  props: {
    onAdd: {
      type: Function,
      required: true,
    },
    type: {
      sel: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit("closepop");
    };
    const form = reactive({
      name: "",
      q: "",
      t1: "",
      t2: "",
      p1: "",
      p2: "",
    });

    const submit = () => {
      const uu_isx = {
        type: props.type,
        title: form.name.trim(),
        desc: form.q,
        id: Date.now().toString(),
      };
      // form.title = form.desc = "";
      props.onAdd(uu_isx);
      close();
    };

    const valid = computed(() => {
      return form.q;
    });

    return {
      form,
      submit,
      valid,
      close,
    };
  },
  data() {
    return {
      Q: null,
      t1: null,
      t2: null,
      type_uu: "ot",
    };
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
.custom-file-input {
  height: 25px;
  font-weight: bold;
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
</style>
   