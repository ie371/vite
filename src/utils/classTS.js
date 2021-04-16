import { rash_co, rash_gvs, gidr, speed } from "./FuncUu.js";

export class OBJ_TS {
  constructor(options) {
    this.data = options.DATA;
    this.data.id = Date.now().toString();
    this.ot = options.OT;
    this.gvs = options.GVS;
    this.atm = options.ATM;
    this.dop = options.DOP;
  }
  get rash() {
    let ot;
    let gvs;
    let G1vsum = Number();
    let G2vsum = Number();
    let G1msum = Number();
    let G2msum = Number();

    this.ot.isx.qco > 0 && this.ot.isx.qvent > 0
      ? (this.ot.isx.q = +(this.ot.isx.qco + this.ot.isx.qvent).toFixed(6))
      : (this.ot.isx.q = this.ot.isx.qco);

    ot = rash_co(this.ot.isx);
    gvs = rash_gvs(this.gvs.isx, this.data.type_gvs, this.ot.isx.t1);

    if (this.data.type_gvs == "1st" || this.data.type_gvs == "2st") {
      G1msum = (ot.G1m + gvs.G1m).toFixed(3);
      G2msum = (ot.G2m + gvs.G1m).toFixed(3);
      G1vsum = (G1msum / ot.PL1).toFixed(3);
      G2vsum = (G2msum / ot.PL2).toFixed(3);
      ot.G1m = G1msum;
      ot.G2m = G2msum;
      ot.G1v = G1vsum;
      ot.G2v = G2vsum;
    } else if (
      this.data.type_gvs == "open" ||
      this.data.type_gvs == "open_notim_cirk" ||
      this.data.type_gvs == "open_notim_tup"
    ) {
      G1msum = (ot.G1m + gvs.G1m).toFixed(3);
      G2msum = (ot.G2m + gvs.G2m).toFixed(3);
      G1vsum = (ot.G1v + gvs.G1v).toFixed(3);
      G2vsum = (ot.G2v + gvs.G2v).toFixed(3);
      ot.G1m = G1msum;
      ot.G2m = G2msum;
      ot.G1v = G1vsum;
      ot.G2v = G2vsum;
    }

    return { ot, gvs };
  }

  get gidr() {
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
    let gdr9 = speed(this.rash.ot.G9v, this.ot.uu.di9);
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

  toJSON() {
    return {
      data: this.data,
      atm: this.atm,
      ot: this.ot,
      gvs: this.gvs,
      rash: this.rash,
      gidr: this.gidr,
      dop: this.dop,
    };
  }
}
