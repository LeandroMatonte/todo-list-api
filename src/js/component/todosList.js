import React, { useState } from "react";
import PropTypes from "prop-types";

export function TodosList(props) {
	const [selected, setSelected] = useState(-1);
	const mostrar = i => {
		setSelected(i);
	};
	return props.todos.map((element, index) => {
		return (
			<li
				onMouseOver={() => {
					mostrar(index);
				}}
				onMouseOut={() => {
					setSelected(-1);
				}}
				key={index}
				className="list-group-item d-flex justify-content-between border-left-0 border-top-0 border-right-0">
				<div className="mx-4">{element}</div>
				<div
					className={`${
						index == selected ? "" : "borrarTareaOculto"
					} mx-4`}>
					<a
						onClick={() => {
							props.todos.splice(index, 1);
							props.quitarDeLista();
						}}>
						<i className="fas fa-times"></i>
					</a>
				</div>
			</li>
		);
	});
}

TodosList.propTypes = {
	todos: PropTypes.array,
	quitarDeLista: PropTypes.func
};
