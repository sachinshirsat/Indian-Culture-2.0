// import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei';


function Model(props) {
    const { nodes, materials } = useGLTF('/indian_fort.glb')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Doom} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.wall} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Roof_Top} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.pARAPET_WALL} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.pARAPET_sLAB} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.floor} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.Doom_Support} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.ceiling} />
            <mesh geometry={nodes.Object_13.geometry} material={materials['Material.002']} />
        </group>
    )
}

function View3DModel() {
    return (
        <div >
            <Canvas camera={{ fov: 14, position: [55, 10, 55] }}>

                {/* <Canvas > */}
                <Suspense fallback={null}>
                    <directionalLight intensity={0.5} position={[0, 0, 50]} />

                    <OrbitControls />
                    <ambientLight />
                    <Model />
                </Suspense>
                <Environment preset='sunset' />
                {/* object shadow */}
                <ContactShadows position={[0, -8.5, 0]} opacity={1} scale={50} blur={1} far={10} resolution={356} color='#000000' />
            </Canvas>
        </div>
    );
}

export default View3DModel;
