

    import './DisplayName.css';
    import { useState } from 'react';


    const DisplayName = ()=>{

        const[firstName, setFirstName] = useState('');
        const[lastName, setLastName] = useState('');
        const[fullName, setFullName] = useState('');
        const[error, setError] = useState('');

        const handleSubmit = (e)=>{
            e.preventDefault();
            if (!firstName.trim() || !lastName.trim()) {
                setError('Please fill out both first name and last name fields.');
                setFullName('')
            } else {
                setError('');
                setFullName(`${firstName} ${lastName}`);
            }
            // setFullName(`${firstName} ${lastName}`);
        }

        

        return(
            <div className='formContainer'>
            
                <form onSubmit={handleSubmit} required>

                    
                    <fieldset>
                    
                    <legend >Full Name Generator</legend>

                    <h3>Full Name Display</h3>
                <div className="firstName">
                    <label>First Name: 
                        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
                </label>
                    </div>

                    <div className="lastName">

                    <label>Last Name: 
                        <input  type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    </label>
                    </div>

                    <div className="btn">
                    <button type="submit">Submit</button>
                    </div>
                    </fieldset>
                </form>


            <div className="fullName">

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {fullName ? <p>Full Name: {fullName}</p> : ""}

            </div>   

            </div>
        )
    }

    export default DisplayName;