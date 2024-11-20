import React from 'react';
import { Book, Phone, ShoppingCart, User, Mail } from "lucide-react";

export default function RentalForm() {
  return (
    <div className="flex min-h-screen bg-[#fdf9f3]">
      {/* Sidebar */}
      <div className="w-20 bg-[#f4b860] flex flex-col items-center py-6 gap-8">
        <div className="flex flex-col items-center gap-8">
          <User className="w-8 h-8" />
          <ShoppingCart className="w-8 h-8" />
          <Book className="w-8 h-8" />
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <Mail className="w-8 h-8" />
          <Phone className="w-8 h-8" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Realiza tu renta</h1>
            <p className="text-gray-600">Selecciona tu tipo de renta</p>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="bg-[#ffe4ba] p-4 rounded-lg text-xl font-semibold">Paquete</h2>
            </div>
            <div className="p-6 space-y-4">
              {['No. Unidades', 'Color', 'Fecha', 'Lugar', 'Evento'].map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
                  <div className="bg-[#ffe4ba] p-4 rounded-lg font-medium">{item}</div>
                  <div className="col-span-2 bg-[#bcd979] p-4 rounded-lg"></div>
                </div>
              ))}

              <div className="mt-6 bg-[#ffe4ba] p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Este paquete incluye:</h3>
                <ul className="space-y-1">
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-[#b08968] text-white px-4 py-2 rounded-lg">Precio</div>
                  <div className="bg-[#b08968] text-white px-4 py-2 rounded-lg"></div>
                </div>
                <div className="bg-gray-300 px-4 py-2 rounded-lg">
                  Paquetes seleccionados:
                </div>
              </div>

              <div className="mt-6 flex gap-4 justify-end">
                <button className="bg-[#ffeb3b] text-black px-4 py-2 rounded-lg hover:bg-[#fdd835]">
                  Agregar paquete
                </button>
                <button className="bg-[#ff7043] text-white px-4 py-2 rounded-lg hover:bg-[#f4511e]">
                  Completar renta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}