import React from 'react'

//אם ה-exsport מוצמד לפונקציה חייב להשתמש באותו שם בדיוק ב- {} ב-App.js
const Greet = (props) =>
    <div>
        <h1>Welcome {props.name} to online code name </h1>
        {props.children}
    </div>


export default Greet