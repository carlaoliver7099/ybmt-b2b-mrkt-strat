import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YBMT × CoSai Construction — Joint Venture Charter</title>
        <meta name="description" content="The plain-English explainer of the YBMT x CoSai Construction 3-year Joint Venture: 3 service lines, 3 regions, 3 years." />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fraunces:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="bg-[#fbfaf8] text-[#37352f] antialiased">{children}</body>
    </html>
  )
})
