import React from "react"
import { compose, withProps} from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const icon = {
  path: 'M 12.5,0.5 15.5,9.0 24.5,9.0 17.5,14.5 20.0,23.0 12.5,18.0 5.0,23.0 7.5,14.5 0.5,9.0 9.5,9.0 z',
  fillColor: 'yellow',
  fillOpacity: 1,
  scale: 1.5,
  strokeColor: 'gold',
  strokeWeight: 3
};

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =><GoogleMap defaultZoom={15} defaultCenter={{ lat: -37.810, lng: 144.961 }}>
{props.isMarkerShown && (
  <Marker icon = {icon} position={{ lat: -37.811, lng: 144.961 }} />

)}
{props.isMarkerShown && (
  <Marker position={{ lat: -37.812, lng: 144.963 }} />

)}
{props.isMarkerShown && (
  <Marker position={{ lat: -37.813, lng: 144.965 }} />

)}
{props.isMarkerShown && (
  <Marker position={{ lat: -37.809, lng: 144.969 }} />

)}
{props.isMarkerShown && (
  <Marker position={{ lat: -37.813, lng: 144.960}} />

)}
{props.isMarkerShown && (
  <Marker position={{ lat: -37.810, lng: 144.961, zIndex: 99999}}> </Marker> 
  


  
)}
</GoogleMap>
)

export default class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}