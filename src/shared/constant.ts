export const VALUE = {
	sPc: '915px',
	sMo: '914px',
	sPc2: '476px',
	sMo2: '475px',
	bFont: 'Montserrat, Pretendard, Sans-serif',
	bColor: '#383838',
}

export const COLOR = {
	primary: '#4252E2',
	secondary: '#4e47d6',
	black: '#000',
	red: '#DC0000',
	white: '#fff',
}

export const MX = {
	font: (f: any) => {
		return f.map((ft: any) => `@font-face { font-family: '${ft.font.split('-')[0]}';font-weight: ${ft.weight}; src: url(${process.env.PUBLIC_URL}/fonts/${ft.font}.${ft.format}) format(${ft.format}); ${ft.unicode ? 'unicode-range:' + ft.unicode : ''}}`)
	},
	src: (src: any) => {
		return `url(${process.env.PUBLIC_URL + src})`;
	},
	mq: (s?: any) => {
		for (let i = 160; i < 321; i++) {
			let num = String(16 - 0.02499999 * i)
			let dott = num.indexOf('.')
			s += `
			@media screen and (max-width: ${600 - i}px) {
				html {
					font-size: ${num.substring(0, dott + 6)}px;
				}
			}`
		}
		return s
	},
	media: (pc?: any, mo?: any) => {
		return `
		@media all and (min-width: ${VALUE.sPc}){
			${pc}
		}
		@media all and (max-width: ${VALUE.sMo}){
			${mo}
		}`
	},
	media2: (pc2?: any, mo2?: any) => {
		return `
		@media all and (min-width: ${VALUE.sPc2}){
			${pc2 || ''}
		}
		@media all and (max-width: ${VALUE.sMo2}){
			${mo2 || ''}
		}`
	},
	prefix: (s: any) => {
		return `&:-webkit-${s};${s};`
	},
	bg: (name: any, positon = '0 0', size = 'auto 100%') => {
		return `background: url('/images/" + ${name}) ${positon} no-repeat;background-size: ${size};`
	},
	ell: (num = 1) => {
		if (num > 1) {
			return `overflow: hidden; white-space: normal; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: ${num}; -webkit-box-orient: vertical; word-wrap: break-word; word-break: break-all;`
		} else {
			return `overflow: hidden; white-space: nowrap; text-overflow: ellipsis; word-break: break-all;`
		}
	},
	hide: () => {
		return `border: 0 !important; clip: rect(1px, 1px, 1px, 1px) !important; -webkit-clip-path: inset(50%) !important; clip-path: inset(50%) !important; height: 1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important; white-space: nowrap !important;`
	},
	placeholder: (c = '#A0A4BE') => {
		if (c) {
			return `&::placeholder { color: ${c}; }`
		} else {
			return `::-webkit-input-placeholder{color:${c};vertical-align:middle;font-size:1.4rem;}
        :-webkit-input-placeholder{color:${c};vertical-align:middle;font-size:1.4rem;}`
		}
	},
}

export const ROUTE_PATH = {
	// 01 메인
	'01-01': '/splash',
	// 02 회원가입
	'02-01': '/agreement/ruleAgree',
	'02-02': '/agreement/rule',
	'02-03': '/agreement/phone',
	'02-04': '/agreement/certify',
	'02-05': '/agreement/idRegister',
	'02-06': '/agreement/pwRegister',
	'02-07': '/agreement/joinComplete',
	// 03 로그인
	'03-01': '/signin/login',
	'03-02': '/signin/requestAccess',
	'03-03': '/signin/userFind',
	'03-04': '/signin/idCheck',
	'03-05': '/signin/pwChange',
	// 04 속성선택
	'04-01': '/property/service/choice',
	'04-02': '/property/center/search',
	'04-03': '/property/regist',
	'04-04': '/property/phone/check',
	'04-05': '/property/profile/regist',
	'04-06': '/property/complete',
	// 05 홈
	'05-01': '/home',
	// 06 공지사항
	'06-01': '/notice/list',
	'06-02': '/notice/write',
	'06-03': '/notice/write2',
	'06-04': '/notice/preview',
	'06-05': '/notice/detail',
	// 07 알림장
	'07-01': '/report/list',
	'07-02': '/report/write',
	'07-03': '/report/preview',
	'07-04': '/report/detail',
	// 08 앨범
	'08-01': '/album/albumMain',
	'08-02': '/album/write',
	'08-03': '/album/preview',
	'08-04': '/album/detail',
	// 09 출결
	'09-01': '/presence/main',
	'09-02': '/presence/detail',
	// 10 투약의뢰서
	'10-01': '/dosage/detail',
	'10-02': '/dosage/detail',
	'10-03': '/dosage/edit',
	// 11 귀가동의서
	'11-01': '/return/detail',
	'11-02': '/return/detail',
	'11-03': '/return/edit',
	// 13 일정등록
	'13-01': '/schedule/list',
	'13-02': '/schedule/edit',
	'13-03': '/schedule/detail',
	// 14 식단
	'14-01': '/meal/daily/main',
	'14-02': '/meal/daily/edit',
	'14-03': '/meal/monthly/main',
	'14-04': '/meal/monthly/edit',
	// 15 클라우드
	'15-01': '/cloud/home',
	'15-02': '/cloud/folder',
	'15-03': '/cloud/hold',
	// 18 AI위험감지
	'18-01': '/alert/main',
	'18-02': '/alert/unsolve',
	'18-03': '/alert/solve',
	'18-04': '/alert/report/edit',
	'18-05': '/alert/report/detail',
	// 19 원정보
	'19-01': '/institute/main',
	'19-02': '/institute/edit',
	// 20 선생님정보
	'20-01': '/teacher/list',
	'20-02': '/teacher/edit',
	'20-03': '/teacher/edit/check',
	// 21 반정보
	'21-01': '/class/list',
	'21-02': '/class/edit',
	'21-03': '/class/edit/check',
	// 22 원아정보
	'22-01': '/child/list',
	'22-02': '/child/detail',
	'22-03': '/child/edit',
	'22-04': '/child/bireport',
	'22-05': '/child/edit/check',
	// 23 전자출결정보
	'23-01': '/tag/main',
	'23-02': '/tag/edit',
	'23-03': '/tag/edit/confirm',
	// 24 개인정보설정
	'24-01': '/privacy/settingMain',
	'24-02': '/privacy/phoneChange',
	'24-03': '/privacy/pwChange',
	'24-04': '/privacy/pushSetting',
	'24-05': '/privacy/appInfo',
	'24-06': '/privacy/appInfo/license',
	'24-07': '/privacy/memberWithdraw',
}

