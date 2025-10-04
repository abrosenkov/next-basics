// "use client";

import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";
// import { useState } from "react";

const Notes = async () => {
  const response = await getNotes();
  // console.log("notes", notes);

  // const Notes = () => {
  //   const [notes, setNotes] = useState<Note[]>([]);
  //   const handleClick = async () => {
  //     const response = await getNotes();
  //     if (response) {
  //       setNotes(response);
  //     }
  //   };
  // console.log("notes", notes);

  return (
    <section>
      <h1>Notes List</h1>
      {/* <button onClick={handleClick}>Get my notes</button> */}
      {response.notes.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
};

export default Notes;
