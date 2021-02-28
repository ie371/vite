import { ref } from 'vue';
export function useToggle() {
	const visible = ref(false);

	const toggle = () => {
		// console.log("visible====", visible);
		visible.value = !visible.value;
	};
	return { visible, toggle };
}