import React from "react";
import Title from "../../components/Title";
import Equipe from "../../components/Equipe";
import Conteudo from "../../components/Conteudo";

const data = [
    {nome: 'Pâmela Marinho Rezende', url:'images/userF.png'},
    {nome: 'Mariana Brito Batista', url:'images/userF.png'},
    {nome: 'Wosley da Costa Arruda', url:'images/user.png'},
    {nome: 'Rafael Lima de Carvalho', url:'images/user.png'},
    {nome: 'Antonio Chalfun Junior', url:'images/user.png'},
    {nome: 'Horllys Gomes Barreto', url:'images/user.png'}
]

const Contatos = ()=>{
    return(
        <div>
            <Title title="Equipe"/>
            <div style={{display:'flex', justifyContent:'center', marginTop:30}}>
                {data.map((item, index)=> <Equipe nome={item.nome} url={item.url} key={index}/>)}
            </div>

            <Title title="Laboratórios"/>
            <Conteudo content="Laboratório Fisiologia Molecular de Plantas, Departamento de Biologia, Universidade Federal de Lavras, Lavras, MG, Brasil."/>
            <Conteudo content="Laboratório de Análises Moleculares (LAM), Departamento de Ciências da Vida, Universidade Federal do Tocantins, Palmas, TO, Brasil."/>
            <Conteudo content="Laboratório de Ciência da Computação, Universidade Federal do Tocantins, Palmas, TO, Brasil."/>

            <Title title="Contatos"/>
            <Conteudo content="Queremos ouvir a sua sugestão! Entre em contato para qualquer dúvida!"/>
            <p style={{marginLeft:50, fontSize:18, fontWeight:'bold'}}>E-mail: rta@uft.edu.com.br</p>
        </div>
    )
}

export default Contatos;