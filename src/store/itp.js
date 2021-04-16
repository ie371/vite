export default {
  state: () => ({
    project: {},
    data: {
      id: "",
      name: "ИТП",
      type: "",
      b_name: "",
      floor: "",
    },
    isx: {
      t1: 95,
      t2: 70,
      t11: 95,
      t21: 70,
      t3: 65,
      t4: 50,
      t1_l: 70,
      t2_l: 40,
      p1: "",
      p2: "",
    },
    vvod: {
      data: { type: "ot_", name: "Узел вводв" },
      du: { dut1: null, dut2: null },
      rpd: { rpd: "", rpd_du: "", rd_kvs: "" },
    },
    ot: {
      data: { type: "ot_", name: "Система отопления" },
      du: { dut11: null, dut21: null },
      valve: {
        name: "",
        cod: "",
        du: null,
        kvs: null,
        priv: "",
      },
      pump: {
        name: "",
        cod: "",
        du: null,
        g: null,
        n: "",
      },
      to: { name: "", cod: "" },
    },
    gvs: {
      data: { type: "gvs_", name: "Система ГВС" },
      uu: {
        di1: null,
        di2: null,
      },
    },
    atm: {
      tipSB: 0,
      pltr: ["gsm", "usba"],
    },
  }),

  getters: {},
  mutations: {},
  actions: {},
};
