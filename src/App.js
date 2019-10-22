import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Steps to deploy on GKE</h1>
        <ul className="App-text">
            <li>Install docker</li>
            <li>Dockerize the application</li>
            <li>Upload the image to a registry</li>
            <li>Create a container cluster in GKE</li>
            <li>Deploy app to the cluster</li>
            <li>Expose your app to the internet</li>
            <li>Visit site using the External IP</li>
        </ul>
        <p>Check out the <a className="App-link"
          href="https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app"
          target="_blank"
          rel="noopener noreferrer">Tutorial</a>on GCP</p>
          <p>Another <a className="App-link"
          href="https://stackify.com/docker-build-a-beginners-guide-to-building-docker-images/"
          rel="noopener noreferrer">Tutorial</a> on basics of Docker.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="App-footer">
      <p> Posted by: Max.On <a
      className="App-link"
          href="https://github.com/Fezaro/React-challenge"
          target="_blank"
          rel="noopener noreferrer">Github</a></p>
    </footer>
    </div>
    
  );
}

export default App;
