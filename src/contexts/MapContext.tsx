import React, { useState, Dispatch, SetStateAction } from 'react'

interface ViewType {
  longitude: number,
  latitude: number,
  zoom: number,
}

interface SetViewType {
  setLongitude: Dispatch<SetStateAction<number>>,
  setLatitude: Dispatch<SetStateAction<number>>,
  setZoom: Dispatch<SetStateAction<number>>,
}

interface MapContextType extends ViewType, SetViewType { }

export const contextDefaultValues: MapContextType = {
  longitude: 30,
  latitude: 42,
  zoom: 1,
  setLongitude: () => { },
  setLatitude: () => { },
  setZoom: () => { },
}

export const MapContext = React.createContext(
  contextDefaultValues
)

export const MapContextProvider = ({ children }) => {

  const [longitude, setLongitude] = useState(contextDefaultValues.longitude)
  const [latitude, setLatitude] = useState(contextDefaultValues.latitude)
  const [zoom, setZoom] = useState(contextDefaultValues.zoom)

  return (
    <MapContext.Provider
      value={{
        longitude,
        latitude,
        zoom,
        setLongitude,
        setLatitude,
        setZoom,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}