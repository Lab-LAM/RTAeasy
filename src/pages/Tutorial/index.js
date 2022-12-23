import React from "react";
import Conteudo from "../../components/Conteudo";
import Title from "../../components/Title";
import {AiFillFile} from 'react-icons/ai'

const Tutorial = ()=>{
    return(
        <div>
            <Title title="Tutorial"/>
            <Conteudo content="Este guia tem como propósito explicar como analisar os experimentos de RTqPCR utilizando a ferramenta RTA easy. Por meio do uso desta ferramenta, o acesso e o desenvolvimento da pesquisa são simplificados, por reduzir o uso de recursos financeiros e diminuir o tempo necessário para o desenvolvimento de cada estudo."/>
            <div style={{textAlign:'center'}}>
                <a style={{textDecoration:'none', fontSize:18}} href="archives/tutorial/RTA_tutorial.pdf" target="_blank" download> <AiFillFile size={22}/> Manual de Instruções</a>
            </div>
        </div>
    )
}

export default Tutorial;