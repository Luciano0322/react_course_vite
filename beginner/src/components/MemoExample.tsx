import React, { useState } from 'react'

const Swatch = ({ color }:{ color: string }) => {
  console.log(`Swatch 渲染 ${color}`);
  
  return (
    <div 
      style={{
        margin: '1rem',
        width: 75,
        height: 75,
        borderRadius: '50%',
        backgroundColor: color,
      }} 
    />
  )
}

const MemoExample = () => {
  const [appRenderIdx, setAppRenderIdx] = useState<number>(0)
  console.log(`Memo 渲染次數 ${appRenderIdx}`);
  
  return (
    <div>
      <h4>step 8: Memo & useMemo 範例</h4>
      <div className='f-b-c'>
        <button 
          onClick={() => setAppRenderIdx(appRenderIdx + 1)}
        >
          重新渲染
        </button>
      </div>
      <Swatch color='red' />
    </div>
  )
}

export default MemoExample
