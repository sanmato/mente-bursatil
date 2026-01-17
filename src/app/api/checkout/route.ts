// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
// Se comentan las importaciones de Mercado Pago para la simulación
// import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST(req: NextRequest) {
  console.log("Servidor: Recibida solicitud en /api/checkout. Respondiendo con un mock.");

  // --- IMPLEMENTACIÓN DE MOCK ---
  // Simulamos una respuesta exitosa para probar la conexión frontend <-> backend.
  try {
    const mockPreference = {
      id: 'MOCK_PREFERENCE_ID_12345',
      // Esta es una URL de prueba falsa. En un caso real, te redirigiría a Mercado Pago.
      init_point: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=MOCK_PREFERENCE_ID_12345'
    };

    // Simulamos una pequeña demora de red
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log("Servidor: Mock exitoso. Enviando init_point:", mockPreference.init_point);
    return NextResponse.json({ id: mockPreference.id, init_point: mockPreference.init_point });

  } catch (error) {
    // Este bloque no debería ejecutarse con el mock, pero se mantiene por seguridad.
    console.error('Error en el mock de /api/checkout:', error);
    return NextResponse.json(
      { error: 'Hubo un error en el mock del servidor.' },
      { status: 500 }
    );
  }
}