export const SRC_COMM = `/api/comm/file/download?id=`
export const SRC_CHILD = `/api/daycare/child/ai/download?id=`

export const WEEKDAYS_KR: Array<string> = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
export const RESPONSE_OK: number = 200
export const STATUS_OK: string = 'ok'
export const STATUS_FAIL: string = 'fail'
export const COPYRIGHT: string = `ⓒ2024.INNODEP All. rights reserved.`
export const REGEXP_PHONE = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
export const REGEXP_TEL = /^(01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}|0(?:2-\d{3}|\d{2}-\d{3}|\d{2}-\d{4})-\d{4})$/
export const REGEXP_PASSWORD = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?_]).{8,16}$/
export const REGEXP_NUMBER = /[^0-9.]/g
export const REGEXP_ID = /^[a-z\d]{6,}$/
export const REGEXP_PW = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*?_-])[A-Za-z\d!@#$%^&*?_-]{8,}$/g
export const REGEXP_NAME = /^[ㄱ-힣a-zA-Z]{2,10}$/

export const CHARACTER_ICON = {
	토끼: 'character-rabbit',
	코알라: 'character-koala',
	나무늘보: 'character-sloth',
	비버: 'character-beaver',
	알파카: 'character-alpaca',
	돌고래: 'character-dolphin',
}

export const AGREE_DATA: Array<AgreeData> = [
	{ value: 1, essential: true, label: '이용약관에 동의합니다.' },
	{ value: 2, essential: true, label: '개인정보처리 및 활용 동의합니다.' },
	{ value: 3, essential: true, label: '서비스 이용정책에 동의합니다.' },
	{ value: 4, essential: true, label: '14세 이상입니다.' },
	{ value: 5, essential: false, label: '마케팅 정보수집' },
]

export const AGREE_TERM: Array<AgreeTerm> = [
	{ value: 1, title: '이용약관', contents: '이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관', execDate: '20230202', version: '1' },
	{ value: 2, title: '개인정보수집 및 이용', contents: '개인정보수집 및 이용개인정보수집 및 이용개인정보수집 및 이용개인정보수집 및 이용개인정보수집 및 이용', execDate: '20240403', version: '2' },
	{ value: 3, title: '위치기반서비스 이용약관', contents: '위치기반서비스 이용약관위치기반서비스 이용약관위치기반서비스 이용약관위치기반서비스 이용약관위치기반서비스 이용약관', execDate: '20211122', version: '2' },
	{ value: 4, title: '민감정보 수집 동의', contents: '민감정보 수집 동의민감정보 수집 동의민감정보 수집 동의민감정보 수집 동의민감정보 수집 동의', execDate: '20201104', version: '3' },
	{ value: 5, title: '마케팅 정보 수신 동의', contents: '마케팅 정보 수신 동의마케팅 정보 수신 동의마케팅 정보 수신 동의마케팅 정보 수신 동의마케팅 정보 수신 동의', execDate: '20221203', version: '10' },
]

export const RIGHTS_DATA = {
	HEADT: '원장선생님',
	TCHER: '선생님',
	PRENT: '학부모님',
}
export const DOSAGE_TIME_OPTIONS = [
	{ value: 'DOS01', label: '식전 30분' },
	{ value: 'DOS02', label: '식후 30분' },
	{ value: 'DOS03', label: '식사시' },
	{ value: 'DOS04', label: '지정 시간' },
]

export const FILE_MAX_SIZE: number = 1000000
