import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

function Model({ name }) {
  const [show, setShow] = useState(false);
  console.log(name);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, reset } = useForm();
  function onSubmidHandler(data) {
    console.log(data);
    console.log("inside form");
    reset();
  }
  console.log("outside form");
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a note to {name} inbox
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Start writing your note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="form-outline"
            onSubmit={handleSubmit(onSubmidHandler)}
          >
            <textarea
              {...register("text")}
              className="form-control"
              id="text"
              rows="15"
            ></textarea>
            <label className="form-label" htmlFor="text"></label>
            <button
              className="btn btn-primary  my-4 px-5"
              onClick={handleClose}
            >
              Add
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Model;
