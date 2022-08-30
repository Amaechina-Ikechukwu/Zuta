import create from "zustand";

const useStore = create((set) => ({
  theme: "",
  isSystemUI: false,
  changeTheme: (theme) => set((state) => ({ theme: theme })),
  setSystemUi: (bool) => set(() => ({ isSystemUI: bool })),
}));
export default useStore;
