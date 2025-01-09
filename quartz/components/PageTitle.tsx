import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  return (
    <a href={cfg.baseUrl}>
      <img src={`https://${cfg.baseUrl}/static/icon.webp`} alt={title} />
    </a>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
