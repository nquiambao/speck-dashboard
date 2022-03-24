import React from 'react'

import {PanelStyles, PanelHeader, PanelBody} from './styles'

function EditProductPanel ({title, ...props}) {
    return (
      <>
        <PanelStyles>
          <PanelHeader>
            <h1>{title || "Display Panel"}</h1>
          </PanelHeader>
          <PanelBody>
            
          </PanelBody>
        </PanelStyles>
      </>
    )
}

export default EditProductPanel