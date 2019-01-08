import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   // state = {}
   constructor(props) {
      // one time setup
      // data loading not recomended
      super(props);
      this.state = {
         latitude: null,
         errorMessage: ''
      };
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ latitude: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message }),
      );
   }

   componentDidMount() {
      // do data loading here
      console.log('My component was rendered to the screen.');
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
         return <div>Latitude: {this.state.latitude}</div>;
      }

      return <div>Loading...</div>;
   }
}

ReactDOM.render(<App />, document.querySelector('#root'));