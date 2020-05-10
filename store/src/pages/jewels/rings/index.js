import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import './index.less'
import { getData } from '../../../components/fetch/index'

const { Meta } = Card;

class Rings extends Component {

    state = {
        rings: []
    }

    componentDidMount() {
        this.loadRings()
    }

    async loadRings() {
        let rings = await getData("jewels", "tags", "anel")
        console.log("Aneis: ", rings)
        this.setState({ rings })
    }

    render() {
        let { rings } = this.state
        return (
            rings.map(ring =>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={ring.imageURI} />}
                                style={{ borderRadius: 10, width: 240 }}
                            >
                                <Meta title={ring.name} description={ring.description} />
                                <span style={{ color: "#780d54" }}>
                                    R$ {
                                        ring.price ?
                                            ring.price :
                                            " 0,00"
                                    }
                                </span>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        )
    }
}

export default Rings