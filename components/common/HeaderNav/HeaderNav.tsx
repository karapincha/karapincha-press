import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'

import styles from './HeaderNav.module.scss'

interface HeaderNavProps {
  [x: string]: any
}

export const HeaderNav: FC<HeaderNavProps> = ({
  className,
  ...restProps
}: HeaderNavProps) => {
  const HeaderNavClasses = CN(
    styles['header-nav'],
    'flex bg-yellow-100 py-4',
    className,
    {}
  )

  return (
    <div className={HeaderNavClasses} {...restProps}>
      <div className='container mx-auto'>
        <ul className='flex'>
          <li className='mr-4'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

HeaderNav.defaultProps = {}

export default HeaderNav
