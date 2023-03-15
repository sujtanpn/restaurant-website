import React from 'react'
import styles from './Contact.module.css'
import {
    BsTelephone,
} from "react-icons/bs";
import {
    HiOutlineMail,
} from "react-icons/hi";

const Contact = () => {
    return (
        <div className={styles.contactus}>
            <div className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Send Message</h1>
                        <h2>Get in Touch with Us</h2>
                        <p>You have a piece of advice or a suggestion that you would like to share with us? Feel free to contact us.</p>
                        <div className={styles.info}>
                            <ul>
                                <li className={styles.icon}><BsTelephone /></li>
                                <li>123456789</li>
                            </ul>
                            <ul><li className={styles.icon}><HiOutlineMail /></li><li>info@gmail.com</li></ul>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.name}>
                            <input type='text' placeholder='Name' />
                        </div>
                        <div className={styles.second}>

                            <input type='text' placeholder='Email' />

                        </div>
                        <div className={styles.second}>
                            <input type='text' placeholder='Phone' />
                        </div>
                        <div className={styles.third}>

                            <input type='text' placeholder='Message' />

                        </div>
                        <button className={styles.book}>Send Now</button>
                    </div>
                </div>
            </div>

            <div className={styles.google}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.462890258505!2d85.33544097670323!3d27.69469403091112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1678865589737!5m2!1sen!2snp" style={{ width: "100%", height:"100%", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>




        </div>
    )
}

export default Contact
