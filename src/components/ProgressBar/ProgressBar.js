import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
// import VisuallyHidden from '../VisuallyHidden';

const ProgressBase = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  width: 370px;
  background: ${COLORS.transparentGray15};
  border: none;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  ::-webkit-progress-bar {
    background: inherit;
  }
  
  ::-moz-progress-bar {
    border-radius: 4px 0px 0px 4px;
    background: ${COLORS.primary};
  }

  ::-webkit-progress-value {
    border-radius: 4px 0px 0px 4px;
    background: ${COLORS.primary};
  }

  &[value="99"] {
    ::-moz-progress-bar {
      border-radius:  4px 2px 2px 4px;
    }

    ::-webkit-progress-value {
      border-radius:  4px 2px 2px 4px;
    }
  }
  
  &[value^="99."] {
    ::-moz-progress-bar {
      border-radius:  4px 3px 3px 4px;
    }

    ::-webkit-progress-value {
      border-radius:  4px 3px 3px 4px;
    }
  }
  
  &[value="100"] {
    ::-moz-progress-bar {
      border-radius: 4px;
    }

    ::-webkit-progress-value {
      border-radius: 4px;
    }
  }
`
const ProgressSmall = styled(ProgressBase)`
  height: 8px;
  border-radius: 4px;
  
  ::-webkit-progress-bar {
    border-radius: 4px;
  }
  `
const ProgressMedium = styled(ProgressBase)`
  height: 12px;
  border-radius: 4px;
  ::-webkit-progress-bar {
    border-radius: 4px;
  }
  `
const ProgressLarge = styled(ProgressBase)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;

  ::-webkit-progress-bar {
    border-radius: 8px;
  }
`

const ProgressBar = ({ label='Loading Progress', value, size='medium'}) => {
  const Progress = ({children, ...props}) => {
    if(size === 'small') {
      return <ProgressSmall {...props}>{children}</ProgressSmall>
    }
    if(size === 'large') {
      return <ProgressLarge {...props}>{children}</ProgressLarge>
    }
    if(size === 'medium') {
      return <ProgressMedium {...props}>{children}</ProgressMedium>
    }
    else throw new Error(`Invalid value passed for "size" prop: ${size}. The ProgressBar component supports the following sizes: "small", "medium", "large".`)
    }

  return <Progress 
    aria-label={label}
    aria-valuenow={value}
    max='100'
    size={size}
    value={value}
  ></Progress>
}

export default ProgressBar;
