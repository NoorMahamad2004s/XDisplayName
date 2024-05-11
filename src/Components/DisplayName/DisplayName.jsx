

    import './DisplayName.css';
    import { useState, useEffect } from 'react';


    const DisplayName = ()=>{

        const[firstName, setFirstName] = useState('');
        const[lastName, setLastName] = useState('');
        const[fullName, setFullName] = useState('');
        // const[error, setError] = useState('');


        const handleFullName = ()=>{
            if (firstName.trim() !== '' && lastName.trim() !== '') {
                setFullName(`${firstName} ${lastName}`);        
            } 
            else{
                setFullName('');
            }
        }

        
        const handleSubmit = (e)=>{
            e.preventDefault();
            handleFullName()
        }

       
        useEffect(() => {
            if (fullName !== '' && (firstName === '' || lastName === '')) {
                setFullName('');
            }
        }, [handleSubmit]);
        

        return(
            <div className='formContainer'>
            
                <form onSubmit={handleSubmit} >

                    
                    <fieldset>
                    
                    <legend >Full Name Generator</legend>

                    <h3>Full Name Display</h3>
                <div className="firstName">
                    <label>First Name: 
                        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                </label>
                    </div>

                    <div className="lastName">

                    <label>Last Name: 
                        <input  type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}  required/>
                    </label>
                    </div>

                    <div className="btn">
                    <button type="submit">Submit</button>
                    </div>
                    <div className="fullName">
                    {fullName && <p>Full Name: {fullName}</p>}
                    </div> 
                    </fieldset>
                </form>


            

            </div>
        )
    }

    export default DisplayName;