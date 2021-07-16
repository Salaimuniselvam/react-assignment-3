import React from "react"
import Icon from "./Components/Icons"
import {Button,Container,Card,CardBody,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const tiktacArray = new Array(9).fill("")
const App =()=> {
    let [isCross,setIsCross] =useState(true)
    let [winMessage,setWinMessage]=useState("")

    const playAgain=()=>{
        setISCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }

    const findWinner=()=> {

        if(tiktacArray[0]==tiktacArray[1] && tiktacArray[0]==tiktacArray[2] && tiktacArray[0] != "") {
            setWinMessage(tiktacArray[0] + "has won")
        }
        else if (tiktacArray[3]==tiktacArray[4] && tiktacArray[3]==tiktakArray[5]&& tiktacArray[3] != ""){
            setWinMessage(tiktacArray[3] + "has won")
        }
        else if (tiktacArray[6]==tiktacArray[7] && tiktacArray[6]==tiktakArray[8]&& tiktacArray[6] != ""){
            setWinMessage(tiktacArray[6] + "has won")
        }
        else if (tiktacArray[0]==tiktacArray[3] && tiktacArray[0]==tiktakArray[6]&& tiktacArray[0] != ""){
            setWinMessage(tiktacArray[0] + "has won")
        }
        else if (tiktacArray[1]==tiktacArray[4] && tiktacArray[1]==tiktakArray[7]&& tiktacArray[1] != ""){
            setWinMessage(tiktacArray[1] + "has won")
        }
        else if (tiktacArray[2]==tiktacArray[5] && tiktacArray[2]==tiktakArray[8]&& tiktacArray[2] != ""){
            setWinMessage(tiktacArray[2] + "has won")
        }
        else if (tiktacArray[0]==tiktacArray[4] && tiktacArray[0]==tiktakArray[8]&& tiktacArray[0] != ""){
            setWinMessage(tiktacArray[0] + "has won")
        }
        else if (tiktacArray[2]==tiktacArray[4] && tiktacArray[2]==tiktakArray[6]&& tiktacArray[2] != ""){
            setWinMessage(tiktacArray[2] + "has won")
        }
    }

    const changeItem = () => {
        if(winMessage) {
            return toast("Game Over",{type:"success"})
        }
        if(tiktacArray[index]==""){
            tiktacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else{
            return toast("Occupied..!",{type:error})
        }
    }

    return (
        <Container className="p-5">
            <Row>
                <Col md={6} className="offset-md-3">
                    {/* {to display the winner message} */
                    
                    }
                    <div className="grid">


                    </div>
                </Col>
            </Row>

        </Container>
        
    )
}

export default App