import React from 'react';
import ReactDOM from 'react-dom';
import Season from './Season';

class App extends React.Component {
   // constructor(props) {
   //    // one time setup
   //    // data loading not recomended
   //    super(props);
   //    this.state = {
   //       latitude: null,
   //       errorMessage: ''
   //    };
   // }
   state = {
      latitude: null,
      errorMessage: ''
   };

   componentDidMount() {
      // do data loading here
      console.log('My component was rendered to the screen.');
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ latitude: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message }),
      );
   }

   componentDidUpdate() {
      // data loading done when component is updated
      // render called before update.
      console.log('My component was updated.');
   }

   componentWillUnmount() {
      console.log('My component is no longer rendered.');
   }

   render() {
      // return JSX
      const { latitude, errorMessage } = this.state;

      if (errorMessage && !latitude) {
         return <div>Error: {this.state.errorMessage}</div>;
      }
      if (!errorMessage && latitude) {
         return <Season latitude={this.state.latitude} />;
      }

      return <div>Loading...</div>;
   }
}

ReactDOM.render(<App />, document.querySelector('#root'));