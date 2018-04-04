import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import PostForm from './components/Postform';

import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component{

    render(){

        return(
            <Provider store={store}>
                <div >
                    
                    <PostForm/>
                    <hr/>
                    <Posts/> 
                    
                </div>
            </Provider>
        );
    }

}

ReactDOM.render(<App/>,document.getElementById('root'));
