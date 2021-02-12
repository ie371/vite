import { ref } from 'vue';
export function useShow() {
	const show = ref(true);
	const toggleshow = () => {
		show.value = !show.value;
	};

	return { show, toggleshow };
}
