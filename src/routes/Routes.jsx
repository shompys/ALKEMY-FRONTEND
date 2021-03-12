import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from '../views/Home';


const Routes = () => {
    return(
        <BrowserRouter>
            {/* <Link to="/">HOME</Link> */}
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;