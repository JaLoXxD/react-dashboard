export const LeftSidebar = ({ show, forwadedRef }) => {
	return (
		<>
			<div id="leftSidebarContainer" className={!show ? "hideSlidebar" : ""} ref={forwadedRef}>
				<ul className="wrapper">
					<li className="mainTitle">Shipment Search</li>
					<li className="subTitle">Shipment Number</li>
					<li>
						<textarea name="shipNum" id="shipNum" cols="30" rows="10"></textarea>
					</li>
					<div className="checkboxContainer">
						<li className="subTitle">Status</li>
						<div className="customCheckbox">
							<input type="checkbox" name="shipStatus" value="Auto Tendered" id="autoOpt" />
							<label htmlFor="autoOpt">Auto Tendered</label>
						</div>
						<div className="customCheckbox">
							<input type="checkbox" name="shipStatus" value="Auto Tendered" id="closedOpt" />
							<label htmlFor="closedOpt">Closed</label>
						</div>
						<div className="customCheckbox">
							<input type="checkbox" name="shipStatus" value="Auto Tendered" id="bolOpt" />
							<label htmlFor="bolOpt">BOL</label>
						</div>
					</div>
					<li className="subTitle">Ship Date</li>
					<li>
						<input id="shipDate" type="date" />
					</li>
					<li className="subTitle">Created Date</li>
					<li>
						<input id="createdDate" type="date" />
					</li>
					<li className="subTitle">Shipment Terms</li>
					<li>
						<select name="shipTerms" id="shipTerms">
							<option value="opt1">opt1</option>
							<option value="opt2">opt2</option>
							<option value="opt3">opt3</option>
						</select>
					</li>
				</ul>
			</div>
		</>
	);
};
