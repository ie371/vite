import { iter_m, rash_gvs } from "./FuncItp";

export class OBJ_ITP {
  constructor(options) {
    this.data = options.DATA;
    this.data.id = Date.now().toString();
    this.isx = options.ISX;
    this.in = options.IN;
    this.ot = options.OT;
    this.vent = options.VENT;
    this.gvs = options.GVS;
    this.ot_arr = [];
    this.vent_arr = [];
    this.gvs_arr = [];
  }
  get rash() {
    let [qo, qokvt, goset, gosys] = iter_m(this.ot_arr);
    const ot_sum = {
      name: this.ot.data.name_sys,
      q: qo,
      qkvt: qokvt,
      g_set: goset,
      g_sys: gosys,
      t_set: this.isx.t1 + "/" + this.isx.t2,
      t_sys: this.isx.t11 + "/" + this.isx.t21,
    };
    const podp = {
      name: "Подпитка",
      g_set: this.ot.pump_p.g,
      t_set: this.isx.t2,
    };

    let [qv, qvkvt, gvset, gvsys] = iter_m(this.vent_arr);
    const vent_sum = {
      name: this.vent.data.name_sys,
      q: qv,
      qkvt: qvkvt,
      g_set: gvset,
      g_sys: gvsys,
      t_set: this.isx.t1 + "/" + this.isx.t2,
      t_sys: this.isx.t1 + "/" + this.isx.t2,
    };

    const ts_sum = {
      name: "",
      q: +(ot_sum.q + vent_sum.q).toFixed(6) || null,
      qkvt: +(ot_sum.qkvt + vent_sum.qkvt).toFixed(6) || null,
      g_set: +(ot_sum.g_set + vent_sum.g_set).toFixed(3) || null,
      g_sys: +(ot_sum.g_sys + vent_sum.g_sys).toFixed(3) || null,
      t_set_z: this.isx.t1 + "/" + this.isx.t2,
      t_set_l: this.isx.t1_l + "/" + this.isx.t2_l,
    };

    let [qg, qgkvt, ggset, ggsys] = iter_m(this.gvs_arr);
    const gvs_sum = {
      name: this.gvs.data.name_sys,
      q: qg,
      qs: +(qg / this.isx.kchn).toFixed(6) || null,
      qkvt: qgkvt,
      g_set: ggset,
      g_sys: ggsys,
      t_set_z: this.isx.t1 + "/" + this.isx.t2,
      t_sys_z: this.isx.t3 + "/" + this.isx.txv_z,
      t_set_l: this.isx.t1_l + "/" + this.isx.t2_l,
      t_sys_l: this.isx.t3 + "/" + this.isx.txv_l,
      G: rash_gvs(
        qg,
        qg / this.isx.kchn,
        this.isx.t3,
        this.isx.t4,
        this.isx.t1_l,
        this.isx.t2_l,
        this.isx.txv_z,
        this.isx.txv_l,
        this.isx.kchn,
        this.isx.ktp,
        this.gvs.data.sx
      ),
    };

    const set_sum = {
      name: "",
      q: +(ts_sum.q + gvs_sum.q).toFixed(6) || null,
      qkvt: +(ts_sum.qkvt + gvs_sum.qkvt).toFixed(6),
      g_set: +(ts_sum.g_set + gvs_sum.g_set).toFixed(3) || null,
      t_set_z: this.isx.t1 + "/" + this.isx.t2,
      t_set_l: this.isx.t1_l + "/" + this.isx.t2_l,
    };

    return {
      ot_sum,
      vent_sum,
      ts_sum,
      gvs_sum,
      set_sum,
      podp,
    };
  }

  toJSON() {
    return {
      data: this.data,
      isx: this.isx,
      in: this.in,
      ot: this.ot,
      gvs: this.gvs,
      vent: this.vent,
      rash: this.rash,
      ot_arr: this.ot_arr,
      vent_arr: this.vent_arr,
      gvs_arr: this.gvs_arr,
    };
  }
}
