import { useRef, useState } from "react";
import "./Modal.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length >= 5;

const Modal = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
    price: true,
    description: true,
  });
  console.log(formInputsValidity);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const descriptionInputRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();

    const enteredtitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const enteredDescription = descriptionInputRef.current.value;

    // validating input form

    const enteredtitleIsValid = !isEmpty(enteredtitle);

    const enteredPriceIsValid = !isEmpty(enteredPrice);
    const enteredDescriptionIsValid = isFiveChars(enteredDescription);

    setFormInputsValidity({
      title: enteredtitleIsValid,
      price: enteredPriceIsValid,

      description: enteredDescriptionIsValid,
    });

    const formIsValid = enteredtitle && enteredPrice && enteredDescription;

    // valid comfirmation
    if (!formIsValid) {
      return;
    }

    console.log(enteredtitle);
    console.log(enteredPrice);
    console.log(enteredDescription);

    props.onConfirm({
      title: enteredtitle,

      price: enteredPrice,

      description: enteredDescription,
    });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Update Product</h1>
        </div>
        <div className="body">
          <form onSubmit={formHandler}>
           
            <input type="text" ref={titleInputRef} placeholder="title" />
            <input type="text" ref={priceInputRef} placeholder="price " />
            <textarea
              ref={descriptionInputRef}
              placeholder="description"
            ></textarea>
            <div className="footer">
              <button
                onClick={() => {
               props.setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
