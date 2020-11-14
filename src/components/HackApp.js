import './HackApp.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';

const ApplicationForm = (e) => {
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fact, setFact] = useState("");

    const sendFormData = (e) => {
        e.preventDefault();
        console.log('hello');
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label className="label mt-3">Name</Form.Label>
                <Form.Control 
                    className="border border-dark"
                    placeholder="Name"
                    defaultValue = {name} 
                    onChange = {setName}/>

                <Form.Label className="label mt-3">Email</Form.Label>
                <Form.Control className="border border-dark" placeholder="Email" />

                <Form.Label className="label mt-3">Fun Fact</Form.Label>
                <Form.Control className="fun-fact border border-dark" placeholder="Fun Fact" />

                <Button variant = "light" className = "submit mt-5" onSubmit = {sendFormData} onClick={sendFormData}>Submit</Button>
            </Form.Group>
        </Form>
    );
}

const HackApp = () => {
    return (
        <div className="HackApp">
            <Card>
                <Card.Body className="">
                    <div className = "form-title d-flex justify-content-center">
                        Hack UCI Application
                    </div>

                    <ApplicationForm />
                </Card.Body>
            </Card>
        </div>
    );
}

export default HackApp;