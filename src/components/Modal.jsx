import React, { useState } from 'react';
import ls from 'local-storage';

const Modal = ({ updateNotes, notes }) => {
  const [modalDisplay, setModalDisplay] = useState([{ display: 'none' }]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = () => {
    let id = Math.random();
    const notes = ls.get('notes');
    notes.push({ id, title, body });
    ls.set('notes', notes);
    updateNotes();
  };

  return (
    <div>
      <div
        className="modal-button"
        onClick={() => setModalDisplay([{ display: 'block' }])}
      >
        +
      </div>

      <div className="modal" style={modalDisplay[0]}>
        <div className="modal-content">
          <span
            className="modal-content__close"
            onClick={() => setModalDisplay([{ display: 'none' }])}
          >
            &times;
          </span>
          <form className="modal-content__note" onSubmit={onSubmit}>
            <input
              className="modal-content__note-title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              className="modal-content__note-body"
              type="text"
              placeholder="Note content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
            <button className="modal-content__note-button">Create note</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
