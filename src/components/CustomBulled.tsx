import React, { FC } from 'react'

const CustomBulled: FC = () => {
    return (
        <span className="flex-shrink-0 w-4 h-4 mr-2 relative">
            <span className="absolute inset-0 border-2 border-primary-light  rounded-full"></span>
            <span className="absolute inset-1 bg-primary-light rounded-full"></span>
        </span>
    )
}

export default CustomBulled