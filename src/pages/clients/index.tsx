import { mdiEye, mdiTrashCan, mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import { useSampleClients } from '../../hooks/sampleData'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'
import { Client } from '../../interfaces'
import Button from '../../components/Button'
import Buttons from '../../components/Buttons'
import CardBoxModal from '../../components/CardBox/Modal'
import UserAvatar from '../../components/UserAvatar'
import { getPageTitle } from '../../config'

import dynamic from 'next/dynamic'

const DynamicClientHeader = dynamic(() => import('./clientHeader.jsx'), {
  loading: () => <p>Loading header...</p>,
  ssr: false,
})
const DynamicClientsTable = dynamic(() => import('../../components/Table/SampleClients'), {
  loading: () => <p>Loading Quill editor...</p>,
  ssr: false,
})
const DynamicNewClient = dynamic(() => import('./newClient.jsx'), {
  loading: () => <p>Loading NewClient...</p>,
  ssr: false,
})

const TableSampleClients = () => {
  const { clients } = useSampleClients()

  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const clientsPaginated = clients.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = clients.length / perPage

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)
  const [active, setActive] = useState('logs')

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalTrashActive(false)
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Client')}</title>
      </Head>
      <SectionTitleLineWithButton
        icon={mdiTableBorder}
        title="Clients"
        main
      ></SectionTitleLineWithButton>
      <DynamicClientHeader active={active} setActive={setActive} />
      {active === 'logs' ? <DynamicClientsTable /> : <DynamicNewClient />}
    </>
  )
}

TableSampleClients.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TableSampleClients
