import styled from "styled-components";
import BookItem from "./BookItem";
import { TBook } from "../../model/book.model";
import { TPagination } from "../../model/pagination.model";

interface Props {
  pagination: TPagination;
  books: TBook[];
}

const BooksList = ({ pagination, books }: Props) => {
  // 현제페이지가 1이면 앞에 8개 보여주기
  // 현제페이가 2이면 뒤에 9부터 9개 보여주기
  books.slice();
  return (
    <BooksListStyle>
      {books.map((el, idx) => (
        <BookItem key={el.id} book={el} />
      ))}
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export default BooksList;
