import { UploadFiles } from '@/entities'
import UploadInfo from './uploadinfo.style'

const _ = ({ files, max, onChange, txt, noti }: any) => {
	return (
		<UploadInfo className='hold-wrap'>
			<div className='visual-down-excel'>
				<i></i>
				<div className='txt'>
					보육통합 사이트의 <em>{txt} 정보 엑셀 파일</em>을
					<br />
					다운받아 등록해주세요.
				</div>
			</div>
			<UploadFiles files={files} max={max} placeholder='파일을 등록해주세요.' onChange={onChange} />
			{noti ? <p className='caution-noti'>반 정보 변경 시 {txt} 정보를 다시 등록 해야 합니다.</p> : null}
		</UploadInfo>
	)
}

export default _
