import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';

import './index.less'

const { Meta } = Card;
const joias = [
    {
        "nome": "Colar",
        "imagem": "https://franciscajoias.vteximg.com.br/arquivos/ids/173893-1000-1000/Colar-com-pingente-de-coracao-vermelho-e-elos-folheado-em-ouro-18k---3150000001625-01.jpg?v=636882750768330000",
        "descricao": "Colar com pingente de coração vermelho e elos folheado em ouro 18k"
    },
    {
        "nome": "Colar",
        "imagem": "https://franciscajoias.vteximg.com.br/arquivos/ids/173893-1000-1000/Colar-com-pingente-de-coracao-vermelho-e-elos-folheado-em-ouro-18k---3150000001625-01.jpg?v=636882750768330000",
        "descricao": "Colar com pingente de coração vermelho e elos folheado em ouro 18k"
    },
    {
        "nome": "Colar",
        "imagem": "https://franciscajoias.vteximg.com.br/arquivos/ids/173893-1000-1000/Colar-com-pingente-de-coracao-vermelho-e-elos-folheado-em-ouro-18k---3150000001625-01.jpg?v=636882750768330000",
        "descricao": "Colar com pingente de coração vermelho e elos folheado em ouro 18k"
    },
    {
        "nome": "Colar",
        "imagem": "https://franciscajoias.vteximg.com.br/arquivos/ids/173893-1000-1000/Colar-com-pingente-de-coracao-vermelho-e-elos-folheado-em-ouro-18k---3150000001625-01.jpg?v=636882750768330000",
        "descricao": "Colar com pingente de coração vermelho e elos folheado em ouro 18k"
    },
    {
        "nome": "Colar",
        "imagem": "https://franciscajoias.vteximg.com.br/arquivos/ids/173893-1000-1000/Colar-com-pingente-de-coracao-vermelho-e-elos-folheado-em-ouro-18k---3150000001625-01.jpg?v=636882750768330000",
        "descricao": "Colar com pingente de coração vermelho e elos folheado em ouro 18k"
    },
    {
        "nome": "Colar",
        "imagem": "https://franciscajoias.vteximg.com.br/arquivos/ids/173893-1000-1000/Colar-com-pingente-de-coracao-vermelho-e-elos-folheado-em-ouro-18k---3150000001625-01.jpg?v=636882750768330000",
        "descricao": "Colar com pingente de coração vermelho e elos folheado em ouro 18k"
    },
]

class Necklaces extends Component {
    render() {
        return (
            joias.map(joia =>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={joia.imagem} />}
                                style={{ borderRadius: 10, width: 240 }}
                            >
                                <Meta title={joia.nome} description={joia.descricao} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        )
    }
}

export default Necklaces