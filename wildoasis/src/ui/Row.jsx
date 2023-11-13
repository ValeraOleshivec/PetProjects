import styled, { css } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.type === "vertical" &&
    css`
      gap: 1.6rem;
      flex-direction: column;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}
  
  display: flex
`;
Row.defaultProps = {
  type: "vertical",
};
export default Row;
