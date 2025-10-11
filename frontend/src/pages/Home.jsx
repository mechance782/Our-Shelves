import Welcome from '../components/Welcome.jsx';
import SearchSection from '../components/SearchSection.jsx'

const Home = ({ setSelectedBook }) => {
    return (
    <>
    <Welcome />
    <SearchSection setSelectedBook={setSelectedBook} />
    </>
    )

}

export default Home;