type FormDataType = {
  key: string,
  image: any;
  content: string;
  inputType: string[];
};

export type FormLayoutProps = FormDataType & {
  gotoPrevious: () => void;
  gotoNext: () => void;
  show: (type: FormButton) => string;
  setObjectData: (data: string) => void;
  open: () => void;
  active: boolean;
};

export type FormProps = {
  data: FormDataType[]
  open: () => void;
};

export enum FormButton {
  Prev = 0,
  Next = 1,
};

