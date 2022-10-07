import { Fragment } from 'react'

import NavigationBar from './NavigationBar'

const Layout = ({ children, className }) => {
    return (
        <div className={className} >
            <NavigationBar />
            <main>{children}</main>
        </div>
    )
}

export default Layout