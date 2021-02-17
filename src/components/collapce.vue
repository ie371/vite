<template>
  <div
    class="flex justify-between bg-gray-600 rounded-sm text-center text-sm text-white mt-4 mx-2 cursor-pointer"
    @click="
      isOpen = !isOpen;
      $emit('hide', isOpen);
    "
  >
    <div></div>
    <div class="mb-1"><slot></slot></div>
    <div class="">
      <button type="button" class="block mt-1 mr-2 focus:outline-none">
        <svg
          class="h-4 w-4 fill-current text-white"
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          class="h-4 w-4 fill-current text-white"
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  //   emits: [],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>