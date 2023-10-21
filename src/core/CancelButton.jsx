/** @format */

import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';


const CancelButton = (props) => {
	return (
		<div className={props.className}>
			{props.link ? (
				<Link
					className={`${
						props.sm ? 'text-sm' : 'text-xs'
					} flex items-center font-medium bg-green-400 text-white rounded-md py-2 px-4 h-9`}
					to={props.to}>
					{props.label}
				</Link>
			) : (
				<button
					className={`${
						props.sm ? 'text-sm' : 'text-xs'
					} flex items-center justify-center font-medium transition ease-in-out duration-400 bg-red-600 hover:bg-red-700 
          text-white rounded-md py-2 px-4 flex-1 h-9 disabled:bg-gray-400 disabled:cursor-not-allowed`}
					onClick={props.onClick}
					disabled={props.disabled}>
					{props.icon}
					{props.label}
				</button>
			)}
		</div>
	);
};

export default CancelButton;
