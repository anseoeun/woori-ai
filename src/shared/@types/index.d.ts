interface User {
	userId: number
	loginId: string
	name: string
	userName?: string
	rights?: string
	daycareId?: string
	teacherId?: string
	childId?: string[]
	profileImg?: string
}

interface Rights {
	rightsCode: string
	userId: number | null
	daycareId: string
	userName: string
	teacherId?: string
	childId?: string
	childName: string
	classId: number | null
	className: string
}

interface Daycare {
	daycareId: string
	daycareName: number | null
	daycareType: string
	daycareZipcode: string
	daycareAddr: string
	daycareTel: string
	createdAt: string
	updatedAt: string
	delYn: string
	headtAddYn: string
}

interface Noti {
	noticeId: number
	noticeTitle: string
	noticeText: string
	noticeGb: string
	addTm: string
	addYn: string
	holdYn: string
	tempSaveYn: string
	daycareId: string
	createdId: number
	loginId: string
	createdName: string
	createdAt: string
}

interface PopClassRow {
	classId: string | null
	name: string
	total: number
	teacher: string
}

interface CommCodeProps {
	code: string
	name: string
	comment: string
}

interface Institute {
	daycareId?: string
	daycareName?: string
	daycareType?: string
	daycareZipcode?: string
	daycareAddr?: string
	daycareTel?: string
	createdAt?: string
	updatedAt?: string
	delYn?: string
	headtAddYn?: string
	headtName?: string
	imgFileId?: string
	fileDownloadId?: string
}

interface AgreeData {
	value: number
	essential: boolean
	label: string
}

interface AgreeTerm {
	value: number
	title: string
	contents: string
	execDate: string
	version: string
}

interface Reply {
	commentId: string
	parentCommentId?: string
	commentText: string
	createdDay: string
	createdTime: string
	level: string
	createdName: string
	createdLoginId: string
	src?: string
}

interface Class {
	classId: number
	teacherId: string
	teacherName: string
	daycareId: string
	className: string
	classGb: string
	classPax: string
	classNowPax: number
}

interface Dosage {
	files?: Array<File> | null
	remedy: {
		remedyId?: any
		remedyFromDate?: string
		remedyToDate?: string
		remedyCnt?: string
		remedyDesc?: string
		reqTmFirst?: string
		reqTmSecond?: string
		reqTmThird?: string
		reqTmFourth?: string
		reqTmFifth?: string
		reqTmSixth?: string
		reqTmSeventh?: string
		reqTmEighth?: string
		reqTmNinth?: string
		reqTmTenth?: string
		childId?: string
		childName?: string
		className?: string
		classGb?: string
		teacherName?: string
	}
}
