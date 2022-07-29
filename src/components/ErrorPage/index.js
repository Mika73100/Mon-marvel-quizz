import React from "react"
import Photo from "../../images/batman.png"

//ici je fais mon css en javascript
 const centerH2 = {
    textAlign: 'center',
    marginTop: '50px'
}

//ici j utilise la balise centerImg que je retrouve plus bas dans style et donc le CSS
 const centerImg = {
    display: 'block',
    marginTop: '40px auto'
}

 const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Oups, cette page n'existe pas!</h2><br/>
                <img style={centerImg} src={Photo} alt="Error page" />
            </div>
        </div>
    )
 }


 export default ErrorPage