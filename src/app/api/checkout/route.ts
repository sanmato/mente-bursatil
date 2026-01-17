// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST(req: NextRequest) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json({ error: 'Falta token' }, { status: 500 });
  }

  const client = new MercadoPagoConfig({ accessToken });
  const preference = new Preference(client);

  const origin = 'req.nextUrl.origin' || "http://localhost:3000"; 

  try {
    const body = {
      items: [
        {
          id: 'mente-bursatil-01',
          title: 'Mente Bursátil - Edición Digital',
          quantity: 1,
          unit_price: 25000,   // El SDK suele aceptar snake_case en items, pero lo ideal es unitPrice
          currency_id: 'ARS',  // idealmente currencyId
          description: 'Acceso de por vida a la edición digital del libro Mente Bursátil.',
        },
      ],
      // CAMBIO CLAVE 1: De back_urls a backUrls
      backUrls: {
        success: `${origin}/success`,
        failure: `${origin}/`,
        pending: `${origin}/`,
      },
      // CAMBIO CLAVE 2: De auto_return a autoReturn
      autoReturn: 'approved',
      
      // CAMBIO CLAVE 3: De binary_mode a binaryMode
      binaryMode: true, 
    };

    const result = await preference.create({ body });
    
    return NextResponse.json({ id: result.id, init_point: result.init_point });

  } catch (error) {
    console.error('Error MP:', error);
    return NextResponse.json(
      { error: 'Error al crear preferencia', details: error },
      { status: 500 }
    );
  }
}