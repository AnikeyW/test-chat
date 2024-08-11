import React from "react";
import styles from "./UploadButton.module.scss";
import FileUpload from "@/shared/components/fileUploud/FileUpload";
import useMessagesStore from "@/entities/message/model/useMessagesStore";

const UploadButton = () => {
  const setUploadedImage = useMessagesStore((state) => state.setUploadedImage);
  const setUploadedImagePreviewSrc = useMessagesStore(
    (state) => state.setUploadedImagePreviewSrc,
  );

  const onChangePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedImage(e.target.files[0]);
      if (!FileReader) return;
      const img = new FileReader();
      img.onload = () => {
        if (img.result && typeof img.result === "string") {
          setUploadedImagePreviewSrc(img.result);
        }
      };
      img.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <button className={styles.uploadButton}>
      <FileUpload accept={"image/*"} setFile={onChangePicture}>
        <div className={styles.buttonContent}>@</div>
      </FileUpload>
    </button>
  );
};

export default UploadButton;
