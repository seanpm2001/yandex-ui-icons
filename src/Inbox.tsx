/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface InboxProps extends SVGAttributes<SVGSVGElement> {
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

export const Inbox = forwardRef<SVGSVGElement, InboxProps>((props, ref) => {
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
        d="M6.205 3h11.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v11.59c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334H6.205c-1.115 0-1.519-.116-1.926-.334a2.272 2.272 0 0 1-.945-.945C3.116 19.314 3 18.91 3 17.795V6.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C4.686 3.116 5.09 3 6.205 3zm0 2c-.427 0-.694.019-.849.049a.353.353 0 0 0-.134.049.275.275 0 0 0-.124.124.353.353 0 0 0-.049.134c-.03.155-.049.422-.049.849V15h3.413c.321 0 .607.205.754.49.375.728 1.258 2.01 2.833 2.01 1.575 0 2.458-1.282 2.833-2.01.147-.285.433-.49.754-.49H19V6.205c0-.427-.019-.694-.049-.849a.353.353 0 0 0-.049-.134.275.275 0 0 0-.124-.124.353.353 0 0 0-.134-.049c-.155-.03-.422-.049-.849-.049H6.205z"
        fill="currentColor"
      />
    </svg>
  )
})
