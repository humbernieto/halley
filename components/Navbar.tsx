import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '#services', current: false },
  { name: 'Pricing', href: '#pricing', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" fixed top-0 left-0 right-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95 z-20">
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto lg:hidden"
                      src="/images/logos/logo-rose.svg"
                      alt="Logo Your Company"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      className="hidden h-8 w-auto lg:block"
                      src="/images/logos/logo-rose.svg"
                      alt="Logo Your Company"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />

                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-black' : 'text-black hover:underline',
                          'text-base font-semibold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-12 sm:right-0 flex items-center">
                  <Link href="#">
                    <button className="bg-black text-white border-2 border-solid border-black hover:bg-white hover:text-black rounded-full px-4 p-2 text-base font-medium">
                      Purchase Service
                    </button>
                  </Link>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-black ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <RiCloseFill className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-gray-200 bg-white">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-black' : 'text-black',
                    'block py-4 text-base font-medium border-b border-gray-200'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
