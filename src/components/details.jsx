import React from "react";

function Details({stats}) {
  return (
    <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center">
      <h2 className="text-sm mt-2">{stats.title}</h2>
      <div className="mt-2">
        <span className="text-4xl font-bold">{stats.value}</span>
        <span className="text-2xl">{stats.unit}</span>
      </div>
      <div className="flex mt-4">
      </div>
    </div>
  );
}

export default Details;
