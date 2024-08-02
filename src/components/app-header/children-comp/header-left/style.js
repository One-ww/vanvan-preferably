import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.color.primaryColor};

  .logo {
    display: flex;
    cursor: pointer;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3px;
    padding-top: 3px;
  }
`
