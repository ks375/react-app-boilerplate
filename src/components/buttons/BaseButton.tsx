import React from 'react';
import styled from 'styled-components';
import { Button, IButtonProps } from '@zendeskgarden/react-buttons';

type BaseButtonProps = IButtonProps;

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  font-weight: bold;
`;

export default BaseButton;
