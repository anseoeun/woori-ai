import { create } from 'zustand'

export const classStore = create((set: any) => ({
	classList: [],

	setClassList: (classList: any[]) => set({ classList }),
	clearClassList: () => set({ classList: [] }),
}))
