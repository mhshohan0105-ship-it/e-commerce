import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: '2026 Raptor X Elite', category: 'Trucks', price: 82500, year: 2026, mileage: 0, image: '', description: 'The ultimate off-road performance truck with a twin-turbo V6 engine and adaptive suspension for any terrain.', specs: { engine: '3.5L Twin-Turbo V6', horsepower: 450, torque: '510 lb-ft', transmission: '10-Speed Auto' } },
      { id: 2, name: '2026 Phantom GT Sedan', category: 'Performance Sedans', price: 95000, year: 2026, mileage: 0, image: '', description: 'A breathtaking grand tourer with a supercharged V8 and hand-stitched leather interior.', specs: { engine: '5.0L Supercharged V8', horsepower: 620, torque: '580 lb-ft', transmission: '8-Speed Auto' } },
      { id: 3, name: '2025 Grand Summit SUV', category: 'SUVs & Crossovers', price: 76990, year: 2025, mileage: 12400, image: '', description: 'Family-ready luxury SUV with three-row seating, panoramic roof, and advanced driver assistance.', specs: { engine: '3.0L Turbocharged V6', horsepower: 365, torque: '420 lb-ft', transmission: '9-Speed Auto' } },
      { id: 4, name: '2024 EcoHatch Hybrid', category: 'SUVs & Crossovers', price: 42500, year: 2024, mileage: 18200, image: '', description: 'Smart hybrid crossover balancing efficiency and adventure with intelligent AWD.', specs: { engine: '2.5L Hybrid I4', horsepower: 219, torque: '165 lb-ft', transmission: 'CVT' } },
      { id: 5, name: '2026 Titan V8 Coupe', category: 'Performance Sedans', price: 112000, year: 2026, mileage: 0, image: '', description: 'Raw muscle meets refined elegance. Hand-built V8 with carbon fiber body panels and track-ready braking.', specs: { engine: '6.2L Natural Aspirated V8', horsepower: 760, torque: '625 lb-ft', transmission: '7-Speed DCT' } },
      { id: 6, name: '2025 LuxurY Touring L', category: 'Performance Sedans', price: 88000, year: 2025, mileage: 4800, image: '', description: 'Long-wheel-base luxury flagship with massaging seats, AI climate control, and Level 2 autonomy.', specs: { engine: '4.4L Twin-Turbo V8', horsepower: 523, torque: '553 lb-ft', transmission: '8-Speed Auto' } },
      { id: 7, name: '2026 Atlas Commander 4x4', category: 'Trucks', price: 65000, year: 2026, mileage: 0, image: '', description: 'Mid-size powerhouse for work and weekends with locking rear diff and 8,500 lb towing capacity.', specs: { engine: '3.0L Diesel V6', horsepower: 310, torque: '460 lb-ft', transmission: '8-Speed Auto' } },
      { id: 8, name: '2024 City Glide EV', category: 'SUVs & Crossovers', price: 52000, year: 2024, mileage: 7300, image: '', description: 'All-electric urban crossover with 350-mile range, fast charge capability, and a stunning glass roof.', specs: { engine: 'Dual-Motor Electric', horsepower: 402, torque: '450 lb-ft', transmission: '1-Speed Direct Drive' } },
    ],
    categories: ['SUVs & Crossovers', 'Performance Sedans', 'Trucks', 'Luxury Trucks']
  }),
  getters: {
    getProductsByCategory: (state) => {
      return (category: string) => state.products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    },
    getProductById: (state) => {
      return (id: string | number) => state.products.find(p => p.id === Number(id))
    },
    newVehicles: (state) => state.products.filter(p => p.mileage === 0),
    usedVehicles: (state) => state.products.filter(p => p.mileage > 0),
  }
})
