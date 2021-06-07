import React, {useState} from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap'
import styles from '../scss/email.module.scss'


const emailForm: React.FC = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('sending')

        let data = {
            name,
            email,
            message
        }

        fetch ('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response Received');
            if(res.status === 200) {
                console.log('Response Success!');
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            }
        })
    }
    
    return(
        <Form className={styles.email__wrapper}>
            <Row>
                <Col>
                    <h2 style={{textAlign:'center', paddingBottom:'1rem'}}>WANT TO REACH?</h2>
                </Col>
            </Row>  
            <Row style={{padding:'3rem 0'}}>
                <Col>
                    <Form.Label className={styles.email__label}>Name:</Form.Label>
                    <Form.Control onChange={(e)=>{setName(e.target.value)}} className={styles.email__row} type="text"/> 
                </Col>
                <Col>
                    <Form.Label className={styles.email__label}>Email:</Form.Label>
                    <Form.Control onChange={(e)=>{setEmail(e.target.value)}} className={styles.email__row} type="email"/>
                </Col>
            </Row>
            <Form.Label className={styles.email__label}>What's on your mind</Form.Label>
            <Form.Control onChange={(e)=>{setMessage(e.target.value)}} className={styles.email__row} as="textarea" type="text" rows={5}/>
            <Row className={styles.email__row__button}>
                <Button type="submit" className={styles.email__button} onClick={(e)=>{handleSubmit(e)}}> Send your mail! </Button>
            </Row>
        </Form>
    );
}

export default emailForm;