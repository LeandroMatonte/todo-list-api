import React, { useState, useEffect } from "react";
import { TodosList } from "./todosList";
import { InputList } from "./inputList";

export function Home() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState({
		label: "",
		done: "false"
	});
	const [pend, setPend] = useState(0);

	useEffect(() => {
		obtenerTodos();
	}, []);

	const obtenerTodos = async () => {
		try {
			const res = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/lean"
			);
			const data = await res.json();
			if (Array.isArray(data)) {
				setTodos(data);
				setPend(data.length);
			} else {
				console.log(typeof data, "el tipo de dato no es permitido");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const enviarAApi = async newTodos => {
		try {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/lean", {
				method: "PUT",
				body: JSON.stringify(newTodos),
				headers: {
					"Content-Type": "application/json"
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	const agregarLista = e => {
		e.preventDefault();
		if (task.label.length != 0) {
			let newTodos = [...todos, task];
			setTodos(newTodos);
			let emptyTask = { label: "", done: false };
			setTask(emptyTask);
			setPend(pend + 1);
			enviarAApi(newTodos);
		}
	};

	const setearTask = e => {
		let task = {
			label: e.target.value,
			done: false
		};
		setTask(task);
	};

	const quitarDeLista = () => {
		setPend(pend - 1);
		console.log(todos);
		enviarAApi(todos);
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
							setearTask={setearTask}
							task={task.label}
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
