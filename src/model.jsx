import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
        <ambientLight intensity={2} />
      <group scale={0.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_Cylinder007.geometry}
          material={materials.Car}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_Cylinder007_1.geometry}
          material={materials.Windshield}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')