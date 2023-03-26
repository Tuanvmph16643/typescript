import React from "react"

const Avatar = ({user, showInfo, age}) => {
    age= 21
    return <>
        <div>Tên: {user.name}</div>
        <div>Tuổi: {user.age}</div>
        <div>Avatar: <img src={user.image} alt=""></img></div>
        <button onClick={showInfo}>Magic</button>
    </>
}

export default Avatar