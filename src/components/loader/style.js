import styled from 'styled-components'

export const SpinProvider = styled.div`
width: 100%;
height: 100%;
min-height: ${props => (props.type === 'academic_info' || props.type === 'education') ? '40vh' : '100vh'};
display: flex;
align-items: center;
justify-content: center;
`