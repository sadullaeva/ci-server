type Action = {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
};

export default Action;
