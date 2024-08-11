import { create } from "zustand";
import { ChatInputModes, IMessagesState } from "@/entities/message/model/types";
import { createJSONStorage, persist } from "zustand/middleware";

const useMessagesStore = create(
  persist<IMessagesState>(
    (set) => ({
      messages: [],
      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),
      updateMessage: (id, text) =>
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === id ? { ...msg, text } : msg,
          ),
        })),
      deleteMessage: (id) =>
        set((state) => ({
          messages: state.messages.filter((msg) => msg.id !== id),
        })),
      inputValue: "",
      chatInputMode: ChatInputModes.NEW,
      setChatInputMode: (mode) => set(() => ({ chatInputMode: mode })),
      setInputValue: (value) => set(() => ({ inputValue: value })),
      editingMessage: null,
      setEditingMessage: (message) => set(() => ({ editingMessage: message })),
      uploadedImage: null,
      setUploadedImage: (fileSrc) => set(() => ({ uploadedImage: fileSrc })),
      uploadedImagePreviewSrc: null,
      setUploadedImagePreviewSrc: (src) =>
        set(() => ({ uploadedImagePreviewSrc: src })),
    }),
    {
      name: "messages-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useMessagesStore;
