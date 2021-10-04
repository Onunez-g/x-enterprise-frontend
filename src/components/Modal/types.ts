import { PropsWithChildren } from "react";

export interface DeleteModalProps  {
  setOpen: (value: boolean) => void
  onDelete: (value: any) => void
}

export interface ModalProps extends PropsWithChildren<any> {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  title: string;
  onOutsideClick?: true;
}