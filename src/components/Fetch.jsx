import React from 'react'

const Fetch = () => {


    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'John Doe',
            age: 25,
            email: '3l2tX@example.com',
        }), 
   })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });



  return (
    <div>
      
    </div>
  )
}

export default Fetch
