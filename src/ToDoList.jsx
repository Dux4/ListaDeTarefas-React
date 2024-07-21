import React, { useState } from "react";
import './ToDoList.css'
import EmptyListIcon from "./assets/ListaVazia.png"

function ToDoList() {

    

    const [lista, setLista] = useState([])
    const [novoItem, setnovoItem] = useState("")

    function adicionaItem(form) {
        form.preventDefault()

        if (!novoItem) {
            return
        }
        else {
            setLista([...lista, { text: novoItem, isCompleted: false }])
            setnovoItem("")
            document.getElementById('input-entrada').focus()
        }
    }

    function cliclou(index) {
        const listaAux = [...lista]
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setLista(listaAux)
    }

    function deleta(index) {
        const listaAux = [...lista]
        listaAux.splice(index, 1)
        setLista(listaAux)
    }

    function deletaTodos() {
        setLista([])
    }


    return (
        <>
            <div className="AddLista">
                <h1>Lista de Tarefas</h1>

                <form onSubmit={adicionaItem}>
                    <input id="input-entrada" type="text" value={novoItem} onChange={(e) => { setnovoItem(e.target.value) }} placeholder="Digite uma tarefa" />
                    <button className="add" type="submit" >Add</button>
                </form>
            </div>

            <div className="ShowList">
                <div style={{ textAlign: 'center' }}>
                    {
                        lista.length < 1
                            ?
                            <img className="EmptyListIcon" src={EmptyListIcon} />
                            :
                            lista.map((item, index) => (
                                <div key={index} className={item.isCompleted ? "item completo" : "item"}>
                                    <span onClick={() => { cliclou(index) }}> {item.text}</span>
                                    <button onClick={() => { deleta(index) }} className="del-btn">DELETE</button>
                                </div>

                            ))
                    }

                </div>
                {
                    lista.length > 0 &&
                    <button onClick={() => { deletaTodos() }}  className="delAll-btn" >Deletar Todas</button>

                }

            </div>

        </>
    )
}

export default ToDoList