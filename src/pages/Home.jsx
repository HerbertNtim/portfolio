import { Canvas } from "@react-three/fiber"
import { Suspense, useState, useRef, useEffect } from "react"
import Loader from "../components/Loader"
import { Island } from "../models/Island"
import Sky from "../models/Sky"
import Bird from "../models/Bird"
import Plane from "../models/Plane"
import HomeInfo from "../components/HomeInfo"

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from "../assets/icons"

const Home = () => {
  const [ isRotating, setIsRotating ] = useState(false)
  const [currentState, setCurrentState] = useState(1)
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play()
    }

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9 ]
    } else{
      screenScale = [1, 1, 1, 1]
    }

    return [ screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }
 
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <div className="flex justify-center items-center absolute top-28 left-0 right-0 z-10">
        <HomeInfo currentState={currentState}/>
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1}/>
          <ambientLight intensity={0.5}/>
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>

          <Bird />
          <Sky isRotating={isRotating}/>
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentState}
          />
          <Plane 
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0,]}
          />

        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img src={!isPlayingMusic ? soundoff : soundon} alt="sound" 
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>

    </section>
  )
}

export default Home