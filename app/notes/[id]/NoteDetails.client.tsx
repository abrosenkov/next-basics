"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notes", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !note) return <p>Some error..</p>;

  const date = new Date(note.createdAt).toLocaleDateString();
  const handleClick = () => {
    console.log("Click", note.text);
  };
  return (
    // <div>NoteDetailsClient</div>
    <>
      <br />
      <p>{note.text}</p>
      <br />
      <p>{date}</p>
      <button onClick={handleClick}>Edit</button>
      <br />
    </>
  );
};

export default NoteDetailsClient;
