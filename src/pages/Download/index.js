import React from "react";
import Conteudo from "../../components/Conteudo";
import Title from "../../components/Title";
import Button from 'react-bootstrap/Button';

const Download = ()=>{
    return(
        <div>
            <Title title="Download"/>
            <Conteudo content="Utilize o RTA easy em diversas plataformas! Fazendo o download GRATUITO você terá acesso ao software, ao artigo do nosso projeto e ao trabalho dos autores dos métodos utilizados no RTA easy!"/>
            <div style={{textAlign:'center'}}>
                <Button variant="dark"><a style={{fontSize:18, textDecoration:'none', color:'white'}} href="/">Baixe Agora</a></Button>
            </div>
        </div>
    )
}

export default Download;