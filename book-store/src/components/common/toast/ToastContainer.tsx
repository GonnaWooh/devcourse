import useToastStore from "@/store/toastStore";
import styled from "styled-components";

function ToastContainer() {
  return (
    <ToastContainerStyle>
      <h1>ToastContainer</h1>
    </ToastContainerStyle>
  );
}

const ToastContainerStyle = styled.div`
  position: fixed;
  top: 32px;
  right: 24px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default ToastContainer;
