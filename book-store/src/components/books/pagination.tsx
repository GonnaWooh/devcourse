import React from "react";
import styled from "styled-components";
import { TPagination } from "../../model/pagination.model";
import { LIMIT } from "../../constants/pagination";
import Button from "../common/Button";
import { useParams, useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/qurystring";

interface Props {
  pagination: TPagination;
}

const Pagination = ({ pagination }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalCount, currentPage } = pagination;
  const pages = Math.ceil(totalCount / LIMIT);
  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERYSTRING.PAGE, page.toString());
    setSearchParams(newSearchParams);
  };
  return (
    <PaginationStyle>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, idx) => (
              <li key={idx}>
                <Button
                  size="small"
                  scheme={idx + 1 === currentPage ? "primary" : "normal"}
                  onClick={() => handleClickPage(idx + 1)}
                >
                  {idx + 1}
                </Button>
              </li>
            ))}
        </ol>
      )}
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;
  ol {
    list-style: none;
    display: flex;
    gap: 8px;
    padding: 0px;
    margin: 0px;
  }
`;

export default Pagination;
