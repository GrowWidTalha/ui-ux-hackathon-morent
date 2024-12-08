import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  return (
    <div className="bg-white py-4">
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-blue-600 text-2xl font-bold">
            MORENT
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search something here"
                className="w-full pl-10 pr-12 py-2 rounded-full border border-gray-200"
              />
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className="text-gray-400"
                />
              </div>
              <div className="absolute inset-y-0 right-3 flex items-center">
                <Image
                  src="/icons/filter.svg"
                  alt="Filter"
                  width={20}
                  height={20}
                  className="text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center">
            <Image
              src="/images/Profil.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
