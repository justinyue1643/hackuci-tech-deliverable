import './HackApp.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Notif from './Notif';
import { toast, ToastContainer } from 'react-toastify';

const ApplicationForm = (e) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fact, setFact] = useState("");

    const sendFormData = async (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(fact);

        axios.get('https://hack-uci-test-endpoint.herokuapp.com/test', {
            params: {
                "email": email,
                "funfact": email,
                "name": name,
            }
        })
        .then((res) => {
            console.log(res);
            setName("");
            setEmail("");
            setFact("");
            return toast.success('Success!');
        })
        .catch(e => {
            return toast.warning('Something went wrong!');
        })
    }

    return (
        <Form>
            <ToastContainer />
            <Form.Group>
                <Form.Label className="label mt-3">Name</Form.Label>
                <Form.Control
                    className="border border-dark"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)} />

                <Form.Label className="label mt-3">Email</Form.Label>
                <Form.Control
                    className="border border-dark"
                    placeholder="Email"
                    value={email}
                    type = "email"
                    onChange={e => setEmail(e.target.value)} />

                <Form.Label className="label mt-3">Fun Fact</Form.Label>
                <Form.Control
                    className="fun-fact border border-dark"
                    placeholder="Fun Fact"
                    value={fact}
                    as = "textarea"
                    rows = "8"
                    onChange={e => setFact(e.target.value)} />

                <Button variant="light" className="submit mt-5" onSubmit={sendFormData} onClick={sendFormData}>Submit</Button>
            </Form.Group>
        </Form>
    );
}

const HackApp = () => {
    return (
        <div className="HackApp">
            <Card>
                <Card.Body className="">
                    <div className="form-title d-flex justify-content-center">
                        Hack UCI Application
                    </div>
                    <ApplicationForm />
                </Card.Body>
            </Card>
        </div>
    );
}

export default HackApp;