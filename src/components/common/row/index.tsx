import styled from "styled-components";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

function Row({ children, className }: Props): JSX.Element {
  const childrenArray = React.Children.toArray(children);
  const columnSizeDenominator = childrenArray.length <= 12 || 12;

  const childrenWithProps = React.Children.map(childrenArray, (child) => {
    if (React.isValidElement(child)) {
      if (child.props.col > 1) {
      }
      return React.cloneElement(child, { columnSizeDenominator });
    }
    return child;
  });

  return <StyledDiv className={className}>{childrenWithProps}</StyledDiv>;
}

export default Row;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
