// app/api/fonts/route.js

import { NextResponse } from 'next/server'

export async function GET() {
  const fontUrl =
    'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap'
  const response = await fetch(fontUrl)

  if (!response.ok) {
    return NextResponse.error()
  }

  const css = await response.text()
  const headers = {
    'Content-Type': 'text/css',
    'Cache-Control': 'public, max-age=31536000, immutable',
  }

  return new NextResponse(css, { headers })
}
