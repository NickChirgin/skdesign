import { useState } from "react";
import styled from "styled-components";

type DropdownProps = {
  isActive?: boolean;
  children?: React.ReactNode;
  optionsData?: Record<string, string>[];
  isValid?: boolean;
}

const StyledDropdown = styled.div<DropdownProps>`
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.25px;
  color: #353238;
  padding: 18px 15px;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  &:focus {
    border: 2px solid #0086A8
  }
  
  border:${props => props.isValid && '2px solid #EB5E55'}

`;

const StyledDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 131px;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #353238;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  text-align: center;
  padding-top: 5px;
`;

const Dropdown: React.FC<DropdownProps> = ({ isActive=false, isValid, children, optionsData }) => {
  const [active, setActive] = useState(isActive);
  const [city, setCity] = useState('')
  return (
    <StyledDropdown onClick={() => setActive(prev => !prev)}>
      {city || children}
      {active && optionsData && optionsData.map(option => <StyledDiv key={option.id} onClick={() => setCity(prev => prev === option.name ? '' : option.name)}>{option.name}</StyledDiv>)}
    </StyledDropdown>
  )
}

export default Dropdown;