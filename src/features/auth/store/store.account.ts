type State = {
  token: string;
  username: string;
};

const state = (): State => ({
  token: "",
  username: "",
});

const getters = {
  isLoggedIn(state: State) {
    return Boolean(state.token && state.username);
  },
};

const mutations = {
  assignUserData(state: State, userData: State) {
    state.token = userData.token;
    state.username = userData.username;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
