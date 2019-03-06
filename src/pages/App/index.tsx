import './index.css'
import React, { useState, useEffect } from 'react'
import Base from '@src/layouts/Base'

export default function App() {
    const [appName, setAppName] = useState('xxj')
    const [color, setColor] = useState('red')

    return (
        <Base>
            <div className="page-app">123</div>
            <FooFoo name={appName} color={color} />
            <button
                onClick={() => {
                    setAppName('qc')
                }}
            >
                change app name
            </button>
            <button
                onClick={() => {
                    setColor('blue')
                }}
            >
                change app color
            </button>
        </Base>
    )
}

interface FooFooProps {
    name: string
    color: string
}

function FooFoo(props: FooFooProps) {
    const { name, color } = props

    useEffect(() => {
        console.log('hi, i am Foo Foo')

        return () => {
            console.log('goodbye!')
        }
    }, [name])

    return (
        <div>
            <h2>
                my name is: {name}, and my color is: {color}
            </h2>
        </div>
    )
}
