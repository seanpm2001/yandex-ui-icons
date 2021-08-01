/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CopyOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const CopyOutline = forwardRef<SVGSVGElement, CopyOutlineProps>((props, ref) => {
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
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 5h7.795c1.115 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926V16a1 1 0 1 0 2 0V8.128c0-1.783-.186-2.43-.534-3.082a3.635 3.635 0 0 0-1.512-1.512C18.302 3.186 17.655 3 15.872 3H8a1 1 0 0 0 0 2zM6.205 7c-.882 0-1.393.049-1.926.334a2.272 2.272 0 0 0-.945.945C3.049 8.812 3 9.323 3 10.205v7.59c0 .882.049 1.392.334 1.926.218.407.538.727.945.945.533.285 1.044.334 1.926.334h7.59c.882 0 1.393-.049 1.926-.334.407-.218.727-.538.945-.945.285-.534.334-1.044.334-1.926v-7.59c0-.882-.049-1.393-.334-1.926a2.272 2.272 0 0 0-.945-.945C15.187 7.049 14.677 7 13.795 7h-7.59zm-.983 2.098a.52.52 0 0 1 .197-.062c.138-.021.363-.036.786-.036h7.59c.423 0 .648.015.786.036a.52.52 0 0 1 .197.062.275.275 0 0 1 .124.124.52.52 0 0 1 .062.197c.021.138.036.363.036.786v7.59c0 .423-.015.648-.036.786a.52.52 0 0 1-.062.197.275.275 0 0 1-.124.125.52.52 0 0 1-.197.06c-.138.022-.363.037-.786.037h-7.59c-.423 0-.648-.015-.786-.036a.52.52 0 0 1-.197-.061.275.275 0 0 1-.124-.125.52.52 0 0 1-.062-.197c-.021-.138-.036-.363-.036-.786v-7.59c0-.423.015-.648.036-.786a.52.52 0 0 1 .062-.197.275.275 0 0 1 .124-.124z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
