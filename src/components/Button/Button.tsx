import styled from 'styled-components';
import Loader from '../Loader/Loader';

type ButtonProps = {
  disabled?: boolean,
  isLoading?: boolean,
  children?: React.ReactNode,
}

export const StyledButton = styled.button`
  width: 156px;
  height: 50px;
  background: ${props => props.disabled ? '#E3E3E3' : '#0086A8'};
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  &:hover:enabled {
    background: #007693;
  }
  &:active:enabled {
    background: #00657E;
  }
`;

const Button: React.FC<ButtonProps> = ({ disabled=false, isLoading=false, children }) => {
  return (
    <>
      <StyledButton disabled={disabled || isLoading}>
        <Loader loading={isLoading}/>
        {children}
      </StyledButton>
    </>
    
  )
}

export default Button;


