import useToastStore from "hooks/useToast";

export const useToast = () => {
  const showToast = useToastStore((state) => state.addToast);
  return { showToast };
};
