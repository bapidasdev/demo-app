import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'

const ProductListModal = ({closeopenProductListModal}) => {
  return (
    <div>
      ProductListModal

      <div className='productlistdelete'>
        <Tooltip title="Delete">
          <IconButton>
            <MdDeleteSweep onClick={() => closeopenProductListModal(false)} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}

export default ProductListModal
