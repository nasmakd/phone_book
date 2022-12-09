import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div className={styles.app}>
      <h1>PhoneBook</h1>
      <div className={styles.wrapper}>
        <Container className={styles.box}>
          <Row>
            <Col sm='6'>
              <ContactForm />
            </Col>
            <Col sm='6'>
              <ContactList />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
