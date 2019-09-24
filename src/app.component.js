import React from 'react';
import Root from './Components/root.component';


class App extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            test : "돈 벌자"
        }
    }

    render(){
        return (
            <div className="app-container">
                <Root/>
            </div>
        );
    }


}

export default App;