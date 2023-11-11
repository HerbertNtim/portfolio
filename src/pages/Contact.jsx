import { useState, useRef, Suspense } from "react"
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber"
import Loader from '../components/Loader'
import { Fox } from "../models/Fox"
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import Footer from "../components/Footer"

const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef(null)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert()

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name:'Herbert',
        from_email: form.email,
        to_email: 'herbertntim2023@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      showAlert({ show: true, text: 'Message Sent Successfully', type: 'success' })

      setTimeout(() => {
        setCurrentAnimation('idle')
        hideAlert()
        setForm({ name: '', email: '', message: ''})
      }, [3000])

    }).catch((err) => {
      setIsLoading(false)
      setCurrentAnimation('idle')
      console.log(err)
      showAlert({ show: true, text: 'I did receive your message. Please try again', type: 'danger' })      
    })
  }
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleFocus = () => setCurrentAnimation('walk')
  const  handleBlur = () => setCurrentAnimation('idle')

  return (
    <>
      <section className="relative flex flex-col lg:flex-row max-container">
        { alert.show && <Alert {...alert}/>}

        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get In Touch</h1>

          <form
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold">
              Name
              <input 
                type="text"
                name="name"
                required
                className="input"
                placeholder="Herbert Ntim" 
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className="text-black-500 font-semibold">
              Email
              <input 
                type="email"
                name="email"
                required
                className="input"
                placeholder="herbertntim2023@gmail.com" 
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                name='message'
                rows='4'
                required
                className='textarea'
                placeholder='Write your thoughts here...'
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message" }
            </button>
          </form>
        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}
            >
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={1} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact