/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MailOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const MailOutline = forwardRef<SVGSVGElement, MailOutlineProps>((props, ref) => {
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
        d="M5.205 5h13.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v7.59c0 1.115-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334H5.205c-1.115 0-1.519-.116-1.926-.334a2.272 2.272 0 0 1-.945-.945C2.116 17.314 2 16.91 2 15.795v-7.59c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C3.686 5.116 4.09 5 5.205 5zM4 9.5l-.145-1.737.084-.056 1.059.923 5.562 3.919a2.5 2.5 0 0 0 2.88 0l5.558-3.915 1.062-.927.085.056L20 9.5v6.295c0 .427-.019.694-.049.849a.353.353 0 0 1-.049.134.275.275 0 0 1-.124.125.353.353 0 0 1-.134.048c-.155.03-.422.049-.849.049H5.205c-.427 0-.694-.019-.849-.049a.353.353 0 0 1-.134-.049.275.275 0 0 1-.124-.124.353.353 0 0 1-.049-.134c-.03-.155-.049-.422-.049-.849V9.5zm14.55-2.8L16 7H8l-2.55-.3-.103.069a10 10 0 0 1 2.069 1.119l4.296 3.026a.5.5 0 0 0 .576 0L16.58 7.89a9.999 9.999 0 0 1 2.073-1.12l-.104-.07z"
        fill="currentColor"
      />
    </svg>
  )
})
