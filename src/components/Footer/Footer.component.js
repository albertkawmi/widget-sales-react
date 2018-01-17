import React from 'react'
import './Footer.css'

// TODO find a way to avoid extra wrapping div
// this was done for aligning the horizontal lines
const Footer = () => (
  <div className="wrap mb inset">
    <footer>
      <h6 className="footer-text">
        WidgetSales on GitHub:
        <br />
        <a className="footer-link" href="https://github.com/albertkawmi/widget-sales-react">widget-sales-react</a>
        &nbsp;|&nbsp;
        <a className="footer-link" href="https://github.com/albertkawmi/widget-sales-api">widget-sales-api</a>
      </h6>
      <h6>
        <a className="top-of-page footer-link" href="#top">Top of page ⬆︎</a>
      </h6>
    </footer>
  </div>
)

export default Footer
