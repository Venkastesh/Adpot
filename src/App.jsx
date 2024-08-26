import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import { Model } from './model'
import { OrbitControls, SoftShadows } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:"#ffcec1",width:"100%",height:"100vh",borderWidth:2,display:"flex",flexDirection:"column"}}>
      <Canvas shadows style={{height:"35vh",backgroundColor:"#fbfbfb"}}>
        <SoftShadows />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div style={{flex:1,paddingLeft:10,overflowY:'scroll'}}>
        <h5>Mustang</h5>
        <h1>Challenger H1</h1>
        <h3>$1,450,000</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quia cum dignissimos iusto, reprehenderit amet, facere possimus rerum dicta accusamus rem quo ex ipsa, laboriosam veritatis explicabo ducimus sint optio.</p>

        <h2>Features</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quia cum dignissimos iusto, reprehenderit amet, facere possimus rerum dicta accusamus rem quo ex ipsa, laboriosam veritatis explicabo ducimus sint optio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis consectetur fugiat facilis aliquam debitis tempore. Magni at ad laboriosam amet dicta adipisci sequi est minima, quae illum pariatur quia. Reprehenderit?</p>

        <h2>Features</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quia cum dignissimos iusto, reprehenderit amet, facere possimus rerum dicta accusamus rem quo ex ipsa, laboriosam veritatis explicabo ducimus sint optio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis consectetur fugiat facilis aliquam debitis tempore. Magni at ad laboriosam amet dicta adipisci sequi est minima, quae illum pariatur quia. Reprehenderit?</p>

      </div>
    </div>
  )
}

export default App
