import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const title = searchParams.get('title')?.slice(0, 100) || 'QRBuild - Free QR Code Generator';
    const type = searchParams.get('type') || 'website';
    const description = searchParams.get('description');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #e5e7eb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e5e7eb 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '60px',
              borderRadius: '24px',
              border: '2px solid #e5e7eb',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              maxWidth: '900px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#111827',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '32px',
                }}
              >
                QR
              </div>
              <span
                style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  color: '#111827',
                  letterSpacing: '-1px',
                }}
              >
                QRBuild
              </span>
            </div>

            <h1
              style={{
                fontSize: '64px',
                fontWeight: 900,
                color: '#111827',
                lineHeight: 1.1,
                marginBottom: '24px',
                letterSpacing: '-2px',
                maxWidth: '800px',
              }}
            >
              {title}
            </h1>

            {description && (
              <p
                style={{
                  fontSize: '32px',
                  color: '#4b5563',
                  maxWidth: '700px',
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {description}
              </p>
            )}

            <div
              style={{
                marginTop: '48px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span
                style={{
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  padding: '8px 16px',
                  borderRadius: '99px',
                  fontSize: '20px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {type}
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
        },
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
