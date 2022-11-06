import React from 'react'
import './style/Tips.css'

function Tips() {
  return (
    <div className='tips-container'>
        <div className='tips-heading'>
            Tips
        </div>
        <div className='tips-list'>
            <div className='tips-list-item'>◦ Eat healthy vegetables and fresh fruits.</div>
            <div className='tips-list-item'>◦ Do regular exercise.</div>
            <div className='tips-list-item'>◦ Take ample sleep </div>
            <div className='tips-list-see-more'>
                SEE MORE
            </div>

        </div>
    </div>
  )
}

export default Tips