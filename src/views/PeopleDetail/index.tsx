import React from 'react';
import Link from "next/link";
import { API_BASE_URL } from "@/utils";

const getPeopleDetail = async (id: number) => {
  const res = await fetch(`${API_BASE_URL}/people/${id}`, {cache: 'no-store'});
  if (!res.ok) {
    throw new Error("A força não está do nosso lado");
  }
  return res.json();
}

const PeopleDetail = async ({ params }: { params: { id: number } }) => {
    const peopleDetail = await getPeopleDetail(params.id); // Esperar pela resolução da Promise
    return <div> <h2>{peopleDetail?.name}</h2> </div>;
};

export default PeopleDetail;
