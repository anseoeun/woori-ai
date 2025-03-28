import { ROUTE_PATH, SRC_CHILD, SRC_COMM } from './constant'

export const convertTelNumberFormat = (tel: string) => {
	return tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
}
export const convertPhoneNumberFormat = (tel: string) => {
	return tel.replace(/^(\d{3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
}

export const isEmpty = (param: any): boolean => param === undefined || param === null
export const isEmptyString = (str: any): boolean => str === undefined || str === null || str === ''
export const isEmptyArray = (arr: Array<any> | undefined | null): boolean => arr === undefined || arr === null || arr.length < 1
export const isEmptyObject = (obj: any): boolean => obj === undefined || obj === null || Object.keys(obj).length < 1

export const formatLeftTimer = (timeLeft: number) => {
	const minutes = String(Math.floor((timeLeft / 60) % 60)).padStart(2, '0')
	const seconds = String(Math.floor(timeLeft % 60)).padStart(2, '0')
	return `${minutes}:${seconds}`
}
export const formatDateHypen = (dateStr: string) => {
	if (typeof dateStr === 'string' && dateStr.length === 8) {
		return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6)
	}
}
export const redirectLoginWithNext = (toast:any, router:any) => {
	toast('로그인이 필요합니다.')
	router.replace(ROUTE_PATH['03-01'])
}

export const downloadFile = (fileId: string) => {
	if (isEmptyString(fileId)) return
	window.location.href = proxySrcComm(fileId)
}

export const proxySrcComm = (src: string | undefined) => `${SRC_COMM}${src}`
export const proxySrcChild = (src: string | undefined) => `${SRC_CHILD}${src}`

export const convertHourMinute = (hour: string | number, minute: string | number) => `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`