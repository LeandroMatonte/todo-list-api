import React from "react";
import PropTypes from "prop-types";

export function InputList(props) {
	return (
		<li className="list-group-item border-left-0 border-top-0 border-right-0">
			<form onSubmit={props.agregarLista}>
				<div className="mx-4">
					<input
						type="text"
						className="tarea form-control border-0 p-0"
						autoComplete="off"
						id="tarea"
						onChange={e => props.setearTask(e)}
						value={props.task}
						placeholder={
							props.pend == 0
								? "No tasks, add a task"
								: "What needs to be done?"
						}
					/>
				</div>
			</form>
		</li>
	);
}

InputList.propTypes = {
	agregarLista: PropTypes.func,
	setearTask: PropTypes.func,
	task: PropTypes.string,
	pend: PropTypes.number
};
