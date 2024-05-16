import React, { FunctionComponent } from 'react';
import Link from "next/link";
import { API_BASE_URL } from "@/utils";


interface PeopleDetailProps {
  params: {
    id: number;
  };
}

interface PeopleDetailResponse {
  name: string;

}
const getPeopleDetail = async (id: number): Promise<PeopleDetailResponse> => {
  try {
    const res = await fetch(`${API_BASE_URL}/people/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch person with id ${id}`);
    }
    return res.json();
  } catch (error: any) {
    throw new Error(`Failed to fetch person details: ${error.message}`);
  }
}



const PeopleDetail: FunctionComponent<PeopleDetailProps> = async ({ params }) => {
  const { id } = params;
  const peopleDetail = await getPeopleDetail(params.id);
  return <div> <h2>{peopleDetail?.name}</h2> </div>;
};

export default PeopleDetail;
