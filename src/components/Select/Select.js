import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`

const StyledSelect = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: max-content;
  height: calc(1rem + 24px);
  padding: 12px 16px;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 1rem;

  ${NativeSelect}:hover + &{
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + &{
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} displayedValue={displayedValue} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <Icon id={'chevron-down'} size={24} strokeWidth={1.5} />
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
