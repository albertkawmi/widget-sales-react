import { Builder, By, until } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'

const rootSelector = { css: '#root' }

const options = new chrome.Options()
    .addArguments('headless')
    .addArguments('window-size=1200x600')

export const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .usingServer('http://localhost:4444/wd/hub')
  .build()

afterAll(async () => {
  // Cleanup `process.on('exit')` event handlers to prevent a memory leak caused by the combination of `jest` & `tmp`.
  for (const listener of process.listeners('exit')) {
    listener()
    process.removeListener('exit', listener)
  }
  await driver.quit()
})

export const defaultTimeout = 10e3

export const rootEl = () => driver.findElement(rootSelector)

export const load = async (path) => {
  await driver.get(`${__baseUrl__}/${path}`)
  await driver.wait(until.elementLocated(rootEl), defaultTimeout)
}
