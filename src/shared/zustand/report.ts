import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const reportStore = create(
	persist(
		(set: any, get: any) => ({
			report: {
				newsId: null,
				newsDate: '',
				childId: '',
				childIds: [],
				isWrite: false,
			},
			setReportInfo: (args: any) => {
				set((prev: any) => ({
					...prev,
					report: { ...prev.report, ...args },
				}))
			},
		}),
		{
			name: 'report-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
