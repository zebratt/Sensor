import React from 'react'

class Foo extends React.Component {
    state = {
        fooCount: 1,
    }
    componentDidMount() {}
    componentDidCatch(error: Error) {
        console.log(error)
    }
    render() {
        return (
            <div>
                <h1>Foo Comp</h1>
            </div>
        )
    }
}

export default Foo
