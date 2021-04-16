<template>
  <div class="flex flex-row items-end">
    <div>
      <input
        type="text"
        class="text-xs w-full text-gray-300 outline-none border-transparent"
        disabled
        v-model="FileName"
        readonly
      />
    </div>
    <div class="pr-0">
      <label
        class="flex w-full justify-center px-1 text-green-500 rounded-md cursor-pointer hover:bg-blue hover:text-red-600"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>

        <input
          class="file"
          type="file"
          ref="file"
          :name="name"
          v-on:change="emitFileChange"
          v-show="false"
          :accept="acceptType"
        />
      </label>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
export default defineComponent({
  name: "FileInput",
  props: {
    name: {
      type: String,
      required: true,
    },
    isImage: {
      type: Boolean,
      default: false,
    },
    isPdf: {
      type: Boolean,
      default: false,
    },
    isText: {
      type: Boolean,
      default: false,
    },
    placeholderInputText: {
      type: String,
      default: () => "Выберите файл",
    },
    placeholderButtonText: {
      type: String,
      default: () => "Выберите файл",
    },
  },
  setup(props, context) {
    const file = ref(null);
    const FileName = ref(null);
    const name = ref(props.name);

    const acceptType = computed(() => {
      if (props.isExcel) {
        return ".xlsx, .xls";
      } else if (props.isWord) {
        return ".doc, .docx";
      } else if (props.isImage) {
        return "image/*";
      } else if (props.isVideo) {
        return "video/*";
      } else if (props.isPdf) {
        return "application/pdf";
      } else if (props.isText) {
        return "text/plain";
      } else {
        return "*";
      }
    });
    const buttonStyle = computed(() => {
      return `background-color: ${props.buttonBackgroundColor}; color: ${props.buttonTextColor};`;
    });
    const emitFileChange = () => {
      if (file.value.files.length > 0) {
        const fileAux = file.value.files[0];
        FileName.value = fileAux.name;
        const FileBlob = new Blob([file], {
          name: FileName.value,
          type: fileAux.type,
        });
        const fileURL = URL.createObjectURL(FileBlob);
        const response = {
          file: file.value.files[0],
          fileName: file.value.files[0].name,
          fileBlob: fileURL,
          fileType: fileAux.type,
        };
        context.emit("update:modelValue", response);
      } else {
        context.emit("update:modelValue", null);
        FileName.value = props.placeholderInputText;
      }
    };
    onMounted(() => {
      FileName.value = props.placeholderInputText;
    });
    return {
      name,
      FileName,
      acceptType,
      buttonStyle,
      emitFileChange,
      file,
    };
  },
});
</script>