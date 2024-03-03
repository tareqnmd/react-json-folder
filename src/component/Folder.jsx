import PropTypes from 'prop-types';
import { useState } from 'react';
import BoxShowIcon from './icons/BoxShowIcon';
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';
const Folder = ({ folder }) => {
	const [expand, setExpand] = useState(false);
	return (
		<div className="folder">
			<div
				className="folder-name"
				onClick={() => setExpand((prev) => !prev)}
			>
				{folder?.child?.length > 0 ? (
					expand ? (
						<MinusIcon />
					) : (
						<PlusIcon />
					)
				) : (
					<BoxShowIcon />
				)}
				{folder.title}
			</div>
			{expand && folder?.child?.length > 0 && (
				<div className="folder-child">
					{folder?.child?.map((item) => (
						<Folder
							key={item.id}
							folder={item}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Folder;
Folder.propTypes = {
	folder: PropTypes.object,
};
