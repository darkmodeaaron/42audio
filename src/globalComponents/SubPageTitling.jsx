import React from 'react';

const SubPageTitling = ({ title, sub }) => {
  return (
    <div className="titling px-4 py-12 overflow-visible my-0 mx-auto max-w-screen-md">
      <h1 className="custom text-6xl font-extrabold mb-12 text-heroBlue overflow-visible">{title}</h1>
      <h2 className="custom text-2xl text-right mb-20 text-heroBlue">{sub}</h2>
      <div className="w-full bg-heroBlue h-1"></div>
    </div>
  );
};

export default SubPageTitling;
