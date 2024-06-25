import React, { useState } from "react";
import styled from "styled-components";
import { BookDetail } from "../../model/book.model";
import InputText from "../common/InputText";
import Button from "../common/Button";
import { addCart } from "../../api/carts.api";
import { Link } from "react-router-dom";
interface TProps {
  book: BookDetail;
}

const AddTokCart = ({ book }: TProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  //const showAlert = useAlert()
  const [cartAdded, setCartAdded] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleIncrese = () => {
    setQuantity(quantity + 1);
  };
  const handleDecresr = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  const addToCart = () => {
    // addCart({ book_id: book.id, quantity: quantity }).then(() => {
    //   //showAlert({"장바구니를 추가하였습니다."})
    //   alert('장바구니를 추가하였습니다.');
    // });
    const box = { book_id: book.id, quantity: quantity };
    alert(`장바구니를 추가하였습니다.`);
    console.log(box);
    setCartAdded(true);
    setTimeout(() => {
      setCartAdded(false);
    }, 3000);
  };
  return (
    <AddTokCartStyle $added={cartAdded}>
      <div>
        <InputText
          inputType="number"
          value={quantity}
          onChange={handleChange}
        />
        <Button size="medium" scheme="normal" onClick={handleIncrese}>
          +
        </Button>
        <Button size="medium" scheme="normal" onClick={handleDecresr}>
          -
        </Button>
      </div>
      <Button size="medium" scheme="primary" onClick={addToCart}>
        장바구니 담기
      </Button>
      {cartAdded && (
        <div className="added">
          <p>장바구니가 추가되었습니다.</p>
          <Link to="/cart">장바구니로 이동</Link>
        </div>
      )}
    </AddTokCartStyle>
  );
};
interface TStyleProps {
  $added: boolean;
}

const AddTokCartStyle = styled.div<TStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $added }) => ($added ? "1" : "0")};
    transition: all 0.5s ease;
    p {
      padding: 0 0 8px 0;
      margin: 0px;
    }
  }
`;

export default AddTokCart;
