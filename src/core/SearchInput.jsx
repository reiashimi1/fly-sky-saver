import React from 'react';
import { Search } from 'tabler-icons-react';

export const SearchInput = (props) => {
  return (
    <div className={props.className}>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          className="block p-4 pl-8 border-1 border-gray-200 bg-white h-9 px-3 rounded-lg text-sm focus:ring-1 focus:ring-indigo-100 focus:outline-none w-full"
          type="text"
          name="search"
          placeholder={props.placeholder}
          onKeyUp={(e) => props.onKeyUp(e.target.value)}
        />
      </div>
    </div>
  );
};