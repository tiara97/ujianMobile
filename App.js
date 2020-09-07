import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import {NavigationContainer} from '@react-navigation/native'
import { composeWithDevTools } from 'redux-devtools-extension'

import Reducers from './src/reducers'

import MainNavigation from './src/navigations/mainNav'
import StackNav from './src/navigations/stackNav'

const globalStore = createStore(
  Reducers,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

const App = () => {
  return (
    <Provider store={globalStore}>
      <MainNavigation />
    </Provider>
    // <NavigationContainer>
    //   <StackNav />
    // </NavigationContainer>
  )
}

export default App