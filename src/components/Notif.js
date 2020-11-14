import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessNotif = () => {
    return toast.success('Success!');
}

const WarningNotif = () => {

}

const Notif = ({ isSuccess }) => {
    return (
        <div>
            {isSuccess ? <SuccessNotif /> : <WarningNotif />}
            <ToastContainer/>
        </div>
    );
}

export default Notif;