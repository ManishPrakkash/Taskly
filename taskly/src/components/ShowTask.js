import React from 'react'

export const ShowTask = () => {
  return (
    <section className="showTask">
        <div className="head">
            <div> 
               <span className="title">Todo</span>
                <span className="count">0</span>
            </div>
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
            <li>
                <p>
                    <span></span>
                    <span></span>
                </p>
                <i></i>
                <i></i>
            </li>
        </ul>
    </section>
  )
}
