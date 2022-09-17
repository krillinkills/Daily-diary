import React from 'react';
import { useState, useEffect } from 'react';

function Write() {
  const [date, setDate] = useState('');
  useEffect(() => {
    let date = new Date().toDateString();
    date = date.slice(3);
    setDate(date);
  }, [date]);

  return (
    <div className="w-3/4 h-[850px]  flex flex-col justify-start p-4 bg-white rounded-2xl mx-10 py-10">
      <div className="text-gray-400 flex ">
        <span className="text-3xl font-bold drop-shadow-lg px-10">{date}</span>
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
