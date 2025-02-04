import React, { useState } from 'react'

export interface User {
    name: string,
    age: number,
    isMarried: boolean,
}

const User = (props: User) => {

  const [bio, setBio] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <>
        <div>Name: {props.name}</div>
        <div>Age: {props.age}</div>
        <div>Bool : {props.isMarried ? "true":"false"}</div>
        <p>
          {" "}
          <p>{props.name}  Bio: {!bio? "No Bio available" : bio}</p>
        </p>
        <input onChange={handleChange} />
    </>
  )
}

export default User