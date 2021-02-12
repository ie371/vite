<template>
  <div class="modalwrap" ref="wrapp">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ sel.text }}</h5>
          <button type="button" class="btn" aria-label="Close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form :onAdd="onAdd" :type="sel.value" @closepop="close" />
        </div>

        <!-- <div class="modal-footer">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Form from "./Form.vue";
export default {
  components: {
    Form,
  },
  props: {
    onAdd: {
      type: Function,
      required: true,
    },
    sel: {
      sel: Object,
      required: true,
    },
  },

  setup(props, { emit }) {
    const wrapp = ref(null);
    onMounted(() => {
      // console.log(props.sel);
      document.addEventListener("click", function (item) {
        if (item.target == wrapp.value) {
          close();
        }
      });
    });
    const close = () => {
      emit("closepopup");
    };

    return {
      close,
      wrapp,
    };
  },
};
</script>


<style scoped>
.modalwrap {
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>