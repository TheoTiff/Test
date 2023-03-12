import React, {useState} from 'react';
import axios from "axios";

const LogIn = (props) => {
    const[signUp, setSignUp] = useState(false);
    const[email, setEmail] = useState(undefined);
    const[password, setPassword] = useState(undefined);
    const[nom, setNom] = useState(undefined);
    const[famille, setFamille] = useState(undefined);
    const[aff, setAff] = useState(false);
    const[aff2, setAff2] = useState(false);
    const[aff3, setAff3] = useState(false);

    const cliker = () => { 
        //Conexion avec le serveur de la bdd
        const envoie = {
            email: email,
            password: password
        }
        const fin = JSON.stringify(envoie);
        axios.post("http://localhost:8080/api/verif", fin)
        .then(response => {
            //traiter la réponse
            let reel = response.data;
            if(reel.conexion === "yes") {
                props.setId(email);
            }else {
                setAff3(true);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    const cliker2 = () => {
        // Création du compte dans la bdd
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/; 
        if(emailRegex.test(email) && passwordRegex.test(password)) {
            const envoie = {
                email: email,
                password: password,
                nom: nom,
                famille: famille
              };
            const fin = JSON.stringify(envoie);
              axios.post('http://localhost:8080/api/create', fin)
                .then(response => {
                  // traiter la réponse du serveur
                    const reel = response.data;
                    if(reel.exist === "yes") {
                        setAff2(true)
                    }else {
                        props.setId(email);
                    }
                    
                })
                .catch(error => {
                  console.log(error);
                });
        }else {
            setAff(true);
        }
    }

    const change = () => {
        setSignUp(true);
    }
    const change2 = () => {
        setSignUp(false);
    }

    const retour = (e) => {
        if(e.key === "Enter") {
            cliker();
        }
    }

    return(
        <div className='page-container-login'>
            {signUp === false && (
                <div className='conexion'>
                    <h1>Log In</h1>
                    <br />
                    <div className='truc'>
                        <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" className="input" required="" />
                        <input onChange={e => setPassword(e.target.value)} onKeyDown={retour} placeholder="password" type="password" className="input" required="" />
                        <button onClick={cliker} className='envoie'>
                            Submit
                        </button>
                        {aff && (
                            <p>all fields in the form must be filled in</p>
                        )}
                        {aff3 && (
                            <p>The email address or password is not correct </p>
                        )}
                    </div>
                    <br />
                    <h4 onClick={change} className='tryu'>Sign Up</h4>
                </div>
            )}

            {signUp && (
                <div className='compte'>
                    <h1>Sign Up</h1>
                    <div className='truc'>
                        <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" className="input" required="" />
                        <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="input" required="" />
                        <input onChange={e => setNom(e.target.value)} placeholder="Name" type="text" className="input" required="" />
                        <input onChange={e => setFamille(e.target.value)} placeholder="Surname" type="text" className="input" required="" />
                        <button onClick={cliker2} className='envoie'>
                            Create Account
                        </button>
                        {aff && (
                            <p>all fields in the form must be filled in</p>
                        )}
                        {aff2 && (
                            <p>The email address you entered already exists</p>
                        )}
                    </div>
                    <br />
                    <h4 onClick={change2} className='tryu'>Log In</h4>
                </div>
            )}

        </div>
    )
}

export default LogIn;