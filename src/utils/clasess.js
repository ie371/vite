import { rash_co, rash_gvs, gidr, speed } from './FuncUu.js';

export class OBJ {
	constructor(options) {
		this.data = options.DATA;
		this.data.id = Date.now().toString();
		// this.isx_ot = options.OT.isx;
		// this.data_ot = options.OT.data;
		// this.uu_ot = options.OT.uu;
		// this.isx_gvs = options.GVS.isx;
		// this.data_gvs = options.GVS.data;
		// this.uu_gvs = options.GVS.uu;

		this.ot = options.OT;
		this.gvs = options.GVS;




	}
	get rash() {
		let ot
		let gvs
		let G1vsum = Number();
		let G2vsum = Number();
		let G1msum = Number();
		let G2msum = Number();

		// this.isx_ot.q > 0 ? ot = rash_co(this.isx_ot) : ''
		// this.isx_gvs.q > 0 ? gvs = rash_gvs(this.isx_gvs, this.data.type_gvs, this.isx_ot.t1) : ''

		ot = rash_co(this.ot.isx)
		gvs = rash_gvs(this.gvs.isx, this.data.type_gvs, this.ot.isx.t1)


		if (this.data.type_gvs == '1st' || this.data.type_gvs == '2st') {
			G1msum = (ot.G1m + gvs.G1m).toFixed(3)
			G2msum = (ot.G2m + gvs.G1m).toFixed(3)
			G1vsum = (G1msum / ot.PL1).toFixed(3);
			G2vsum = (G2msum / ot.PL2).toFixed(3);
			ot.G1m = G1msum
			ot.G2m = G2msum
			ot.G1v = G1vsum
			ot.G2v = G2vsum
		} else if (this.data.type_gvs == 'open') {
			G1msum = (ot.G1m + gvs.G1m).toFixed(3)
			G2msum = (ot.G2m + gvs.G2m).toFixed(3)
			G1vsum = (ot.G1v + gvs.G1v).toFixed(3)
			G2vsum = (ot.G2v + gvs.G2v).toFixed(3)
			ot.G1m = G1msum
			ot.G2m = G2msum
			ot.G1v = G1vsum
			ot.G2v = G2vsum
		}

		return { ot, gvs };
	}

	get gidr() {
		// function gidr(Gm, Gv, t, p, du_im, du_tr, tipL, filtr, ok, tipIM, PL)
		let gdr1 = gidr(
			this.rash.ot.G1m,
			this.rash.ot.G1v,
			this.ot.isx.t1,
			this.ot.isx.p1,
			this.ot.uu.di1,
			this.ot.uu.dut1,
			this.ot.uu.tipL,
			this.ot.uu.filter,
			0,
			this.ot.uu.tipIm1,
			this.rash.ot.PL1
		);

		let gdr2 = gidr(
			this.rash.ot.G2m,
			this.rash.ot.G2v,
			this.ot.isx.t2,
			this.ot.isx.p2,
			this.ot.uu.di2,
			this.ot.uu.dut2,
			this.ot.uu.tipL,
			this.ot.uu.filter,
			0,
			this.ot.uu.tipIm1,
			this.rash.ot.PL2
		);
		let gdr9 = speed(
			this.rash.ot.G9v,
			this.ot.uu.di9,
		);
		let gdr3 = gidr(
			this.rash.gvs.G1m,
			this.rash.gvs.G1v,
			this.gvs.isx.t1,
			this.gvs.isx.p1,
			this.gvs.uu.di1,
			this.gvs.uu.dut1,
			this.gvs.uu.tipL1,
			this.gvs.uu.filter,
			0,
			this.gvs.uu.tipIm1,
			this.rash.gvs.PL1
		);

		let gdr4 = gidr(
			this.rash.gvs.G2m,
			this.rash.gvs.G2v,
			this.gvs.isx.t1,
			this.gvs.isx.p2,
			this.gvs.uu.di2,
			this.gvs.uu.dut2,
			this.gvs.uu.tipL2,
			this.gvs.uu.filter,
			this.gvs.uu.ok,
			this.gvs.uu.tipIm2,
			this.rash.gvs.PL2
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
