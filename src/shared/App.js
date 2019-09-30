import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Sidebar, Login, Home } from 'pages';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className="root">               
                <Sidebar/>
                <div className='content'>
                    <Route exact path="/" component={Home}/>
                    <Switch>
                        <Route path="/about/:name" component={About}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                    {/* Content 컨테이너 영역 종료 */}
                </div>
                
            </div>
         );
    }
}
 
export default App;