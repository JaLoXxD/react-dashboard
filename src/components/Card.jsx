export const Card = ({ value, text, icon }) => {
	return (
		<>
			<div className="customCard">
				<img src={icon} alt="" />
				<div className="cardContent">
					<span>{value}</span>
					<p>{text}</p>
				</div>
			</div>
		</>
	);
};
