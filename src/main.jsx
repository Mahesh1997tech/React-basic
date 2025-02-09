
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ContextProvider from './context/AppContext.jsx'
// import './App.css'
// import './project1/Home.css' 
// import Mycomponent from './Mycomponent.jsx'
// import Home from './project1/Home.jsx'

createRoot(document.getElementById('root')).render(
  <div>

    {/* <Mycomponent></Mycomponent> */}
    {/* <Home></Home> */}
<App></App>
<ContextProvider></ContextProvider>

    </div>
  
)
