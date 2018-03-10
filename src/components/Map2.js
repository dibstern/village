export class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPosition: {lat: 40.7128, lng: -74.0059},
            defaultCenter: {
                lat: 40.7128,
                lng: -74.0059
            },
            zoom: 10,
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    
    componentDidMount() {
      this.map = this.createMap()
      this.marker = this.createMarker()
      this.infoWindow = this.createInfoWindow()
    
      google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
    
      google.maps.event.addListener(this.marker, 'click', ()=> this.handleMarkerClick())
    }
    
    componentDidUnMount() {
      google.maps.event.clearListeners(map, 'zoom_changed')
    }
    
    createMap() {
      let mapOptions = {
        zoom: this.state.zoom,
        center: this.mapCenter()
      }
      return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }
};