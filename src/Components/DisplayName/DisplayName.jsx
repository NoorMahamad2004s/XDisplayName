import './DisplayName.css';
import { useState } from 'react';

const DisplayName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName.trim() !== '' && lastName.trim() !== '') {
            setFullName(`${firstName} ${lastName}`);
        } else {
            setFullName('');
        }
    }

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Full Name Generator</legend>
                    <h3>Full Name Display</h3>
                    <div className="firstName">
                        <label>First Name:
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </label>
                    </div>
                    <div className="lastName">
                        <label>Last Name:
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </label>
                    </div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                    
                    
                    {fullName && firstName && lastName && <label id='fullname'>Full Name: {fullName}</label>}
                    
                </fieldset>
            </form>

           

        </div>
    )
}

export default DisplayName;
