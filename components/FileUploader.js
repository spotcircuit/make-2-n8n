import { useState, useRef } from 'react'

export default function FileUploader({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      handleFile(file)
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      handleFile(file)
    }
  }

  const handleFile = (file) => {
    // Check if it's a JSON file
    if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
      alert('Please upload a JSON file')
      return
    }
    
    setFileName(file.name)
    onFileSelect(file)
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div
      className={`file-drop-area ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        accept=".json"
        className="hidden"
      />
      <div className="text-center">
        {fileName ? (
          <div>
            <svg className="w-12 h-12 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-2 text-sm text-gray-500">Selected: {fileName}</p>
            <p className="mt-1 text-xs text-gray-400">Click to change file</p>
          </div>
        ) : (
          <div>
            <svg className="w-12 h-12 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mt-2 text-sm text-gray-500">Drag and drop your Make.com JSON file here, or click to browse</p>
            <p className="mt-1 text-xs text-gray-400">Only JSON files are accepted</p>
          </div>
        )}
      </div>
    </div>
  )
}
