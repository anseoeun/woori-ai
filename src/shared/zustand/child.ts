import { create } from 'zustand'

export const childStore = create((set: any) => ({
	childList: [],

	setChildList: (childList: any[]) => set({ childList }),
}))
