import styled, { keyframes } from 'styled-components';
import logo from '../svg/logo.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = styled.img`
    animation: ${rotate} 7s linear infinite;
    width: 20rem;
    height: 20rem;
`;

export const Loader = () => {
    return (
        <Wrapper>
            <Spinner src={logo} />
        </Wrapper>
    );
};
