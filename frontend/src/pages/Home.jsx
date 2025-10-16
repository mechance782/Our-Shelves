import Welcome from '../components/Welcome.jsx';
import SearchSection from '../components/SearchSection.jsx'

// Home component that includes Welcome and SearchSection components
const Home = ({ setSelectedBook }) => {
    return (
    <>
    <Welcome />
    <SearchSection setSelectedBook={setSelectedBook} />
    </>
    )

}

export default Home;