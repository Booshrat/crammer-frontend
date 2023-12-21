import React, { useState } from "react";
import "./modal.css";
import axios from 'axios';

function Modal({setFlashcards}) {
  const [modal, setModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };


  const handleSave = async (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem('token');
    const token = storedToken ? storedToken.split(' ')[1] : '';

    const response = await axios.post('https://reddy-34-xnzz.onrender.com/flashcard', { question, answer }, {
        headers: {
          Authorization: `${token}`
        }
      });

      try {
          const response = await axios.get('https://reddy-34-xnzz.onrender.com/flashcard', {
              headers: { Authorization: `${token}`}
          });
          setFlashcards(response.data);
          } catch (error) {
          console.error('Error fetching flashcards:', error);
      }

    setQuestion("");
    setAnswer("");

    setShowAddedMessage(true);

    setTimeout(() => {
        setShowAddedMessage(false);
        setModal(false);  
      }, 750); 
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Create Flashcard
      </button>



      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="modaloverlay"></div>
          <div className="modal-content">
            {showAddedMessage && (
                    <div className="flashcard-added-message">Flashcard added</div>
            )}
            <h2 style={{ textAlign: "center" }}>Add Flashcard</h2>
            <p>
              <form onSubmit={handleSave} className="modal-form">
                <label htmlFor="question">Question:</label>
                <br/>
                <textarea
                  className="modal-input"
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type the question here.."
                  rows="2"
                ></textarea>
                <br />
                <label htmlFor="answer">Answer:</label>
                <br/>
                <textarea
                  className="modal-input"
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
