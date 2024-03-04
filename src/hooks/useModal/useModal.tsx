import React, { useState } from "react";

export default () => {
  let [modal, setModal] = useState(false);
  // IN CASE to extend modal functionality
  let [modalContent, setModalContent] = useState("I'm the Modal Content");

  let handleModal = (content: any) => {
    console.log("something");
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};