/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface SearchImageOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const SearchImageOutline = forwardRef<SVGSVGElement, SearchImageOutlineProps>(
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
          d="M10.51 3h2.98c.794 0 1.077.045 1.385.144.308.1.574.253.815.469.24.215.423.438.823 1.123L17.25 6h1.545c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v7.772c0 2.77-3.434 4.06-5.258 1.976l-2.952-3.375a4 4 0 1 1 1.508-1.314l2.95 3.372c.607.695 1.752.265 1.752-.659V9.205c0-.427-.019-.694-.049-.849a.353.353 0 0 0-.049-.134.275.275 0 0 0-.124-.124.353.353 0 0 0-.134-.049c-.155-.03-.422-.049-.849-.049H17.25a2 2 0 0 1-1.728-.992l-.737-1.264c-.275-.472-.346-.567-.43-.642a.222.222 0 0 0-.094-.054c-.107-.035-.225-.048-.77-.048H10.51c-.546 0-.664.013-.771.048a.222.222 0 0 0-.094.054c-.084.075-.155.17-.43.642l-.737 1.264A2 2 0 0 1 6.75 8H5.205c-.427 0-.694.019-.849.049a.353.353 0 0 0-.134.049.275.275 0 0 0-.124.124.353.353 0 0 0-.049.134c-.03.155-.049.422-.049.849v7.59c0 .427.019.694.049.849.012.06.017.074.049.134a.275.275 0 0 0 .124.125c.06.031.073.036.134.048.155.03.422.049.849.049H12a1 1 0 1 1 0 2H5.205c-1.115 0-1.519-.116-1.926-.334a2.272 2.272 0 0 1-.945-.945C2.116 18.314 2 17.91 2 16.795v-7.59c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C3.686 6.116 4.09 6 5.205 6H6.75l.737-1.264c.4-.685.582-.908.823-1.123.24-.216.507-.37.815-.469C9.433 3.045 9.716 3 10.51 3zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
