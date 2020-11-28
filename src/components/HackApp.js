import './HackApp.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Notif from './Notif';
import { toast, ToastContainer } from 'react-toastify';
import { NameValidationMessage, EmailValidationMessage, FactValidationMessage} from './validationMessages';
import { validate } from 'validate.js';

const validateValue = (state, setState) => {
    if (state.length === 0) {
        setState(false);
    }
    else {
        setState(true);
    }
}

const validateEmail = (state, setState) => {
    const errorResults = [
        "^Please enter an email address",
        "^Please enter a valid email address"
    ];


    const emailConstraint = {
        emailAddress: {
            presence: {
                allowEmpty: false,
                message: errorResults[0]
            },
            email: {
                message: errorResults[1]
            }
        }
    };
    const validationResult = validate({emailAddress: state}, emailConstraint);
    //let result = "^" + validationResult.emailAddress;

    console.log(validationResult);

    if (validationResult === undefined) {
        setState(true);
    }
    else {
        setState(false);
    }
}

const ApplicationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fact, setFact] = useState("");

    const [isEmailValidated, setIsEmailValidated] = useState(true);
    const [isNameValidated, setIsNameValidated] = useState(true);
    const [isFactValidated, setIsFactValidated] = useState(true);

    const sendFormData = async (e) => {
        e.preventDefault();
        /*console.log(name);
        console.log(email);
        console.log(fact);*/

        axios.get('https://hack-uci-test-endpoint.herokuapp.com/test', {
            params: {
                "email": email,
                "funfact": fact,
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
                validateEmail(email, setIsEmailValidated);
                validateValue(name, setIsNameValidated);
                validateValue(fact, setIsFactValidated);
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