import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const Google_Key = process.env.REACT_APP_Google_Key;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// Map
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.01,
      lng: 121.328,
    },
    zoom: 17,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Google_Key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

// App
function GoogleView() {
  return (
    <div className="GoogleView">
      <SimpleMap />
    </div>
  );
}

export default GoogleView;
