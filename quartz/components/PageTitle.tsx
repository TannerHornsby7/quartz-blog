import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  return (
    <a href={`https://${cfg.baseUrl}`} class="profile-pic-link">
      <img src={`https://blog.${cfg.baseUrl}/static/icon.webp`} alt={title} class="profile-pic" />
    </a>
  )
}

PageTitle.css = `
.profile-pic-link {
  display: block;
  width: 75px;
  height: 75px;
  min-width: 75px;
  margin-right: 1rem;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 600px) {
  .profile-pic-link {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
