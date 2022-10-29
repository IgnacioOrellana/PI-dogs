import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetBreed } from '../../../redux/actions'
import logo from '../../../Imagens/dog.png'
import './reset.css'
import { useState } from 'react'

export default function Reset() {
  const [reset, setReset] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetBreed())
    setReset("")
  }, [reset])

  const handleOnClick = () => { setReset("reset") }

  return (
    <img id="logo" src={logo} alt="app-logo" width="75px" onClick={handleOnClick} />
  )
}


