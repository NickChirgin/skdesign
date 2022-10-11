import styled from "styled-components";

type InputProps = {
  children?: React.ReactNode;
  placeholder: string,
  type?: string;
  required?: boolean,
  minlength?: number,
  isValidated?: boolean;
}

const StyledInput = styled.input<InputProps>`
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.25px;
  color: #CDCAD0;
  padding: 18px 15px;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  &:focus {
    border: 2px solid #0086A8;
  }
  &:invalid {
    border: 2px solid #EB5E55;
  }

`;

const Input: React.FC<InputProps> = ({ children, isValidated, type='text', required=false, minlength, placeholder }) => {
  return (
    <>
      <StyledInput type={type} required={required} placeholder={placeholder} minLength={minlength} isValidated={isValidated}>{children}</StyledInput>
    </>
  )
}

export default Input;