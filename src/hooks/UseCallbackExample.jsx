import React, {useCallback} from 'react'

const ParentComponent = () => {
    const handleClick = useCallback(() => {
        // handle click event
        console.log('Button Clicked!')
    }, [])

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent onClick={handleClick}/>
        </div>
    )
}

const ChildComponent = ({onClick}) => {
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}
