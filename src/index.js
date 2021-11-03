import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { lat: null, errorMsg: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            success => this.setState({ lat: success.coords.latitude}), 
            error => this.setState({ errorMsg: error.message})
        );
    }
    render(){
        if(this.state.lat && !this.state.errorMsg){
            return (<div>{this.state.lat}</div>);
        }
        if(!this.state.lat && this.state.errorMsg){
            return (<div>{this.state.errorMsg}</div>);
        }
        return (<div>Loading...</div>);
    }
}
ReactDOM.render( <App />, document.getElementById('root'));