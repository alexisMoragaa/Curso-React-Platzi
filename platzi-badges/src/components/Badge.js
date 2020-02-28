import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

// import ReactDom from 'react-dom'

class Badge extends React.Component{

    render(){
        return (
                <div className="Badge">

                    <div className="Badge__header">
                        <img  src={confLogo} alt="Logo de la conferencia"/>
                    </div>
                    <div className="Badge__section-name">
                        <img className="Badge__avatar" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" alt="avatar"/>
                        <h1>Alexis <br/> Moraga</h1>
                    </div>

                    <div className="Badge__section-info ">
                        <h3>Desarrollador Web</h3>
                        <div>@amoragaa</div>  
                    </div>
                    <div className="Badge__footer">
                        #PlatziConf
                    </div>

                </div>
                )
    }

}

export default Badge