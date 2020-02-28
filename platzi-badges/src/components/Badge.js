import React from 'react'
import confLogo from '../images/badge-header.svg'
// import ReactDom from 'react-dom'

class Badge extends React.Component{

    render(){
        return (
                <div className="">

                    <div className="">
                        <img src={confLogo} alt="Logo de la conferencia"/>
                    </div>
                    <div className="">
                        <img src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" alt="avatar"/>
                        <h1>Alexis <br/> Moraga</h1>
                    </div>

                    <div className="">
                        <p>Desarrollador Web</p>
                        <p>@amoragaa</p>
                    </div>
                    <div className="">
                        #PlatziConf
                    </div>

                </div>
                )
    }

}

export default Badge