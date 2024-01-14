import { mdiCog } from '@mdi/js'
import React, { Children, ReactNode } from 'react'
import dynamic from 'next/dynamic'

// Dynamic imports
const DynamicButton = dynamic(() => import('../Button'))
const DynamicIcon = dynamic(() => import('../Icon'))
const DynamicIconRounded = dynamic(() => import('../Icon/Rounded'))

type Props = {
  icon: string
  title: string
  main?: boolean
  children?: ReactNode
}

export default function SectionTitleLineWithButton({ icon, title, main = false, children }: Props) {
  const hasChildren = !!Children.count(children)

  return (
    <section className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}>
      <div className="flex items-center justify-start">
        {icon && main && <DynamicIconRounded icon={icon} color="light" className="mr-3" bg />}
        {icon && !main && <DynamicIcon path={icon} className="mr-2" size="20" />}
        <h1 className={`leading-tight ${main ? 'text-3xl' : 'text-2xl'}`}>{title}</h1>
      </div>
      {children}
      {!hasChildren && <DynamicButton icon={mdiCog} color="whiteDark" />}
    </section>
  )
}
