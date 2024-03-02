import PropTypes from 'prop-types';
import { useState } from 'react';
const Folder = ({ folder }) => {
	const [expand, setExpand] = useState(false);
	return (
		<div className="folder">
			<strong
				className="folder-name"
				onClick={() => setExpand((prev) => !prev)}
			>
				{folder.name}
			</strong>
			{expand && (
				<div className="folder-child">
					{folder.items.map((item) => (
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
