"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const router = useRouter();

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

  // const date = new Date(note.title).toLocaleDateString();
  // const handleClick = () => {
  //   console.log("Click", note.title);
  // };

  const handleGoBack = () => {
    const isSure = confirm("A you sure?");
    if (isSure) {
      router.back();
    }
  };

  return (
    // <div>NoteDetailsClient</div>
    <>
      <br />
      <p>{note.title}</p>
      <br />
      <p>{note.content}</p>
      <button onClick={handleGoBack}>Back</button>
      <br />
    </>
  );
};

export default NoteDetailsClient;
