import React from 'react';

function Write() {
  return (
    <div className="w-3/4 h-[850px]  flex flex-col justify-start p-4 bg-white rounded-2xl mx-10 py-10">
      <div className="text-gray-400">
        <h2 className="text-4xl font-bold mx-10 drop-shadow-lg">Date</h2>
      </div>
      <form className="flex">
        <textarea
          className="  drop-shadow-lg mx-10 px-4 py-4 my-4 w-full h-[710px] rounded-2xl mb-8"
          placeholder="Write your Day here...."
        ></textarea>
      </form>
    </div>
  );
}

export default Write;
