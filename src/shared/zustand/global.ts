import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// const WHITELIST_AUTH_ROUTER: Array<string> = ['AGREEMENT', 'SIGNIN_ID', 'SIGNIN_PW', 'PRIVACY'] as const

const initHeader = {
	type: 'none',
	title: '',
	back: false,
	menu: false,
	close: false,
	trash: false,
	dotmenu: false,
	menupop: false,
}

const initFooter = {
	fixed: false,
	reple: false,
	class: '',
}

const initReple = {
	fixed: false,
}

const initGnb = {
	open: false,
}

const initMenubar = {
	fixed: false,
}
// const initAuthPhone: { phoneNumber: string; prevRouter: (typeof WHITELIST_AUTH_ROUTER)[number]; tabIndex?: number } = {
// 	phoneNumber: '',
// 	prevRouter: 'NONE',
// 	tabIndex: 0,
// }

const initBackLogic = ''

export const globalStore = create(
	persist(
		(set: any, get: any) => ({
			header: initHeader,
			footer: initFooter,
			reple: initReple,
			gnb: initGnb,
			menubar: initMenubar,
			// authPhone: initAuthPhone,
			backLogic: initBackLogic,

			setHeader: (args: any) => {
				set((prev: any) => ({ ...prev, header: { initHeader, ...args } }))
			},
			setFooter: (args: any) => {
				set((prev: any) => ({ ...prev, footer: { initFooter, ...args } }))
			},
			setReple: (args: any) => set((prev: any) => ({ ...prev, reple: { initReple, ...args } })),
			setGnb: (args: any) => set((prev: any) => ({ ...prev, gnb: { initGnb, ...args } })),
			setMenubar: (args: any) => set((prev: any) => ({ ...prev, menubar: { initMenubar, ...args } })),
			// setAuthPhone: (args: { phoneNumber?: string; prevRouter?: (typeof WHITELIST_AUTH_ROUTER)[number]; tabIndex?: number }) => set((prev: any) => ({ ...prev, authPhone: { initAuthPhone, ...args } })),
			// clearAuthPhone: () => set((prev: any) => ({ ...prev, authPhone: initAuthPhone })),
			setBackLogic: (args: string) => set((prev: any) => ({ ...prev, backLogic: args })),
			clearBackLogic: () => set((prev: any) => ({ ...prev, backLogic: initBackLogic })),
		}),
		{
			name: 'global-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
