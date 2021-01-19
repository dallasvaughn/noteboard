import React from 'react';
import ls from 'local-storage';

const Note = ({ id, title, body, updateNotes }) => {
  const handleClick = () => {
    const notes = ls.get('notes');
    const result = notes.filter((note) => note.id !== id);
    ls.set('notes', result);
    updateNotes();
  };

  return (
    <div className="note">
      <span className="note__delete" onClick={handleClick}>
        &times;
      </span>
      <h3 className="note__title">{title}</h3>
      <p className="note__body">{body}</p>
    </div>
  );
};

export default Note;
