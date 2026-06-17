import React from 'react'
import Body from '../components/Body'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import NewsLetterbox from '../components/NewsLetterbox'
import RelatedProduct from '../components/RelatedProduct'

const Home = () => {
  return (
    <div>
      <Body />
     <LatestCollection/>
     <BestSeller/>
     <Ourpolicy/>
     <NewsLetterbox/>
     <RelatedProduct/>
    </div>
  )
}

export default Home

