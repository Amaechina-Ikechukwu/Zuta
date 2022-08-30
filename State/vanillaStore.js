import create from "zustand/vanilla";

const store = create(() => ({
  theme: "",
  number: 0,
  changeTheme: () => setState((state) => ({ theme: theme })),
}));
const { getState, setState, subscribe, destroy } = store;
export default store;
