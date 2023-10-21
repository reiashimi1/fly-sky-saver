/** @format */

import _ from 'lodash';
import { useSelector } from 'react-redux';

const FullPageSpinner = () => {
	const isActive = useSelector((state) => state.spinnerSlice.show);
	const message = useSelector((state) => state.spinnerSlice.text);

	if (!isActive) {
		return null;
	}

	return (
		<div
			className="w-full h-full fixed flex justify-center items-center top-0 left-0 z-50"
			style={{ backgroundColor: 'grey', opacity: '.7' }}>
			<span className="text-white flex flex-col items-center relative text-center">
				<div className="animate-bounce">{message}</div>
			</span>
		</div>
	);
};

export default FullPageSpinner;
