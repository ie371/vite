import { rash_co, rash_gvs, gidr, speed } from './FuncUu.js';

export class OBJ {
	constructor(options) {
		this.data = options.DATA;
		this.data.id = Date.now().toString();
		this.isx_ot = options.OT.isx;
		this.data_ot = options.OT.data;
		this.uu_ot = options.OT.uu;
		this.isx_gvs = options.GVS.isx;
		this.data_gvs = options.GVS.data;
		this.uu_gvs = options.GVS.uu;
	}
	get rash() {
		const rashod_ot = rash_co(this.isx_ot)
		const rashod_gvs = rash_gvs(this.isx_gvs)
		return { rashod_ot, rashod_gvs };
	}

	get gidr() {
		// function gidr(Gm, Gv, t, p, du_im, du_tr, tipL, filtr, ok, tipIM, PL)
		let gdr1 = gidr(
			this.rash.rashod_ot.G1m,
			this.rash.rashod_ot.G1v,
			this.isx_ot.t1,
			this.isx_ot.p1,
			this.uu_ot.di1,
			this.uu_ot.dut1,
			this.uu_ot.tipL,
			this.uu_ot.filter,
			0,
			this.uu_ot.tipIM,
			this.rash.rashod_ot.PL1
		);

		let gdr2 = gidr(
			this.rash.rashod_ot.G2m,
			this.rash.rashod_ot.G2v,
			this.isx_ot.t2,
			this.isx_ot.p2,
			this.uu_ot.di2,
			this.uu_ot.dut2,
			this.uu_ot.tipL,
			this.uu_ot.filter,
			0,
			this.uu_ot.tipIM,
			this.rash.rashod_ot.PL2
		);
		let gdr9 = speed(
			this.rash.rashod_ot.G9v,
			this.uu_ot.di9,
		);
		let gdr3 = gidr(
			this.rash.rashod_gvs.G1m,
			this.rash.rashod_gvs.G1v,
			this.isx_gvs.t1,
			this.isx_gvs.p1,
			this.uu_gvs.di1,
			this.uu_gvs.dut1,
			'kl',
			0,
			0,
			6,
			this.rash.PL1
		);

		let gdr4 = gidr(
			this.rash.rashod_gvs.G2m,
			this.rash.rashod_gvs.G2v,
			this.isx_gvs.t2,
			this.isx_gvs.p2,
			this.uu_gvs.di2,
			this.uu_gvs.dut2,
			'kl',
			0,
			0,
			6,
			this.rash.PL2
		);

		return { gdr1, gdr2, gdr9, gdr3, gdr4 };
	}
}

export class UzelTs {
	type = 'close';

	constructor(options) {
		// console.log('options', options);
		this.data = options.TS.data;
		this.data.id = 'ts_' + Date.now().toString();
		this.isx = options.TS.isx;
		this.syst = options.syst;
		// this.type = options.type;
	}

	type = 'close';

	get t_leto() {
		let t1;
		let id;
		let t1L;
		let t2L;

		let chot = this.syst.filter((r) => r.data.type == 'ot_');
		if (chot.length > 0) t1 = this.syst.filter((r) => r.data.type == 'ot_')[0].isx.t1;

		let ch = this.syst.filter((r) => r.data.type == 'gvs_');

		if (ch.length > 0 && chot.length > 0) {
			id = ch[0].data.id;
			t1L = ch[0].isx.t1L;
			t2L = ch[0].isx.t2L;
		}

		return { id, t1, t1L, t2L };
	}
	get rash() {
		let G1vsum = Number();
		let G2vsum = Number();
		let G1msum = Number();

		if (this.type == '1st' || this.type == '2st') {
			let chot = this.syst.filter((r) => r.data.type == 'ot_')[0];
			this.syst.map(function (el) {
				G1msum += el.rash.G1m || 0;
			});
			G1vsum = G1msum / chot.rash.PL1;
			G2vsum = G1msum / chot.rash.PL2;
		} else {
			this.syst.map(function (el) {
				G1vsum += el.rash.G1v || 0;
				G2vsum += el.rash.G2v || 0;
			});
		}

		return { G1vsum: G1vsum.toFixed(4), G2vsum: G2vsum.toFixed(4) };
	}
}
// export class OBJ {
// 	constructor(options) {
// 		this.id = 'obj_' + Date.now().toString();
// 		this.adress = options.data.adress;
// 		this.name = options.data.name;
// 		// this.type = options.data.type;
// 		// this.syst = options.syst;
// 		this.TS = options.data.TS;
// 	}
// }
