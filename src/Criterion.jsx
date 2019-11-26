import React from 'react'
import {Select, Col, Row, Input} from 'antd'
import {loadTweets} from './Services/services'

export default function Criterion(){
    loadTweets()
    return (
        <Col>
            <Row>
                <Select />
            </Row>
            <Row>
                <Input />
            </Row>
        </Col>
    )
}