import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Email from '../components/emailForm'
import homeStyles from '../scss/homepage.module.scss'
import Card from '../components/card'
import cn from 'classnames'

import codePic from '../public/images/codeImg.jpg'
import reachPic from '../public/images/reach.jpg'
import torontoPic from '../public/images/toronto.jpg'

const Homepage: React.FC=() => {
    return (
        <>
            <NavBar/>
            <Container fluid>
                <Row className={homeStyles.row__section}>
                        <h1>
                            A FAST LEARNER, WITH A KNACK FOR CODING
                        </h1>
                </Row>
                <Row style={{padding:0, objectFit:'cover'}} className={homeStyles.row__section}>
                    <Image src={codePic} className={homeStyles.profile__codePic}/>
                </Row>
                <Row className={cn(homeStyles.row__section, homeStyles.row__wrapper)}>
                    <Row style={{justifyContent:'center', width:'80%'}}>    
                        <Row style={{color:'#223855', width:'76%', borderBottom: '1px solid #000'}}>
                            <h2 className={homeStyles.skills__title}>SKILLS</h2>
                        </Row> 
                        <Row className={homeStyles.skills__body}>
                        <Col className={homeStyles.skills__card}>
                            <Card 
                                title="Software Development"
                                subtitle="2 years of experience"
                                text="Whether it be creation of reporting tools or the integration of code, I can assure that I will approach problems with a flexible mind, and respond in a planned manner. I do my best to keep up with more modern languages such as Python and Java, but also have no problem adapting to older coding laungauges like PERL."
                                icon="bi bi-gear"
                            />
                        </Col>
                        <Col className={homeStyles.skills__card}>
                            <Card 
                                title="IT Management"
                                subtitle="1 years of experience"
                                text="Fairly recently, I have managed a multitude of virtual servers under a simple, yet robust network. Some challenges I have faced have included: Working with various companies to ensure a constant SFTP service, migrating servers of varying complexities to VM Clouds, and even maintaining the upkeep of our in-office physical machines."
                                icon="bi bi-cloud-upload"
                            />
                        </Col>
                        <Col className={homeStyles.skills__card}>
                            <Card 
                                title="Website Development"
                                subtitle="1 years of experience"
                                text="The creation and designing of a website is one of the topics I find to be changing incredibly quickly. I had initially used HTML/CSS/JS to build sites in my University days. However using React/NextJs, TypeScript, and Sass has expanded so many options on what I could work with today!"
                                icon="bi bi-brush"
                            />
                        </Col>
                    </Row>
                    </Row>
                </Row>
                <Row className={cn(homeStyles.row__section, homeStyles.row__wrapper)}>
                    <Row style={{width:'60%'}}>
                        <Col style={{padding:'2rem'}}>
                            <div>
                                <h2>Hi! I'm Ryan</h2>

                                <p>
                                    I'm a software developer based in Toronto, Ontario. 
                                </p>
                                <br/>
                                <p>
                                    My goal is to provide simple and robust solutions to people's problems through code. With technology constantly evolving, it would be great to have a quick thinker on your side.
                                </p>
                                <Row style={{width:'50%', padding:'2rem 1rem'}}>
                                    <Button href="/about" className={homeStyles.readmore__button}> Read More </Button>
                                </Row>
                            </div>
                        </Col>
                        <Col className={homeStyles.profile}>
                            <Image src={torontoPic} className={homeStyles.profile__toronto} fluid/>
                        </Col>
                    </Row>
                </Row>
                <Row className={cn(homeStyles.row__section, homeStyles.row__wrapper)} style={{backgroundColor:'#E9F6FF'}}>                  
                    <Row style={{justifyContent:'center', width:'60%'}}>
                        <Col className={homeStyles.profile}>
                            <Image src={reachPic} className={homeStyles.profile__reach} fluid/>
                        </Col>
                        <Col style={{padding:'5rem 0rem', justifyContent:'center'}}>
                            <Row>
                                <h2 style={{textAlign:'center', paddingBottom:'1rem'}}>Let's Talk!</h2>
                                <p style={{textAlign:'center', padding:'1rem 12rem'}}>I'm always free for a message! If you would like to talk to me I have multiple means of contact.</p>
                            </Row>
                            <Row style={{width:'50%', padding:'2rem 1rem', margin:'0 auto'}}>
                                <Button href="/contactpage" className={homeStyles.contact__button}> Reach Me! </Button>
                            </Row>
                            
                        </Col>
                    </Row>
                </Row>
                <Footer/>
            </Container>
        </>
    )
} 

export default Homepage