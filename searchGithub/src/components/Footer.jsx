import React from 'react'

function Footer() {
  return (
    <footer className="text-center py-4 text-white bg-[#202746]">
    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    <p className="mt-2">Contact us at <a href="mailto:yaqoobahmed45700@gmail.com" className="underline">yaqoobahmed45700@gmail.com</a></p>
  </footer>
  )
}

export default Footer