import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--gap': 8 + 'px',
    '--icon-size': 16,
    '--input-font-size': 14 / 16 + 'rem',
    '--input-padding-block': 4 + 'px',
    '--stroke-width': 1,
  },
  large: {
    '--gap': 12 + 'px',
    '--icon-size': 24,
    '--input-font-size': 18 / 16 + 'rem',
    '--input-padding-block': 7 + 'px',
    '--stroke-width': 2,
  }
}

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: ${props => props.width};
  border-bottom: calc(var(--stroke-width) * 1px) solid ${COLORS.black};
  color: ${COLORS.gray700};

  :focus-within {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  :hover {
    color: ${COLORS.black};
  }
`

const StyledIcon = styled(Icon)`
  color: inherit;
`
const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  padding-block: var(--input-padding-block);
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--input-font-size);

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  ${Wrapper}:hover > &{
    color: ${COLORS.black};
  }

  :focus {
    outline: none;
  }
`

const IconInput = ({
  label,
  icon = 'search',
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size]
  if (!styles) throw new Error(`Invalid value passed for "size" prop: ${size}. The IconInput component supports the following sizes: "small", "large".`)

  return (
  <Wrapper style={styles} width={width}>
    <VisuallyHidden>
      <label for="icon">
        {label}
      </label>
    </VisuallyHidden>
    <StyledIcon id={icon} size={styles['--icon-size']} strokeWidth={styles['--stroke-width']} />
    <StyledInput placeholder={placeholder} style={styles}/>
  </Wrapper>
  )
};

export default IconInput;
