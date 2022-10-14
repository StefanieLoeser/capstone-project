import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bookmark from '../public/assets/icon-record.png';
import bookmarkSelected from '../public/assets/icon-record-selected.png';

// tried to adapt from this example:
//https://codesandbox.io/s/building-a-checkbox-component-with-react-and-styled-components-forked-zhddwm?file=/src/Checkbox.js:540-905

const Bookmark = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Image
        alt={(props) => (props.record.isChecked ? 'visible' : 'hidden')}
        src={(props) => (props.record.isChecked ? bookmarkSelected : bookmark)}
        width={16}
        height={16}
      />
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Bookmark;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  /* transition: all 150ms; */
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
