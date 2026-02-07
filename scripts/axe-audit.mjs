import { chromium } from 'playwright'
import { AxeBuilder } from '@axe-core/playwright'
import fs from 'node:fs'

const BASE_URL = 'http://127.0.0.1:3000'
const ROUTES = [
  ['home', '/'],
  ['tech', '/tech'],
  ['personal', '/personal'],
  ['tools', '/tools'],
  ['about', '/about'],
  ['guestbook', '/guestbook'],
]

const viewports = [
  { label: 'desktop', width: 1440, height: 900 },
]

const audit = async () => {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  page.on('console', (msg) => console.log(`[browser:${msg.type()}]`, msg.text()))

  const results = []

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height })

    for (const [label, route] of ROUTES) {
      const url = `${BASE_URL}${route}`
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 })
      await page.waitForSelector('body', { timeout: 60000 })
      await page.waitForTimeout(1000)

      const axe = new AxeBuilder({ page })
      const report = await axe.analyze()

      results.push({
        viewport: vp.label,
        label,
        url,
        violations: report.violations,
        passes: report.passes,
        incomplete: report.incomplete,
        timestamp: new Date().toISOString(),
      })
    }
  }

  await browser.close()
  return results
}

const run = async () => {
  try {
    const results = await audit()
    const output = {
      tool: 'axe-core',
      generatedAt: new Date().toISOString(),
      results,
    }
    fs.writeFileSync('/root/.openclaw/workspace/blogweb/axe-report.json', JSON.stringify(output, null, 2))
    console.log('AXE report written to axe-report.json')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

run()
