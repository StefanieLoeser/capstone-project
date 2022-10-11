import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bookmark from '../public/assets/icon-record.png';
import bookmarkSelected from '../public/assets/icon-record-selected.png';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
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

const Bookmark = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <div checked={checked}>
      <Image
        alt={(props) => (props.isChecked ? 'visible' : 'hidden')}
        src={(props) => (props.record.isChecked ? bookmarkSelected : bookmark)}
        layout="responsive"
        width={24}
        height={24}
      />
    </div>
  </CheckboxContainer>
);

export default Bookmark;

// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
//   border-radius: 3px;
//   transition: all 150ms;

//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px pink;
//   }

//   ${Icon} {
//     visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
//   }
// `;
