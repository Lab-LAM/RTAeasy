import React from "react";
import Conteudo from "../../components/Conteudo";
import Title from "../../components/Title";

const Data=[
    'Neste site você encontra um software desenvolvido com a colaboração da Universidade Federal do Tocantins (UFT) e a Universidade Federal de Lavras (UFLA). Aqui será possível ficar por dentro de todas as atualizações relacionadas ao software, além de entrar em contato com todos os envolvidos no projeto, adquirir o RTA easy através do download GRATUITO, e aprender a manuseá-lo facilmente',
    'Com RTA você poderá calcular a expressão gênica com vários tratamentos de vários genes de uma vez! Tudo oque você precisa são dos “crossing points” dos materiais do experimento. Relate seu experimento para o RTAeasy e ele monta a planilha para você e escolha entre os principais métodos utilizados, o delta delta CT (Livak) e Pfaffl. Dois métodos em uma ferramenta só e tudo isso GRÁTIS!',
    'Faça o seu trabalho de forma concreta e certa! Utilize o RTA easy e garanta ótimos resultados para seus trabalhos acadêmicos de forma rápida e prática! O software te dá várias opções para exportar o resultado, incluindo gráfico!',
    'APROVEITE E MUITO OBRIGADO(A) PELA SUA VISITA!'
]

const Home = ()=>{
    return(
        <>
            <Title title="Seja Bem Vindo"/>
            <Conteudo content={Data[0]}/>
            <Conteudo content={Data[1]}/>
            <Conteudo content={Data[2]}/>
            <Conteudo content={Data[3]}/>
        </>
    )
}

export default Home;