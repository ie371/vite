import { rash_co, rash_gvs } from "./FuncUu.js";

export class Uz {
  constructor(options) {
    this.name = options.name;
    this.id = Date.now().toString();
  }
}

export class Usel extends Uz {
  constructor(options) {
    super(options);
    this.q = options.q;
    this.t1 = options.t1;
    this.t2 = options.t2;
    this.p1 = options.p1;
    this.p2 = options.p2;
  }
  get rash() {
    return rash_co(this.q, this.t1, this.t2, this.p1, this.p2);
  }
}

export class UselTs extends Uz {
  constructor(options) {
    super(options);
    options.ot ? (this.ot = options.ot) : "";
    options.ve ? (this.ve = options.ve) : "";
    options.gvs ? (this.gvs = options.gvs) : "";
  }
  // get rash() {
  //   // return rash_co(this.q, this.t1, this.t2, this.p1, this.p2);
  // }
}

export class UselGvs extends Uz {
  constructor(options) {
    super(options);
    this.q = options.q;
    this.qs = options.qs;
    this.t1 = options.t1;
    this.t2 = options.t2;
    this.p1 = options.p1;
    this.p2 = options.p2;
    this.Kchn = options.Kchn;
    this.knp = options.knp;
    this.ktp = options.ktp;
    this.beta = options.beta;
    this.txvL = options.txvL;
    this.txvZ = options.txvZ;
  }
  get rash() {
    return rash_gvs(
      this.q,
      this.qs,
      this.t1,
      this.t2,
      this.p1,
      this.p2,
      this.Kchn,
      this.knp,
      this.ktp,
      this.beta,
      this.txvL,
      this.txvZ,
      0,
      77
    );
  }
}

// export class UselVent {
//   constructor(_cou) {
//     // this.id = "uselVent_" + _cou;
//     // this.name = "Узел учёта вентиляции";
//     this.name = "uselVent_" + _cou;
//     this.id = "uselVent_" + _cou;
//     this.nazv = "Узел учёта вентиляции";
//     this.tipe = "showVentForm";
//     this.GIDR = {};
//     this.q = 0.512346;
//     this.t1 = 130;
//     this.t2 = 70;
//     this.p1 = 65;
//     this.p2 = 55;
//     this.sx_pr = 0;
//     this.fu = 0;
//   }
// }

// export class UselGvs {
//   constructor(_cou) {
//     // this.id = "uselGvs_" + _cou;
//     // this.name = "Узел учёта ГВС";
//     this.name = "uselGvs_" + _cou;
//     this.id = "uselGvs_" + _cou;
//     this.nazv = "Узел учёта ГВС";
//     this.tipe = "showGvsForm";
//     this.GIDR = {};
//     this.q = 0.514;
//     this.qs = 0.23;
//     this.Kchn = 2.2;
//     this.t3 = 60;
//     this.t4 = 50;
//     this.p3 = 55;
//     this.p4 = 45;
//     this.sx_pr = 0;
//     this.txvL = 15;
//     this.txvZ = 5;
//     this.t11 = "";
//     this.koef = 1;
//     this.Ktp = 0.25;
//     this.Knp = 0.8;
//     this.beta = 1.3;
//     this.tu = 0;
//   }
// }
