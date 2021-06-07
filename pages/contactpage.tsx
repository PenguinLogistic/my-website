import NavBar from '../components/navbar'
import Footer from '../components/footer'
import {Row, Col, Image} from 'react-bootstrap'
import styles from '../scss/contact.module.scss'
import contactImg from '../public/images/contactpic.png'
import Email from '../components/emailForm'
import cn from 'classnames'


export default function Contact() {
    return (
        <>
        <NavBar/>            
        <Row style={{padding:0, objectFit:'cover'}} className={styles.row__section}>
            <Image src={contactImg} className={styles.profile__contactPic}/>
        </Row>
        <Row style={{justifyContent:'center', padding:'5rem'}} className={styles.row__section}>
            
            <Email/>
        </Row>
        <Footer/>
        </>
    )
}