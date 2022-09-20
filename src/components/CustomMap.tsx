import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import DeckGL from '@deck.gl/react/typed'
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { MapboxOverlay, MapboxOverlayProps } from '@deck.gl/mapbox/typed'
import Map, { useControl, GeolocateControl, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { contextDefaultValues, MapContext } from '../contexts/MapContext'


const INITIAL_VIEW_STATE = contextDefaultValues
const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
const mapStyle = process.env.REACT_APP_MAPBOX_MAP_STYLE

function DeckGLOverlay(props: MapboxOverlayProps & {
  interleaved?: boolean;
}) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

const CustomMap: FC = () => {

  const { longitude, latitude, zoom } = useContext(MapContext)

  return (
    <>
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        {...{ longitude, latitude, zoom }}
        mapboxAccessToken={mapboxAccessToken}
        mapStyle={mapStyle}
        style={{ width: '100vw', height: '100vh' }}
      >
        <DeckGLOverlay />
        <NavigationControl />
      </Map>
    </>
  )
}

export default CustomMap