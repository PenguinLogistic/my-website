import React from 'react';
import {Row, Col} from 'react-bootstrap'
import styles from '../scss/footer.module.scss'
import cn from 'classnames'
import IconButton from '../components/icon-button'
import Link from 'next/link'

// interface FooterProps{
//     children: React.ReactNode
// }


const BottomBar: React.FC = ({}) => {
    return (
        <Row className={styles.footer__wrapper}>
            <Row className={styles.footer__body} style={{width:'50%'}}>
                <Col className={styles.footer__body}>
                        <IconButton icon='bi bi-github' url="https://github.com/RyanFoxMDFung"/>
                        <IconButton icon='bi bi-envelope-fill' url="#contact"/>
                        <IconButton icon='bi bi-linkedin' url="https://www.linkedin.com/in/ryan-f-02484a117/"/>
                </Col>
                <Row>
                    <Col className={styles.footer__row}><
                        h5>Quick Contact</h5>
                        <h6 className={styles.footer__links} style={{paddingTop:'2rem'}}>Phone: (647) 989-7283</h6>
                        <h6 className={styles.footer__links}>Mail: ryan.shiuhong.fung@gmail.com</h6>
                        <h6 className={styles.footer__links}>Ontario, Toronto</h6>
                        
                    </Col>
                    <Col className={styles.footer__row}>
                        <h5>Quick Links</h5>
                        <Link href="/"><a className={styles.footer__links} style={{paddingTop:'2rem'}}> Home </a></Link>
                        <Link href="/about"><a className={styles.footer__links}> About </a></Link>
                        <Link href="/contactpage"><a className={styles.footer__links}> Contact </a></Link>
                    </Col>
                </Row>
            </Row>
        </Row>
    )
}

export default BottomBar;