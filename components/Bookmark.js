import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bookmark from '../public/assets/icon-record.png';
import bookmarkSelected from '../public/assets/icon-record-selected.png';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
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

const CheckboxWrapper = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually

const Bookmark = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <CheckboxWrapper checked={checked}>
      <Image
        alt={(props) => (props.record.isChecked ? 'selected' : 'not selected')}
        src={(props) => (props.record.isChecked ? bookmarkSelected : bookmark)}
        width={10}
        height={10}
      />
    </CheckboxWrapper>
  </CheckboxContainer>
);

export default Bookmark;
