import React, { useState } from "react";
import "./modal.css";

function Modal({ addFlashcard }) {
  const [modal, setModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSave = (e) => {
    e.preventDefault();
    addFlashcard({ question, answer });
    setQuestion("");
    setAnswer("");

    setShowAddedMessage(true);

    setTimeout(() => {
        setShowAddedMessage(false);
        setModal(false);  
      }, 3000); 
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Create Flashcard
      </button>



      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {showAddedMessage && (
                    <div className="flashcard-added-message">Flashcard added</div>
            )}
            <h2 style={{ textAlign: "center" }}>Add Flashcard</h2>
            <p>
              <form onSubmit={handleSave}>
                <label for="question">Question:</label>
                <textarea
                  class="input"
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type the question here.."
                  rows="2"
                ></textarea>
                <label for="answer">Answer:</label>
                <textarea
                  class="input"
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows="4"
                  placeholder="Type the answer here.."
                ></textarea>
                <button type="submit" id="save-btn">
                  Save
                </button>
              </form>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
