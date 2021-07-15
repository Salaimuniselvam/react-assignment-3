import React from "react"
import Icon from "./Components/Icons"
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const tictacArray = new Array(9).fill("")
const App =()=> {
    let [isCross,setIsCross] =useState(true)

    return (
        <div>
            <h1>Welcome to tictactoe <Icon choice="circle" /></h1>
        </div>
    )
}

export default App