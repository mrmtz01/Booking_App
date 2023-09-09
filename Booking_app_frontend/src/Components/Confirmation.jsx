import React from 'react'

const Confirmation = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-1">
  <div className="bg-blue-500 p-4">
    hola
  </div>

  <div className="bg-green-500 p-4">
    <div className='w-full'>
        <form action="/mybookings">
            <div className='col-1 mb-2'>
                <input placeholder="Name" type="text" className='mb-2' />
                <input placeholder="Last Name" type="text" className='mb-2' />
                <input placeholder="Email" type="text" className='mb-2'/>
                <input placeholder="Phone Number" type="text" className='mb-2' />

                <select name="paymentmethod" id="" className='mb-2'>
                    <option value="">Payment Method</option>
                    <option value="">Cash</option>
                    <option value="">Credit Card</option>
                </select>
                
                <button type="submit" className='mb-2'>Book</button>
            </div>
        </form>
    </div>
  </div>
</div>

    </>
  )
}

export default Confirmation
