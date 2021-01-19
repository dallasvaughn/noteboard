import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import NoteList from './components/NoteList';
import ls from 'local-storage';

const App = () => {
  const [notes, setNotes] = useState(ls.get('notes'));

  useEffect(() => {
    if (ls.get('notes')) {
      return;
    }

    ls.set('notes', [
      {
        id: 1,
        title: 'Example note',
        body:
          'Your notes will be listed here. To create a note, click the button in the bottom-right corner. To delete a note, click the X in the top-right corner of the note.',
      },
    ]);
    updateNotes();
  }, []);

  const updateNotes = () => {
    const updatedNotes = ls.get('notes');
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <Header />
      <main className="content">
        <Modal updateNotes={updateNotes} notes={notes} />
        <NoteList notes={notes} updateNotes={updateNotes} />
      </main>
    </div>
  );
};

export default App;
