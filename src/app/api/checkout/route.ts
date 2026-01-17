// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST(req: NextRequest) {
  // Get the access token from environment variables inside the handler
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

  // Runtime check to ensure the access token is configured
  if (!accessToken) {
    console.error("Error: MERCADOPAGO_ACCESS_TOKEN is not set in .env.local or is not available in the server environment.");
    return NextResponse.json(
      { error: 'El servidor no está configurado correctamente para procesar pagos.' },
      { status: 500 }
    );
  }

  // Initialize the client with the verified access token
  const client = new MercadoPagoConfig({ 
    accessToken: accessToken
  });

  try {
    const preference = new Preference(client);

    const createdPreference = await preference.create({
      body: {
        items: [
          {
            id: 'mente-bursatil-01',
            title: 'Mente Bursátil - Edición Digital',
            quantity: 1,
            unit_price: 29.99,
            currency_id: 'USD',
            description: 'Acceso de por vida a la edición digital del libro Mente Bursátil.',
          },
        ],
        back_urls: {
          success: `${req.nextUrl.origin}/success`,
          failure: `${req.nextUrl.origin}/failure`,
          pending: `${req.nextUrl.origin}/pending`,
        },
        auto_return: 'approved',
      },
    });

    return NextResponse.json({ id: createdPreference.id, init_point: createdPreference.init_point });
  } catch (error) {
    console.error('Error creating payment preference:', error);
    return NextResponse.json(
      { error: 'Hubo un error al comunicarse con Mercado Pago. Por favor, intenta de nuevo.' },
      { status: 500 }
    );
  }
}
