"use client"

function Footer() {
  return (
   <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1
    sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
            <h2 className="text-white text-lg font-semibold mb-4">
                About Us
            </h2>
            <p className="mb-4">
                Music school is a premier institution dedicated to teaching the art 
                and science of music. we nurture talent from the ground up,
                fostering a vibrant community of musicians.
            </p>
        </div>
        <div>
            <h2 className="text-white text-lg font-semibold mb-4">
                Quic Links
            </h2>
            <ul>
              <li>
                   <a href="#"
                    className="hover:text-white  transition-colors duration-300">
                        Home
                    </a>
              </li>
              <li>
                   <a href="#"
                    className="hover:text-white  transition-colors duration-300">
                        About
                    </a>
              </li>
              <li>
                   <a href="#"
                    className="hover:text-white  transition-colors duration-300">
                        Courses
                    </a>
              </li>
              <li>
                   <a href="#"
                    className="hover:text-white  transition-colors duration-300">
                        Contact
                    </a>
              </li>
            </ul>
        </div>
        <div>
            <h2 className="text-white text-lg font-semibold mb-4">
                Contect Us
            </h2>
            <p>New Delhi, India </p>
            <p>Delhi 10001</p>
            <p>Email:</p>
            <p>info@musicschool.com</p>
            <p>phone:(123) 456-789</p>
        </div>
        <div>
        <h2 className="text-white text-lg font-semibold mb-4">
                Follow Us
            </h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
    </div>
    <p className="text-center text-xs pt-8"> 2024 Music school. All rights reserved</p>
   </footer>
  )
}

export default Footer