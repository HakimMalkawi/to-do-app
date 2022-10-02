import { useRef, useEffect } from "react"

const useInitialMount = () => {
    const initialMount = useRef( true )
    useEffect( () => { initialMount.current = false }, [] )
    return initialMount.current }

export default useInitialMount