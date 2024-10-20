import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/Sahil-2309'
const i = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])
  if (isLoading) {
    return <img src={i} alt='loading...' />
  }
  if (isError) {
    return (
      <>
        <h1>error...</h1>
      </>
    )
  }

  return <h2>{user} </h2>
}

export default MultipleReturns
