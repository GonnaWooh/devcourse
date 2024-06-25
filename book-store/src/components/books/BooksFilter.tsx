import React from "react";
import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";

const BooksFilter = () => {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (id === null) {
      //전체 선택시 삭제
      newSearchParams.delete("category_id");
    } else {
      //선택시 아이디값 삽입
      newSearchParams.set("category_id", id.toString());
    }
    setSearchParams(newSearchParams);
  };
  //const currentCategory = searchParams.get('category_id');
  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    //얕은 복사 그런건가?
    console.log(searchParams.get("category_id"), "넌 뭐꼬");
    console.log(newSearchParams.get("category_id"), "이친구는?");
    if (newSearchParams.get("news")) {
      newSearchParams.delete("news");
    } else {
      newSearchParams.set("news", "true");
    }
    setSearchParams(newSearchParams);
  };
  return (
    <BooksFilterStyle>
      <div className="category">
        {category.map((el) => (
          <Button
            size="medium"
            // scheme={
            //   currentCategory === el.id?.toString() ? 'normal' : 'primary'
            // }
            scheme={!el.isActive ? "normal" : "primary"}
            onClick={() => handleCategory(el.id)}
            key={el.id}
          >
            {el.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="medium"
          scheme={searchParams.get("news") ? "normal" : "primary"}
          onClick={() => handleNews()}
        >
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  );
};

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;
  .category {
    display: flex;
    gap: 8px;
  }
`;

export default BooksFilter;
