import React from 'react'

import  Logo  from './Logo'
import {BrandStyles} from './styles'
function Brand  (props){
  return( 
    <BrandStyles {...props}>
      <Logo height={props.iconSize} fill={props.fill} stroke={props.stroke}/>
      <figcaption>speck</figcaption>
    </BrandStyles>
  )
}

export default Brand 