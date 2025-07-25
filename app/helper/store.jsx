import { create } from "zustand";

const useGlobalStore = create((set) => ({
  isNav: true,
  isProfile: false,
  listKonsol: [
    {
      id: 1,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Running",
      timer: "00:30",
    },
    {
      id: 2,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 3,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 4,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 5,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 6,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 7,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 8,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 9,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 10,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 11,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 12,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
  ],
  setKonsol: (param) => set(() => ({ listKonsol: param })),
  toggleNav: () => set((state) => ({ isNav: !state.isNav })),
  toggleProfile: () => set((state) => ({ isProfile: !state.isProfile })),
  falseProfile: () => set((state) => ({ isProfile: false })),
}));

export default useGlobalStore;
