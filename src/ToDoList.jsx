import React from "react";
import './ToDoList.css'

function ToDoList() {
    return (
        <>
        <div className="AddLista">
            <h1>Lista de Tarefas</h1>

            <form>
                <input type="text" placeholder="Digite uma tarefa" />
                <button className="add" type="submit" >Add</button>
            </form>
        </div>

        <div className="ShowList">
            <div className="item">
                <span>Tarefa de exemplo</span>
                <button className="del-btn">DELETE</button>
            </div>

            <div className="item completo" >
                <span>Tarefa de exemplo</span>
                <button className="del-btn">DELETE</button>
            </div>
            <button className="delAll-btn" >Deletar Todas</button>
        </div>

        </>
    )
}

export default ToDoList