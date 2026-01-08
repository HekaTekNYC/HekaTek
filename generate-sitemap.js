// generate-sitemap.js - Auto-extract version
const fs = require("fs")
const path = require("path")

// Read App.js file to extract routes
const appFilePath = path.join(__dirname, "src", "App.js")

try {
  const appContent = fs.readFileSync(appFilePath, "utf8")

  const routeRegex = /path="([^"]+)"/g
  const routes = []
  let match

  while ((match = routeRegex.exec(appContent)) !== null) {
    routes.push(match[1])
  }

  console.log("Auto-detected routes:", routes)

  // If no routes found, use default ones
  const finalRoutes =
    routes.length > 0
      ? routes
      : [
          "/",
          "/services",
          "/work",
          "/pricing",
          "/contact",
          "/faq",
          "/free-audit",
        ]

  generateSitemap(finalRoutes)
} catch (error) {
  console.log("Could not auto-read routes, using default routes")
  const defaultRoutes = [
    "/",
    "/services",
    "/work",
    "/pricing",
    "/contact",
    "/faq",
    "/free-audit",
  ]
  generateSitemap(defaultRoutes)
}

function generateSitemap(routes) {
  const baseUrl = "https://hekateknyc.com"
  const currentDate = new Date().toISOString().split("T")[0]
  const outputPath = path.join(__dirname, "dist", "sitemap.xml")

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`

  routes.forEach(route => {
    xml += `  <url>\n`
    xml += `    <loc>${baseUrl}${route === "/" ? "" : route}</loc>\n`
    xml += `    <lastmod>${currentDate}</lastmod>\n`
    xml += `    <changefreq>${
      route === "/" ? "weekly" : "monthly"
    }</changefreq>\n`
    xml += `    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n`
    xml += `  </url>\n`
  })

  xml += "</urlset>"

  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), {recursive: true})
  }

  fs.writeFileSync(outputPath, xml)
  console.log(`Sitemap generated with ${routes.length} routes`)
}
