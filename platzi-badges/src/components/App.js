import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import RickAndMorty from '../pages/RickAndMorty';
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Layout from './Layout'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact parth="/api"  component={RickAndMorty}/>
                    <Route  component={NotFound} />
                </Switch>
            </Layout>
                
        </BrowserRouter>
    )
}



export default App