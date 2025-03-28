import { create } from 'zustand'

export const teacherStore = create((set: any) => ({
	teacherList: [],

	setTeacherList: (teacherList: any[]) => set({ teacherList }),
	clearTeacherList: () => set({ teacherList: [] }),
}))
