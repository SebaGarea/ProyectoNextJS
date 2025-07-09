import Image from "next/image";
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageTitle from '@/components/PageTitle'

export const metadata = {
  title: 'Nosotros | El Portal Herrería',
  description: 'Contacta con nosotros'
}

export default function NosotrosPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Imagen representativa */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/pexels-tima-miroshnichenko-5846119.jpg"
            alt="Equipo El Portal Herrería"
            width={500}
            height={400}
            className="rounded-xl shadow-lg object-cover max-h-[350px]"
            priority
          />
        </div>
        {/* Info y formulario */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-8">
          <PageTitle>Sobre nosotros</PageTitle>
          <p className="text-lg text-gray-700 mb-10 mt-6">En El Portal Herrería combinamos pasión, creatividad y experiencia para transformar tus ideas en piezas únicas. Nos especializamos en muebles industriales y trabajos de herrería a medida, priorizando la calidad, la funcionalidad y el diseño.</p>
          <h3 className="text-xl font-semibold mb-4 mt-10 text-indigo-700">¿Querés contactarnos?</h3>
          <div className="space-y-4 mb-8">
            <p className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2 sm:mr-4 text-indigo-600" />
              <span>Banfield, Provincia de Buenos Aires, Argentina</span>
            </p>
            <Link 
              href="tel:+541140833655"
              className="flex items-center hover:text-indigo-700 text-gray-700"
            >
              <Phone className="w-5 h-5 mr-2 sm:mr-4 text-indigo-600" />
              <span>+54 11 4083-3655</span>
            </Link>
            <Link 
              href="mailto:elportal.herreria@gmail.com"
              className="flex items-center hover:text-indigo-700 text-gray-700"
            >
              <Mail className="w-5 h-5 mr-2 sm:mr-4 text-indigo-600" />
              <span>elportal.herreria@gmail.com</span>
            </Link>
          </div>
          <form className="space-y-8 mt-16">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Nombre completo
                <input 
                  type="text" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Nombre completo"
                />
              </label>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Email
                <input 
                  type="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="juan@ejemplo.com"
                />
              </label>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Mensaje
                <textarea 
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </label>
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-semibold text-lg shadow"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}