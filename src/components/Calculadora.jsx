import React, { useState } from "react";
import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculadora(){
        const[num, setNum] = useState(0);
        const[oldnum, setOldNum] = useState(0);
        const[operador, setOperador] = useState();
    function inputNum(e) {
        var input = e.target.value;
        if (num === 0) {
            setNum(input);
        }else{
            setNum(num+input)
        }
    }
    function clear(){
        setNum(0);
    }
    function porcentagem(){
        setNum(num / 100);
    }
    function changeSing(){
        if (num > 0){
            setNum(-num)
        }else{
            setNum(Math.abs(num));
        }
    }
    function operatorHendler(e) {
        var operatorInput = e.target.value;
        setOperador(operatorInput);
        setOldNum(num);
        setNum(0);
    }
    function calcular() {
        if (operador === "/") {
           setNum(parseFloat(oldnum) / parseFloat(num)); 
        }else if (operador === "X"){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }else if (operador === "-"){
            
            setNum(parseFloat(oldnum) - parseFloat(num));
        }else if (operador === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                <Box m={10}/>
                    <h1 className="resultado">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSing}>+/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button className="orange" onClick={operatorHendler} value="/">
                    /
                    </button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray"onClick={inputNum} value={9}>9</button>
                    <button className="orange"onClick={operatorHendler} value="X">X</button>
                    <button className="gray"onClick={inputNum} value={4}>4</button>
                    <button className="gray"onClick={inputNum} value={5}>5</button>
                    <button className="gray"onClick={inputNum} value={6}>6</button>
                    <button className="orange"onClick={operatorHendler} value="-">-</button>
                    <button className="gray"onClick={inputNum} value={1}>1</button>
                    <button className="gray"onClick={inputNum} value={2}>2</button>
                    <button className="gray"onClick={inputNum} value={3}>3</button>
                    <button className="orange"onClick={operatorHendler} value={"+"}>+</button>
                    <button className="gray" id="zero"onClick={inputNum} value={0}>0</button>
                    <button className="gray"onClick={inputNum} value={"."}>,</button>
                    <button className="orange" onClick={calcular}>=</button>
                </div>
            </Container>
        </div>
    );
}