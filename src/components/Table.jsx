import { shipmentsInfo } from "../assets/js/shipmentsInfo";
import { useFetchApi } from "../hooks/useFetchApi";

export const Table = () => {
	const { isLoading, appointments } = useFetchApi();
	//console.log(isLoading);
	//console.log(appointments);
	/* const tableRows = shipmentsInfo.map((shipment, i) => {
		return (
			<tr key={i}>
				<td>
					<p className="tableSubtitle">Shipment Number</p>
					<p>{shipment.number}</p>
					<p className="tableSubtitle">Freight Bill Number</p>
					<p>{shipment.billNumber}</p>
					<p className="tableSubtitle">Status</p>
					<p>{shipment.status}</p>
				</td>
				<td>
					<p className="tableSubtitle">Origin</p>
					<p>{shipment.origin}</p>
				</td>
				<td>
					<p className="tableSubtitle">Transportation Provider</p>
					<p>{shipment.provider}</p>
					<p className="tableSubtitle">Expected Ship Date</p>
					<p>{shipment.expectedDate}</p>
				</td>
				<td>
					<p className="tableSubtitle">Destination</p>
					<p>{shipment.destination}</p>
				</td>
				<td>
					<p className="tableSubtitle">Terms</p>
					<p>{shipment.terms}</p>
					<p className="tableSubtitle">Total Weight</p>
					<p>{shipment.weight}</p>
					<p className="tableSubtitle">Qty</p>
					<p>{shipment.quantity}</p>
				</td>
				<td>
					<p className="tableSubtitle">Cost</p>
					<p className="shipmentCost">USD {shipment.cost}</p>
					<button>EDIT</button>
				</td>
			</tr>
		);
	}); */
	const tableRows = appointments.map((appointment) => {
		const { _id, type, created, date, finished } = appointment;
		return (
			<tr key={_id}>
				<td>
					<p className="tableSubtitle">Type:</p>
					<p>{type}</p>
				</td>
				<td>
					<p className="tableSubtitle">Created:</p>
					<p>{created}</p>
				</td>
				<td>
					<p className="tableSubtitle">Appointment Date:</p>
					<p>{date}</p>
				</td>
				<td>
					<p className="tableSubtitle">Finished:</p>
					<p className={`shipmentCost ${finished && "approved"}`}>{finished ? "Yes" : "No"}</p>
				</td>
			</tr>
		);
	});
	return (
		<>
			{isLoading && <p>Loading...</p>}
			<div className="tableContainer">
				<table id="shipmentsTable">
					<thead>
						<tr>
							<th colSpan={3}>Manage Shipments</th>
							<th>1523</th>
						</tr>
					</thead>
					<tbody>{tableRows}</tbody>
				</table>
			</div>
		</>
	);
};
