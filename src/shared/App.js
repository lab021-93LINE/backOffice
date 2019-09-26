import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Sidebar } from 'pages';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div>               
                {/* 추후 사이드 바 적용 예정 */}
                <Sidebar/>

                {/* Content 컨테이너 영역 */}
                {/* <Content/> */}
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                {/* Content 컨테이너 영역 종료 */}
            </div>
         );
    }
}
 
export default App;