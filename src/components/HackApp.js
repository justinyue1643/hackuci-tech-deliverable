import './HackApp.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Notif from './Notif';
import { toast, ToastContainer } from 'react-toastify';
import { NameValidationMessage, EmailValidationMessage, FactValidationMessage} from './validationMessages';

const ApplicationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fact, setFact] = useState("");

    const [isEmailValidated, setIsEmailValidated] = useState(true);
    const [isNameValidated, setIsNameValidated] = useState(true);
    const [isFactValidated, setIsFactValidated] = useState(true);

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
                setIsNameValidated(true);
                setIsFactValidated(true);
                setIsEmailValidated(true);
                return toast.success('Success!');
            })
            .catch(e => {
                if (email.length == 0 || email.indexOf("@") == -1) {
                    setIsEmailValidated(false);
                }
                else {
                    setIsEmailValidated(true);
                }

                if (name.length == 0) {
                    setIsNameValidated(false);
                }
                else {
                    setIsNameValidated(true);
                }

                if (fact.length == 0) {
                    setIsFactValidated(false);
                }
                else {
                    setIsFactValidated(true);
                }

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
                {isNameValidated ? <div></div> : <NameValidationMessage/>}
            </Form.Group>

            <Form.Group>
                <Form.Label className="label mt-3">Email</Form.Label>
                <Form.Control
                    className="border border-dark"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={e => setEmail(e.target.value)} />
                {isEmailValidated ? <div></div> : <EmailValidationMessage/>}
            </Form.Group>

            <Form.Group>
                <Form.Label className="label mt-3">Fun Fact</Form.Label>
                <Form.Control
                    className="fun-fact border border-dark"
                    placeholder="Fun Fact"
                    value={fact}
                    as="textarea"
                    rows="8"
                    onChange={e => setFact(e.target.value)} />
                {isFactValidated ? <div></div> : <FactValidationMessage/>}
            </Form.Group>

            <Button variant="light" className="submit mt-5" onSubmit={sendFormData} onClick={sendFormData}>Submit</Button>
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