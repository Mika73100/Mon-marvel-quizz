import React from "react";

const Signup = () => {
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                    <h3>S'inscrire</h3>
                    <form>
                        <input type="text" placeholder="Pseudo" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Mot de passe" required />
                        <input type="submit" value="Valider inscription" />
                    </form>
            </div>
        </div>
    )
}


export default Signup