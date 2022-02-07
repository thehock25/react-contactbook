import React from 'react'

const PersonForm = ({ onSubmit, newName, handleNameChange, newNumber, handleNumberChange }) =>
    <form onSubmit={onSubmit}>
        <h3>name: </h3>
        <input
            value={newName}
            onChange={handleNameChange}

        />
        <h3>number: </h3>
        <input

            value={newNumber}
            onChange={handleNumberChange}

        />
        <button type="submit">add</button>
    </form>

export default PersonForm