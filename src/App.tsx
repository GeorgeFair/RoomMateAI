import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>RoommateAI</h1>
                <Switch>
                    <Route path="/" exact component={Form} />
                    {/* Additional routes can be added here */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;