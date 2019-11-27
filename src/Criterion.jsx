import React from 'react'
import {Select, Col, Row, Input, Button} from 'antd'
import {loadTweets} from './Services/services'

export default function Criterion({loadTwitter}){
    
    const onClickSearch= () => {
        loadTweets().then((result) => {
            console.log(result)
            const tweets = result.map(item => ({
                createdAt: item.created_at,
                text:item.text
            }))
            loadTwitter(tweets)
        })
    }
    return (
        <Col>
            <Row>
                <div>Select Index: </div>
                <Select />
            </Row>
            <Row>
                <div>Twitter user screen name:</div>
                <Input />
                <Button onClick={onClickSearch}>Search</Button>
            </Row>
        </Col>
    )
}