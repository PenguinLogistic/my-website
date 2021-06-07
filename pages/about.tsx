import NavBar from '../components/navbar'
import Footer from '../components/footer'
import {Row, Col, Image} from 'react-bootstrap'
import styles from '../scss/about.module.scss'
import aboutImg from '../public/images/aboutimg.jpg'
import torontoPic from '../public/images/toronto.jpg'
import cn from 'classnames'



export default function About() {
    return (
        <>
        <NavBar/>                
        <Row style={{padding:0, objectFit:'cover'}} className={styles.row__section}>
            <Image src={aboutImg} className={styles.profile__aboutPic}/>
        </Row>
        <Row className={cn(styles.row__section, styles.row__wrapper)}>
                <Row style={{width:'55%'}}>
                    <Col className={styles.profile}>
                        <Image src={torontoPic} className={styles.profile__toronto} fluid/>
                    </Col>
                    <Col style={{marginLeft:'5%'}}>
                        <div className={styles.about}>
                            <h2>Hi! I'm Ryan</h2>

                            <p className={styles.paragraph}>
                                I'm a software developer based in Toronto, Ontario. 
                            </p>
                            <p className={styles.paragraph}>
                                I love exploring and creating, I always have. Whether I was experimenting with a new framework, or learning a new hard skill, I have always wanted to expand my knowledge to the best of my abilities.
                            </p>
                            <p className={styles.paragraph}>
                                My most recent education is having studied at University of Toronto's computer science program. I graduated in 2017 and was granted a Bachelor of Science degree with honors.
                            </p>
                            <p className={styles.paragraph}>
                                In my previous employs, I used my programming knowledge to create several financial tools to help expedite business productivity. I've also taken a liking to web development and computer networks to understand more of how these topics work together.
                            </p>
                            <p className={styles.paragraph}>
                                My goal is to provide simple and robust solutions to people's problems through code. With technology constantly evolving, it would be great to have a quick thinker on your side.
                            </p>
                        </div>
                    </Col>

                </Row>
        </Row>
        <Footer/>
        </>
    )
}