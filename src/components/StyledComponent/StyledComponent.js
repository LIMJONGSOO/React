import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: ${(props) => props.color || 'blue'};
  height: 100px;
`;

const StyledComponent = () => {
  return <Box>styled components</Box>;
};

export default StyledComponent;
