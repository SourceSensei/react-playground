import React, { useMemo } from 'react'

const UseMemoExample = () => {

    const transformedData = useMemo(() => {
        // some expensive calculation
        return someExpensiveCalculation(data)
    }, [data])


  return (
    <div>
      <h1>Transformed Data:</h1>
      <p>{transformedData}</p>
    </div>
  )
}

export default UseMemoExample
