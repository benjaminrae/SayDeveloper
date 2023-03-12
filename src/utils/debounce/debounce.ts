const debounce = <T extends (...actionParameters: U[]) => void, U>(
  action: T,
  delay: number
) => {
  let timer: NodeJS.Timeout;

  return (...actionParameters: U[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      action(...actionParameters);
    }, delay);
  };
};

export default debounce;
