import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bookmark from '../public/assets/icon-record.png';
import bookmarkSelected from '../public/assets/icon-record-selected.png';

function Bookmark({
  toggleBookmark,
  id,
  collection,
  onSetCollection,
  checked,
}) {
  return (
    <>
      <StyledBookmark
        onClick={() => toggleBookmark(id, collection, onSetCollection)}
        checked={checked}
      >
        <Image
          alt={checked ? 'selected' : 'not selected'}
          src={checked ? bookmarkSelected : bookmark}
          width={20}
          height={20}
        />
      </StyledBookmark>
    </>
  );
}

export default Bookmark;

const StyledBookmark = styled.div`
  display: inline;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;
