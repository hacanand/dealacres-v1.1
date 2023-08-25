import styles from './navbar2.module.css'

const Navbar02 = () => {

    const Menu = () => (
        <>
          <p>
            <a href="#Overview">Overview</a>
          </p>
          <p>
            <a href="#seller">Specification</a>
          </p>
          <p>
            <a href="#Amenities">Amenities</a>
          </p>
          <p>
            <a href="#MortgageCalculator">Mortgage Calculator</a>
          </p>
          <p>
            <a href="#About Builder">About Builder</a>
          </p>
          <p>
            <a href="#Locality Overview">Locality Overview</a>
          </p>
          <p>
            <a href="#Properties By Builder">Properties By Builder</a>
          </p>
        </>
    );

    return (
      <div className={styles.navbarContainer}>
        <Menu/>
      </div>
    )
}

export default Navbar02