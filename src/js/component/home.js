import React, { useState } from "react";
import { TodosList } from "./todosList";
import { InputList } from "./inputList";

export function Home() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
	const [pend, setPend] = useState(0);

	const agregarLista = e => {
		e.preventDefault();
		if (task.length != 0) {
			setTodos([...todos, task]);
			setTask("");
			setPend(pend + 1);
		}
	};

	const quitarDeLista = () => {
		setPend(pend - 1);
	};

	return (
		<div className="container mt-5">
			<div className="encabezado">
				<p className="text-center">todos</p>
			</div>
			<div className="row d-flex justify-content-center">
				<div className="col-6">
					<ul className="shadow list-group border border-bottom-0 rounded-0">
						<InputList
							agregarLista={agregarLista}
							setearTask={e => setTask(e.target.value)}
							task={task}
							pend={pend}
						/>

						<TodosList
							todos={todos}
							quitarDeLista={quitarDeLista}
						/>

						<li className="footerTareas list-group-item border-left-0 border-top-0 border-right-0">
							{pend} {pend == 1 ? "item" : "items"} left
						</li>
					</ul>
					<div className="tarjeta1 shadow border"></div>
					<div className="tarjeta2 shadow border"></div>
				</div>
			</div>
		</div>
	);
}
