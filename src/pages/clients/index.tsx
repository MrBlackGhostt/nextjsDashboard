import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'

import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'

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
  const [active, setActive] = useState('logs')

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
