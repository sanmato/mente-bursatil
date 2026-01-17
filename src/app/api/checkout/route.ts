// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST(req: NextRequest) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (!accessToken) {
    console.error("MERCADOPAGO_ACCESS_TOKEN no está configurado.");
    return NextResponse.json(
      { error: 'Error de configuración del servidor: Falta el token de acceso.' },
      { status: 500 }
    );
  }

  const client = new MercadoPagoConfig({ accessToken });
  const preference = new Preference(client);

  try {
    const body = {
      items: [
        {
          id: 'mente-bursatil-01',
          title: 'Mente Bursátil - Edición Digital',
          quantity: 1,
          unit_price: 25000,
          currency_id: 'ARS',
          description: 'Acceso de por vida a la edición digital del libro Mente Bursátil.',
        },
      ],
      back_urls: {
        success: `${req.nextUrl.origin}/success`,
        failure: `${req.nextUrl.origin}/`,
        pending: `${req.nextUrl.origin}/`,
      },
      auto_return: 'approved',
    };

    const result = await preference.create({ body });
    
    return NextResponse.json({ id: result.id, init_point: result.init_point });

  } catch (error) {
    console.error('Error al crear la preferencia de Mercado Pago:', error);
    return NextResponse.json(
      { error: 'No se pudo crear la preferencia de pago.' },
      { status: 500 }
    );
  }
}
