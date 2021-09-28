import React, { FC } from 'react'
import CN from 'classnames'

import styles from './[FTName].module.scss'

interface <FTName>Props {
  [x: string]: any
}

export const <FTName>: FC<<FTName>Props> = ({
  className,
  ...restProps
}: <FTName>Props) => {
  const <FTName>Classes = CN(styles['<FTName|kebabcase>'], '', className, {})

  return (
    <div className={<FTName>Classes} {...restProps}>
      <FTName | kebabcase> is working...
    </div>
  )
}

<FTName>.defaultProps = {
  
}

export default <FTName>
