import React, { useRef, useEffect, useState, Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'


const Landing = () => {

    const [btn, setBtn] = useState(false);

    const refWolverine = useRef(null);

    //ici je crée une class pour afficher une image (wolverine avec des griff)
    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() => {
            //ici 3sec plus tard les griff disparaisse grace a remove et la nouvelle image (wolverine sans griff)
            refWolverine.current.classList.remove("startingImg");
            //quand les 1s sont passer j'affiche le bouton
            setBtn(true)
        }, 1000);
    }, [])

    const setleftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }

    //ici je crée une condition qui change l'image si j'approche la sourie d'une div.
    const clearImg = () => {
        if(refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        } else if (refWolverine.current.classList.contains("rightImg"))
        refWolverine.current.classList.remove("rightImg");
    }


    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setleftImg} onMouseOut={clearImg} className='leftBox'>
                <Link className='btn-welcome' to="/signup">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className='rightBox'>
                <Link className='btn-welcome' to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

    return (
        <main ref={refWolverine} className='welcomePage'>
                { displayBtn }
        </main>
    )
}

export default Landing