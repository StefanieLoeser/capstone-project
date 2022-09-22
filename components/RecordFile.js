import styled from 'styled-components';

export default function RecordFile({ record, onHandleChange }) {
  function changeHandler() {
    onHandleChange(record.CatalogId);
  }
  return (
    <Record>
      <Cover src={record.Cover} />
      <div>
        <BookmarkIcon
          checked={record.isChecked}
          type="checkbox"
          onChange={changeHandler}
        />
        <p>
          <strong>{record.Artist}</strong>
        </p>
        <p>
          <em>
            <strong>{record.Title}</strong>
          </em>
          , {record.Released}
        </p>
        <p>{record.Label}</p>
        <p>{record.Format}</p>
        <p>{record['Collection Media Condition']}</p>
      </div>
    </Record>
  );
}

const Record = styled.li`
  display: grid;
  position: relative;
  grid-template-columns: 25% 75%;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  width: 95%;
  box-shadow: 0px 0px 30px 10px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7rem;
`;

const Cover = styled.img`
  width: 70px;
`;

const BookmarkIcon = styled.input`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

{
  /* <BookmarkIcon
  width="22"
  height="22"
  viewBox="0 0 22 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <mask id="path-1-inside-1_1_2" fill="white">
    <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z" />
    <path d="M14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11Z" />
  </mask>
  <path
    d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z"
    fill="white"
  />
  <path
    d="M14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11Z"
    fill="white"
  />
  <path
    d="M21 11C21 16.5228 16.5228 21 11 21V23C17.6274 23 23 17.6274 23 11H21ZM11 21C5.47715 21 1 16.5228 1 11H-1C-1 17.6274 4.37258 23 11 23V21ZM1 11C1 5.47715 5.47715 1 11 1V-1C4.37258 -1 -1 4.37258 -1 11H1ZM11 1C16.5228 1 21 5.47715 21 11H23C23 4.37258 17.6274 -1 11 -1V1ZM13 11C13 12.1046 12.1046 13 11 13V15C13.2091 15 15 13.2091 15 11H13ZM11 13C9.89543 13 9 12.1046 9 11H7C7 13.2091 8.79086 15 11 15V13ZM9 11C9 9.89543 9.89543 9 11 9V7C8.79086 7 7 8.79086 7 11H9ZM11 9C12.1046 9 13 9.89543 13 11H15C15 8.79086 13.2091 7 11 7V9Z"
    fill="#5E5E5E"
    mask="url(#path-1-inside-1_1_2)"
  />
</BookmarkIcon> */
}
