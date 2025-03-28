import { ButtonDefault, ButtonLink } from './button.style'

const _ = ({ children, type, className, as, to, target = '_self', disabled, onClick }: any) => {
	return as === 'a' ? (
		<ButtonLink className={className} to={to} target={target}>
			{children}
		</ButtonLink>
	) : (
		<ButtonDefault type='button' className={className} disabled={disabled} onClick={onClick}>
			{children}
		</ButtonDefault>
	)
}

export default _
