import { ref, computed } from 'vue';
// import * as myClass from '@/utils/clasess.js';
import { mapState } from 'vuex';

export function useArrayUu() {
	const userData = computed(() =>
		mapState({
			userData: (state) => state.Isx.state
		})
	);

	const uus = ref([]);
	const current = ref(null);

	const addUu = (uu) => {
		console.log(uu);
		console.log(userData);
		uus.value.push(uu);
	};
	const selectUu = (id) => {
		current.value = uus.value.find((r) => r.id == id);
	};

	const removeUu = (id) => {
		current.value = null;
		uus.value = uus.value.filter((r) => r.id !== id);
	};
	return { userData, uus, current, addUu, selectUu, removeUu };
}

// addUu() {
// 	let UU_ot;
// 	let UU_ve;
// 	let UU_gvs;
// 	let UU;
// 	switch (this.type) {
// 	  case "ts":
// 		this.ot.q > 0 ? (UU_ot = new myClass.Usel(this.ot)) : "";
// 		this.ve.q > 0 ? (UU_ve = new myClass.Usel(this.ve)) : "";
// 		this.gvs.q > 0 ? (UU_gvs = new myClass.UselGvs(this.gvs)) : "";
// 		UU = new myClass.UselTs({ ot: UU_ot, ve: UU_ve, gvs: UU_gvs });
// 		break;
// 	  case "ot":
// 		UU = new myClass.Usel(this.ot);
// 		break;
// 	  case "ve":
// 		UU = new myClass.Usel(this.ve);
// 		break;
// 	  case "gvs":
// 		UU = new myClass.UselGvs(this.gvs);
// 		break;
// 	  default:
// 		break;
// 	}
// 	this.show_1 = false;
// 	this.show_2 = false;
// 	this.show_3 = false;
// 	this.uzels.push(UU);
// 	console.log(this.uzels);
// 	this.$store.dispatch("RESET_STATE");
// 	this.show = false;
//   },
// },
