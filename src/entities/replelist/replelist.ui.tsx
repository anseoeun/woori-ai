import { userStore } from '@/shared'
import Button from '../button'
import Img from '../img'
import { RepleList } from './replelist.style'

const _ = ({ data, onPop }: any) => {
	const { user } = userStore()

	return (
		<RepleList className='reple-wrap'>
			<div className='tit'>
				<b>댓글 </b>
				<em>{data.length}</em>
			</div>
			{data.length > 0 ? (
				<ul className='reple-list'>
					{data.map((item: any, idx: any) => (
						<li key={`reple` + idx}>
							<div className='reple'>
								{/* {user.userId === item.userId && item.delYn === 'N' && ( */}
									<Button
										className='btn-dot-menu2'
										onClick={() => {
											onPop[0] && onPop[0]()
											onPop[1] &&
												onPop[1]({
													commentId: item.commentId,
													createdName: item.user,
													commentText: item.reple,
													taggedUserName: item.to,
													taggedUserId: item.toId,
												})
										}}
									/>
								{/* )} */}
								<div className='desc'>
									<div className='thumb'>
										<Img src={item.src} alt='' />
									</div>
									<div className='info'>
										<b>{item.user}</b>
										<span className='date'>
											<span>{item.date}</span>
											<span>{item.time}</span>
										</span>
									</div>
								</div>
								<div className='text'>
									{item.to ? <em>@{item.to} </em> : null}
									{item.reple}
								</div>
							</div>
						</li>
					))}
				</ul>
			) : (
				<div className='no-data type2'>댓글이 없습니다.</div>
			)}
		</RepleList>
	)
}

export default _
