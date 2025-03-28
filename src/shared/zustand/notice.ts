import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initNotice = {
	noticeId: null,
	noticeTitle: '',
	noticeText: '',
	noticeGb: 'common',
	addTm: '',
	addYn: 'N',
	holdYn: 'N',
	tempSaveYn: 'Y',
	daycareId: '',
	createdId: 0,
	loginId: '',
	createdName: '',
	classId: null,

	editorfiles: [],
	files: [],

	health: [],
}

export const noticeStore = create(
	persist(
		(set: any, get: any) => ({
			noticeId: null,
			noticeTitle: '',
			noticeText: '',
			noticeGb: 'common',
			addTm: '',
			addYn: 'N',
			holdYn: 'N',
			tempSaveYn: 'Y',
			daycareId: '',
			createdId: 0,
			loginId: '',
			createdName: '',
			classId: null,

			editorfiles: [],
			files: [],

			health: [],

			setNotice: (args: any) => {
				set((prev: any) => ({ ...prev, ...args }))
			},

			deleteNotice: () => {
				set(initNotice)
			},
		}),
		{
			name: 'notice-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
