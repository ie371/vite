export default {
  state: {
    isx_ot: {
      name: "Узел учета отопления",
      type: "ot",
      q: "",
      t1: 95,
      t2: 70,
      p1: 50,
      p2: 40,
    },
    isx_ve: {
      name: "Узел учета вентиляции",
      type: "ve",
      q: "",
      t1: 95,
      t2: 70,
      p1: 50,
      p2: 40,
    },
    isx_gvs: {
      name: "Узел учета ГВС",
      type: "gvs",
      q: "",
      qs: "",
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
    },
  },

  getters: {},
  mutations: {
    mu_res(Isx) {
      Object.assign(Isx, getDefaultState());
    },
  },
  actions: {
    RESET_STATE(context) {
      context.commit("mu_res");
    },
  },
};

const getDefaultState = () => {
  return {
    isx_ot: {
      name: "Узел учета отопления",
      type: "ot",
      q: "",
      t1: 95,
      t2: 70,
      p1: 50,
      p2: 40,
    },
    isx_ve: {
      name: "Узел учета вентиляции",
      type: "ve",
      q: "",
      t1: 95,
      t2: 70,
      p1: 50,
      p2: 40,
    },
    isx_gvs: {
      name: "Узел учета ГВС",
      type: "gvs",
      q: "",
      qs: "",
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
    },
  };
};
