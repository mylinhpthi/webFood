import React from 'react'
import Test from '../Test'
import Banner from './Banner'
import Category from './Category'
import HotDeals from './HotDeals'
import Shared from './Shared'

function MainLayOut() {
    return (
        <div>
            <Banner />
            <Category />
            <Shared />
            <HotDeals />
            <Test />
        </div>
    )
}

export default MainLayOut
