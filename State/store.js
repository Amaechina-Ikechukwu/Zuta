import create from "zustand";

const useStore = create((set) => ({
  theme: "",

  changeTheme: (theme) => set((state) => ({ theme: theme })),
}));
export default useStore;
