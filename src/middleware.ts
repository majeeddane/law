import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>الموقع متوقف</title>
      <style>
        body { 
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          margin: 0; 
          background-color: #071428; 
          color: #fff; 
          text-align: center; 
        }
        .container { 
          padding: 3rem; 
          border-radius: 24px; 
          background: rgba(255, 255, 255, 0.03); 
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          max-w-md;
        }
        h1 { 
          color: #C8A96A; 
          margin-top: 0;
          margin-bottom: 1rem; 
          font-size: 2.2rem; 
          font-weight: bold;
        }
        p { 
          color: rgba(255, 255, 255, 0.6); 
          font-size: 1.1rem; 
          margin: 0;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>الموقع متوقف مؤقتاً</h1>
        <p>الوصول إلى الموقع غير متاح حالياً.<br/>يرجى المحاولة في وقت لاحق.</p>
      </div>
    </body>
    </html>`,
    {
      status: 503,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    }
  )
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
