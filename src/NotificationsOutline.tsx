/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsOutlineProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Additional className for svg root
   */
  className?: string
  /**
   * Icon size
   *
   * @default 24
   */
  size?: 12 | 16 | 24 | 32
}

export const NotificationsOutline = forwardRef<SVGSVGElement, NotificationsOutlineProps>(
  (props, ref) => {
    const { className, size = 24, ...otherProps } = props

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        {...otherProps}
        focusable="false"
        aria-hidden="true"
        className={'SvgIcon' + (className ? ' ' + className : '')}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.88 2.603A.75.75 0 0 1 11.614 2h.77a.75.75 0 0 1 .735.603l.143.712a1.5 1.5 0 0 0 .75 1.02l.3.165a5.586 5.586 0 0 1 3.239 4.47l.54 4.864c.101.905.564 1.732 1.283 2.291l.354.275a1.5 1.5 0 0 1 .534 1.548L20.25 18a1.32 1.32 0 0 1-1.281 1H15a3 3 0 1 1-6 0H5.03a1.32 1.32 0 0 1-1.28-1l-.013-.052A1.5 1.5 0 0 1 4.27 16.4l.354-.275a3.375 3.375 0 0 0 1.282-2.291l.54-4.865A5.586 5.586 0 0 1 9.688 4.5l.3-.164a1.5 1.5 0 0 0 .75-1.021l.142-.712zm5.225 11.451c.122 1.1.4 2.096 1.795 2.946H6.1c1.399-.85 1.673-1.846 1.795-2.946l.54-4.864a3.586 3.586 0 0 1 7.129 0l.54 4.864z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
