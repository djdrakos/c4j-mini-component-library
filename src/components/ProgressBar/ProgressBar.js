import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--border-radius': 4 + 'px',
    '--padding': 0,
  },
  medium: {
    '--height': 12 + 'px',
    '--border-radius': 4 + 'px',
    '--padding': 0,
  },
  large: {
    '--height': 24 + 'px',
    '--border-radius': 8 + 'px',
    '--padding': 4 + 'px',
  },
}

const StyledProgress = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  height: var(--height);
  width: 100%;
  padding: var(--padding);
  background: ${COLORS.transparentGray15};
  border: none;
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;

/* Styles for Webkit browsers */
  ::-webkit-progress-bar {
    background: transparent;
    border-radius: 4px;
    overflow: hidden;
  }

  ::-webkit-progress-value {
    background: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
  }

/* Styles for Mozilla Browsers, the <progress> tag generates one pseudo element: "-moz-progress-bar".*/
  ::-moz-progress-bar {
    background: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
  }

/* Hacky workaround to trim corners of progress value on large size bar in Mozilla browsers */
  &[value^="99."] {
    ::-moz-progress-bar {
      border-radius:  4px 3px 3px 4px;
    }
  }

  &[value="100"] {
    ::-moz-progress-bar {
      border-radius: 4px;
    }
  }
`

const ProgressBar = ({ label='Loading Progress', value, size='medium'}) => {
  const styles = SIZES[size]
  if (!styles) throw new Error(`Invalid value passed for "size" prop: ${size}. The ProgressBar component supports the following sizes: "small", "medium", "large".`)

  return <StyledProgress 
    aria-label={label}
    aria-valuenow={value}
    max='100'
    size={size}
    style={styles}
    value={value}
  ></StyledProgress>
}

export default ProgressBar;
