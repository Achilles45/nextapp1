import headerStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div className={ headerStyles.overlay }>
        <h1 className={ headerStyles.title }>
            <span>QuruLab</span> Studio
        </h1>
        <p className={ headerStyles.description }>This is the details of the header component of the application</p>
    </div>
  )
}

export default Header