export default {
	state: {
		name_prj: '',
		cod: '',
		name_ooo: '',
		adress: '',
		tip_obj: '',
		zakazchik: '',
		abonent: '',
		istochnik: '',
		resurscomp: '',
		checkTiul: 1,
		post1: '',
		post2: 'Разраб.',
		post3: 'Проверил',
		post4: '',
		post5: 'ГИП',
		surname1: '',
		surname2: '',
		surname3: '',
		surname4: '',
		surname5: ''
	},

	getters: {},
	mutations: {
		MU_REKV(Rekv, payload) {
			for (const [ key, value ] of Object.entries(payload)) {
				Rekv[key] = value;
			}
		}
	},
	actions: {
		LOAD_REKV(context, p) {
			context.commit('MU_REKV', p);
		}
	}
};
