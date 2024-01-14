import React from 'react'

const ClientHeader = ({ active, setActive }) => {
  return (
    <>
      {' '}
      {/* <DynamicHeader title="Clients" /> */}
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-48 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Clients Logs
          </a>
        </li>
        <li
          className={`${
            active === 'newclient' && 'bg-gray-300 p-4'
          } w-48 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('newclient')}>
            New Client
          </a>
        </li>
      </ul>
    </>
  )
}

export default ClientHeader
