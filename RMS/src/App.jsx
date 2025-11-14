import { useState } from 'react'
import Layout from './components/Layout'
import { Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Layout >
        <Outlet >

      </Outlet>
      </Layout>

    </div>
  )
}

export default App
