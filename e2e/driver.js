/* globals __baseUrl__ */
import { Builder, until } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'

// Setup a headless Chrome webdriver
const options = new chrome.Options()
    .addArguments('headless')
    .addArguments('window-size=1200x600')

export const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()

// Cleanup `process.on('exit')` event handlers to prevent a memory leak
// caused by the combination of `jest` & `tmp`.
afterAll(async () => {
  for (const listener of process.listeners('exit')) {
    listener()
    process.removeListener('exit', listener)
  }
  await driver.quit()
})

// Helpers
export const defaultTimeout = 10e3

export const rootEl = () => driver.findElement({ css: '#root' })

export const load = async (path) => {
  await driver.get(`${__baseUrl__}/${path}`)
  await driver.wait(until.elementLocated(rootEl), defaultTimeout)
}
