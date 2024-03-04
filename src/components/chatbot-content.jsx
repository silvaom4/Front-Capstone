import React from 'react'

export default function ChatContent({open, children, onClose}) {
  if(!open) return null;

  
  
    return (
    <div>
        <button className="close-modal" onClick={onClose}>&times;</button>
      {children}
    </div>
  )
}
