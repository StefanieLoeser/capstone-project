import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bookmark from '../public/assets/icon-record.png';
import bookmarkSelected from '../public/assets/icon-record-selected.png';

// tried to adapt from this example:
//https://codesandbox.io/s/building-a-checkbox-component-with-react-and-styled-components-forked-zhddwm?file=/src/Checkbox.js:540-905

function Bookmark({
  toggleBookmark,
  id,
  collection,
  onSetCollection,
  checked,
  ...props
}) {
  console.log(checked);
  return (
    <>
      <HiddenCheckbox
        checked={checked}
        onChange={() => toggleBookmark(id, collection, onSetCollection)}
        {...props}
      />
      <StyledCheckbox
        onChange={() => toggleBookmark(id, collection, onSetCollection)}
        checked={checked}
      >
        <Image
          alt={checked ? 'selected' : 'not selected'}
          src={checked ? bookmark : bookmarkSelected}
          width={16}
          height={16}
        />
      </StyledCheckbox>
    </>
  );
}

export default Bookmark;

const CheckboxContainer = styled.div`
  /* display: inline-block; */
  vertical-align: middle;
`;

const StyledCheckbox = styled.div`
  display: inline;
  position: absolute;
  right: 0.5rem;
  justify-content: center;
  align-items: center;
  /* background-image: ${(props) =>
    props.checked
      ? "url('../public/assets/icon-record-selected.png')"
      : "url('../public/assets/icon-record.png')"}; */
  width: 24px;
  height: 24px;
  /* transition: all 150ms; */
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;
