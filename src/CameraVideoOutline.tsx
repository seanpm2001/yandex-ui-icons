/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CameraVideoOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const CameraVideoOutline = forwardRef<SVGSVGElement, CameraVideoOutlineProps>(
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
          d="M13.795 5h-8.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C2.116 6.686 2 7.09 2 8.205v7.59c0 1.115.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h8.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.185-.346.297-.69.326-1.468l3.108 1.891a1.25 1.25 0 0 0 1.9-1.068V6.924a1.25 1.25 0 0 0-1.9-1.068l-3.108 1.89c-.03-.778-.14-1.121-.326-1.467a2.272 2.272 0 0 0-.945-.945C15.314 5.116 14.91 5 13.795 5zm1.203 11c-.005.31-.022.515-.047.644a.353.353 0 0 1-.049.134.275.275 0 0 1-.124.125.353.353 0 0 1-.134.048c-.155.03-.422.049-.849.049h-8.59c-.427 0-.694-.019-.849-.049a.353.353 0 0 1-.134-.049.275.275 0 0 1-.124-.124.353.353 0 0 1-.049-.134c-.03-.155-.049-.422-.049-.849v-7.59c0-.427.019-.694.049-.849a.353.353 0 0 1 .049-.134.275.275 0 0 1 .124-.124.353.353 0 0 1 .134-.049c.155-.03.422-.049.849-.049h8.59c.427 0 .694.019.849.049.06.012.074.017.134.049a.275.275 0 0 1 .124.124c.032.06.037.073.049.134.025.129.042.334.047.644H15v1.5a1 1 0 0 0 1.515.857L20 8.268v7.467l-3.485-2.091A1 1 0 0 0 15 14.5V16h-.002z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
