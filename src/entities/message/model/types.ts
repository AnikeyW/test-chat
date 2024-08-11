export interface IMessage {
  id: number;
  text: string;
  image: File | null;
  user: {
    id: number;
    name: string;
    avatar: string;
    position: string;
    status: "online" | "offline";
  };
  time: string;
}

export enum ChatInputModes {
  EDIT = "EDIT",
  NEW = "NEW",
}

export interface IMessagesState {
  messages: IMessage[];
  uploadedImage: File | null;
  setUploadedImage: (file: File | null) => void;
  uploadedImagePreviewSrc: string | null;
  setUploadedImagePreviewSrc: (src: string | null) => void;
  addMessage: (message: IMessage) => void;
  updateMessage: (id: number, text: string) => void;
  deleteMessage: (id: number) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  chatInputMode: ChatInputModes;
  setChatInputMode: (mode: ChatInputModes) => void;
  editingMessage: IMessage | null;
  setEditingMessage: (message: IMessage | null) => void;
}
