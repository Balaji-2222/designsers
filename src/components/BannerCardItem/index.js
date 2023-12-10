import './index.css'

const Code = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={className}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <div>
          <button className="buttons">Show More</button>
        </div>
      </div>
    </li>
  )
}
export default Code
