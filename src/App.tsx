import React, { FC, useContext, useEffect, useState } from 'react'
import Map from './components/CustomMap'
import { MapContext } from './contexts/MapContext'

const App: FC = () => {

  const { zoom, setZoom, latitude, setLatitude, longitude, setLongitude } = useContext(MapContext)

  const [data, setData] = useState({})
  const [state, setState] = useState({
    zoom: zoom,
    longitude: longitude,
    latitude: latitude,
  })

  const update = () => {
    setZoom(state.zoom)
    setLongitude(state.longitude)
    setLatitude(state.latitude)
  }

  const draw = () => { }

  useEffect(() => {
    console.log(state)
    const template = {
      data: data,
      state: state,
      update: update,
      draw: draw
    }
    // @ts-ignore
    window.template = template
  }, [data, state, update, draw])

  return (
    <div>
      <Map></Map>
    </div>
  )
}

export default App