/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MessengerUnreadOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const MessengerUnreadOutline = forwardRef<SVGSVGElement, MessengerUnreadOutlineProps>(
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
          d="M19 10c-.05 0-.1 0-.15-.002a7.532 7.532 0 0 1-.418 4.372 5.741 5.741 0 0 0-.435 1.813C17.913 17.408 19 19 19 19s-1.591-1.092-2.816-1.007a5.774 5.774 0 0 0-1.814.439A7.47 7.47 0 0 1 11.5 19a7.5 7.5 0 1 1 2.531-14.562c.077-.686.293-1.33.618-1.904A9.485 9.485 0 0 0 11.5 2a9.5 9.5 0 1 0 0 19 9.47 9.47 0 0 0 3.636-.72c.736-.306 1.454-.388 2.154-.245a2 2 0 0 1 .26.071l1.912.667a1.03 1.03 0 0 0 1.311-1.31l-.663-1.903a2.015 2.015 0 0 1-.076-.281c-.135-.708-.054-1.422.245-2.143a9.547 9.547 0 0 0 .542-5.478A4.987 4.987 0 0 1 19 10zm-7.5 6a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm2.5-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
