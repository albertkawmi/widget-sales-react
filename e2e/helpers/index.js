import { Builder, until } from 'selenium-webdriver'
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

export const root = () => driver.findElement(rootSelector)

export const first = selector => root().findElement(selector)

export const find = selector => root().findElements(selector)

export const load = async () => {
  await driver.get(`${__baseUrl__}/`)
  await driver.wait(until.elementLocated(root), defaultTimeout)
}
