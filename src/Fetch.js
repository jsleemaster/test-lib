import { useEffect } from 'react'

const Fetch = () => {
  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
    
  return <></>
}
export default Fetch; 