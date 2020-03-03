import styled from 'styled-components'

import { StyledColumn as Column } from '../grid/style'

export const StyledQuestionColumn = styled(Column)`
	display: flex;
	flex-wrap: wrap;
`

export const StyledTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	margin: auto;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 3rem;
	}
`

export const StyledLine = styled.hr`
	margin: 0.5rem auto 0;
	width: 40%;
	border: none;
	border-bottom: 5px solid ${props => props.theme.colors.yellow};
`

export const StyledText = styled.p`
	font-size: 1.125rem;
`