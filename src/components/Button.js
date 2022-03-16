import React, {memo} from 'react'

const Button = ({ children, onClick }) => (
    <button
        className='mode'
        onClick={onClick}
    >
        {children}
    </button>
)

export default memo(Button)
