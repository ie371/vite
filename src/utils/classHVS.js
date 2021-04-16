import { rash_co, rash_gvs, gidr, speed } from "./FuncUu.js";

export class OBJ_HVS {
  constructor(options) {
    this.data = options.DATA;
    this.data.id = Date.now().toString();
    this.hvs = options.HVS;
    this.atm = options.ATM;
    this.dop = options.DOP;
  }

  get gidr() {
    let gdr1 = gidr(
      this.hvs.isx.G1v,
      this.hvs.isx.G1v,
      this.hvs.isx.t1,
      this.hvs.isx.p1,
      this.hvs.uu.di1,
      this.hvs.uu.dut1,
      this.hvs.uu.tipL,
      this.hvs.uu.filter,
      0,
      this.hvs.uu.tipIm1,
      1
    );

    return { gdr1 };
  }

  toJSON() {
    return {
      data: this.data,
      atm: this.atm,
      hvs: this.hvs,
      gidr: this.gidr,
      dop: this.dop,
    };
  }
}
