import React from 'react'
import { NavLink } from 'react-router-dom'

export const Result = () => {
    return (
        <div className="result-wrapper">
        <h2 className="result-title">Правильный ответ</h2>
        <div className="result-count">0</div>
        <NavLink to="/"><input className="result-button" type="button" value="ВОЗОБНОВИТЬ" /></NavLink>
      </div>
)
}