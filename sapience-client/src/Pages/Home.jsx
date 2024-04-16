import React ,{useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards';
import StudyMateListsing from './StudyMateListsing';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const Home = () => {
  const [selectedCategory, setSelectedCategory] =useState(null);
  const [studymateListings, setStudymateListings] =useState([]);
const [isLoading, setIsLoading]= useState(true);
const [currentPage, setCurrentPage]= useState(1);
const itemsPerPage = 6;


  useEffect(()=> {
    setIsLoading(true);
    //use studymatelisting.json file path here when you want to filters
    fetch("http://localhost:3000/all-posts").then(res => res.json()).then(data =>{
      setStudymateListings(data);
      setIsLoading(false);
    })
  }, [])
  const [query, setQuery] = useState("");
  const handleInputChange =(event)=>{
    setQuery(event.target.value)
  }
  
  const filteredItems = studymateListings.filter((studymateListing) => {
    if (studymateListing.title) {
      const titleLower = studymateListing.title.toLowerCase();
      const queryLower = query.toLowerCase();
      // Check if the title contains the sequence of letters from the query
      return titleLower.includes(queryLower);
    }
    return false; // If title is undefined, skip this listing
  });
    
    // radio filtering
  const handleChange =(event)=>{
    setSelectedCategory(event.target.value)
  }
  //--button based filter
  const handleClick =(event)=>{
    setSelectedCategory(event.target.value)

  }
  const calculatePercentage =()=>{
    const startIndex =(currentPage-1)* itemsPerPage;
    const endIndex = startIndex+ itemsPerPage;
    return {startIndex, endIndex};
  }
  //function for next page
  const nextPage =()=>{
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage+1);
    }

  }
  const prevPage =()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1);
    }
  }
  // main func
  const filteredData = (studymateListings, selected, query) => {
    let filteredLists = studymateListings;
  
    if (query) {
      filteredLists = filteredLists.filter(listing => {
        const titleLower = listing.title.toLowerCase();
        const queryLower = query.toLowerCase();
        return titleLower.includes(queryLower); // Checks if title contains any part of the query
      });
    }
    // Then filter by selected category
    if (selected) {
      filteredLists = filteredLists.filter(({ location, destination, gender, venuePreference, scheduleAvailability, course, interests, postingDate, college }) => {
        return (
          location?.toLowerCase() === selected.toLowerCase() ||
          // destination?.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected||
          gender?.toLowerCase() === selected.toLowerCase() ||
          venuePreference?.some(v => v.toLowerCase() === selected.toLowerCase()) ||
          scheduleAvailability?.some(({ day, time }) => 
    day.toLowerCase().includes(selected) || time.toLowerCase().includes(selected)) ||

          course?.toLowerCase() === selected.toLowerCase() ||
          interests?.some(i => i.toLowerCase() === selected.toLowerCase()) ||
          college?.toLowerCase() === selected.toLowerCase()
        );
      });
    }
    // console.log('Filtered Results:', filteredLists);
    //slcie data base on page
    const {startIndex, endIndex}= calculatePercentage();
    filteredLists= filteredLists.slice(startIndex, endIndex)
    // Map to Card components
    return [filteredLists.map((data, i) => <Cards key={data.id || i} data={data} />), filteredLists.length];
  };
  
  const [result ] = filteredData(studymateListings, selectedCategory, query);
  // console.log(results)
  return (
    <div className=''>
      <Navbar/>
      <Banner query={query} handleInputChange={handleInputChange}/>
      
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-4 lg:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
        <div className='col-span-3 bg-white p-4 rounded-sm'>
          {
            isLoading? (<p className='font-medium'>Loding...</p>): result.length >0?<StudyMateListsing result={result}/>:<>
            <h3 className='text-lg font-bold mb-2'>{result.length} StudyMate Listings</h3>
            <p>No data found!</p>
            </>
          }
          {
            result.length > 0? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage==Math.ceil(filteredItems.length / itemsPerPage)} className="hover:underline">Next</button>

              </div>
            ) : ""
          
          }
            
          </div>
          
   
      </div>
      <Footer/>
    </div>
  )
}

export default Home
