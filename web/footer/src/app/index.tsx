import { FooterElement } from './styles'

export function Footer() {
  return (
    <FooterElement data-testid="footer">
      <span className="footer__text">
        <a target="_blank" className="footer__text" href="https://www.thejuanbm.com">
          TheJuanBM
        </a>
        &nbsp;&#124;&nbsp;&copy;{new Date().getFullYear()}
      </span>
    </FooterElement>
  )
}
