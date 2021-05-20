import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

interface Props {
  show: boolean;
  handleClose: Function;
  formId: string;
  formTitle: string;
  form: JSX.Element;
}

export const ModalC = ({
  show,
  handleClose,
  formId,
  formTitle,
  form,
}: Props) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg-primary text-light" closeButton>
        <Modal.Title>{formTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{form}</Modal.Body>
      <Modal.Footer className="pt-0">
        <Button variant="outline-secondary" onClick={() => handleClose()}>
          Nazad
        </Button>
        <Button variant="primary" type="submit" form={formId}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
