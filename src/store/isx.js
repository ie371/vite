export default {

	state: () => ({
		project: {},
		DATA: {
			id: '',
			adress: 'Московская область, г. Жуковский, улица Энергетическая, дом 15',
			name: 'Узел учета теплоснабжения',
			type: 'close'
		},
		TS: {
			isx: { Gsum: 'сумма расходов' },
			data: { type: 'ts_', id: null, name: 'Система теплоснабжения' },
			uu: {
				di1: null,
				di2: null,
				di9: null,
				dut1: null,
				dut2: null,
				dut9: null,
				filter: 0,
				tipL: 0,
				izmL: false
			},
			itp: {
				di1: null,
				di2: null,
				di9: null,
				dut1: null,
				dut2: null,
				dut9: null,
				filter: 0,
				tipL: 0,
				izmL: false
			}
		},
		ot: {
			isx: { q: null, t1: 110, t2: 70, p1: 50, p2: 40, t11: 95, t21: 70, ps: 37, sx_ot: 0 },
			data: { type: 'ot_', name: 'Система отопления' },
			uu: {
				di1: null, di2: null, di9: null, dut1: null, dut2: null, dut9: null, tipIm1: 6, tipIm9: 5,
				filter: 0, filter_p: 0, tipL: 'kl', tipLp: "kl", izmL: false,
				otmetka_T1: "", otmetka_T2: "", otmetka_T9: "",
			}
		},
		gvs: {
			isx: {
				q: null, qs: null, t1: 60, t2: 50, p1: 50, p2: 40,
				Kchn: 2.2, knp: 0.8, ktp: 0.25, beta: 1.3, txvL: 15, txvZ: 5,
				sx_gvs: '',
				t1L: 70,
				t2L: 40,
				t1_ot: null
			},
			data: { type: 'gvs_', name: 'Система ГВС' },
			uu: {
				di1: null, di2: null, dut1: null, dut2: null, tipIm1: 6, tipIm2: 6,
				filter: 0, tipL1: 'kl', tipL2: 'kl', ok: false, izmL: false, otmetka_T3: "", otmetka_T4: ""
			}
		}
	}),

	getters: {},
	mutations: {
		mu_res(Isx) {
			Object.assign(Isx, getDefaultState());
		}
	},
	actions: {
		RESET_STATE(context) {
			context.commit('mu_res');
		}
	}
	// }

};

const getDefaultState = () => {
	return {
		DATA: {
			id: '',
			adress: '',
			name: 'Узел учета теплоснабжения',
			type: 'close'
		},
		TS: {
			isx: { Gsum: 'сумма расходов' },
			data: { type: 'ts_', id: null, name: 'Система теплоснабжения' },
			itp: {
				di1: null,
				di2: null,
				di9: null,
				dut1: null,
				dut2: null,
				dut9: null,
				filter: 0,
				tipL: 0,
				izmL: false
			}
		},
		ot: {
			isx: { q: null, t1: 95, t2: 70, p1: 50, p2: 40, t11: 95, t21: 70, ps: 37, sx_ot: 0 },
			data: { type: 'ot_', id: null, name: 'Система отопления' },
			uu: { di1: null, di2: null, di9: null, dut1: null, dut2: null, dut9: null, filter: 0, tipL: 0, izmL: false }
		},
		ve: {
			isx: { q: null, t1: 95, t2: 70, p1: 50, p2: 40, sx_ve: 0 },
			data: { type: 've_', id: null, name: 'Система вентиляции' },
			uu: { di1: null, di2: null, dut1: null, dut2: null, filter: 0, tipL: 0, izmL: false }
		},
		gvs: {
			isx: {
				q: null,
				qs: null,
				t1: 60,
				t2: 50,
				p1: 50,
				p2: 40,
				Kchn: 2.2,
				knp: 0.8,
				ktp: 0.25,
				beta: 1.3,
				txvL: 15,
				txvZ: 5,
				sx_gvs: '',
				t1L: 70,
				t2L: 40,
				t1_ot: null
			},
			data: { type: 'gvs_', id: null, name: 'Система ГВС' },
			uu: { di1: null, di2: null, dut1: null, dut2: null, filter: 0, tipL1: 0, tipL2: 0, ok: false, izmL: false }
		}
	};
};
