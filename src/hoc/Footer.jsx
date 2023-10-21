/** @format */

import { EyeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Footer = (props) => {

	return (
		<div className={props.className}>
			<div className="px-5 md:px-15 bg-gray-500">
				<div className="flex flex-col md:flex-row justify-between items-center text-white uppercase text-xs p-5 md:px-15 py-4 font-montserrat tracking-wide border-t leading-7">
					<a href="tel:+355697047231" className="flex flex-row items-center">
						<span className="mr-3">Tel:</span> +355 69 53 44 037
					</a>
					<div className="flex flex-1 flex-col md:flex-row justify-center">
						<a
							href="mailto:support@rpay.ai"
							className="flex flex-row items-center md:mx-10">
							<span className="mr-3">E-mail:</span> support@parkon.ai
						</a>
						<li className="flex flex-row flex-wrap items-center md:mx-10">
							<span className="mr-3">Address:</span> Wherever you are!
						</li>
					</div>
					<div>{new Date().getFullYear()}</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
