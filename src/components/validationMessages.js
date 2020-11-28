const NameValidationMessage = () => {
    return (
        <div style = {{color: "red"}}>
            Please provide a valid name
        </div>
    );
}

const EmailValidationMessage = () => {
    return (
        <div style = {{color: "red"}}>
            Please provide a valid email with "@" in it
        </div>
    );
}

const FactValidationMessage = () => {
    return (
        <div style = {{color: "red"}}>
            Please provide a valid fun fact
        </div>
    );
}

export {NameValidationMessage, EmailValidationMessage, FactValidationMessage};