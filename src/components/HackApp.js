import './HackApp.css';
import { Card, Form } from 'react-bootstrap';



const ApplicationForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label className="label mt-3">Name</Form.Label>
                <Form.Control className="border border-dark" placeholder="Name" />

                <Form.Label className="label mt-3">Email</Form.Label>
                <Form.Control className="border border-dark" placeholder="Email" />

                <Form.Label className="label mt-3">Fun Fact</Form.Label>
                <Form.Control className="fun-fact border border-dark" placeholder="Fun Fact" />

                <button className = "submit mt-5" onSubmit={console.log('hello')}>Submit</button>
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