import styled from "styled-components";

type LoaderProps = {
  loading?: boolean
}

const StyledLoader = styled.div`
  transform: rotate(35deg);
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 3px solid #fff;
  border-right: 5px solid transparent;
  margin: 0 auto;
`;

const Loader: React.FC<LoaderProps>  = ({ loading = false }) => {
  return (
    loading ? <StyledLoader /> : null
  )
}

export default Loader;