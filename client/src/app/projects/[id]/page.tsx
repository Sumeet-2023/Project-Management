"use client"
import React, { useState } from 'react'
import ProjectHeader from '../ProjectHeader';

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTag={setActiveTab}/>
    </div>
  )
}

export default Project