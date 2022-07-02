import React from 'react'
import { Content } from '../components/Content'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function Dashboard() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='flex h-full max-h-full w-full'>
                <Sidebar />
                <Content />
            </main>
        </div>
    )
}