import React from 'react';
import Note from './Note';

const NoteList = ({ notes, updateNotes }) => {
  return (
    <div className="note-list">
      {notes
        ? notes.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                updateNotes={updateNotes}
              />
            );
          })
        : null}
    </div>
  );
};

export default NoteList;
