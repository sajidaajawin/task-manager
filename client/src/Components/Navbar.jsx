import React from 'react'

function Navbar() {
  return (
    <header class='font-[sans-serif] min-h-[60px]'>
      <div class='flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 bg-[#151d20] lg:gap-y-4 gap-y-6 gap-x-4'>
        <a href="javascript:void(0)"><img
          src="https://readymadeui.com/readymadeui-white.svg" alt="logo" class='w-36' />
        </a>
        <div class='flex items-center max-sm:ml-auto lg:order-1'>
          <ul class="flex space-x-4">
            <li
              class="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="cursor-pointer fill-white"
                viewBox="0 0 512 512">
                <path
                  d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                  data-original="#000000" />
              </svg>
            </li>
            {/* <li
              class="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <span class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="cursor-pointer fill-white inline-block"
                  viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                <span
                  class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
              </span>
            </li> */}
          </ul>
          <button class='lg:hidden ml-7'>
            <svg class="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <ul class='flex lg:space-x-10 max-lg:space-y-2 max-lg:block max-lg:w-full'>
          <li
            class='max-lg:border-b max-lg:py-2 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Sign in</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Sign up</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Support</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Account</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Places</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar