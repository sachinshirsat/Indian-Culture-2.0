const BASE_API_URL = "https://apitesting.nvli.in/rest-v2";
// const BASE_API_URL = "http://10.129.103.117/rest-v2";
const BASE_FILE_URL = "http://10.129.103.117";

/**
 * Fetch data from an API endpoint
 * @param {string} endpoint - The API endpoint (e.g., "/archives")
 * @param {Object} options - Additional fetch options (e.g., method, headers, body)
 * @returns {Promise<Object>} - The API response as JSON
 */
const fetchData = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${BASE_API_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * API Methods
 */
export const Api = {
    // Archives
    getArchives: (page = 0) => fetchData(`/archives?page=${page}`),
    searchArchives: (query, page = 0) =>
        fetchData(`/archives?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
    getCategories: () => fetchData(`/archivescategories`),
    getArchiveByTitle: (title) =>
        fetchData(`/archives?search_api_fulltext=${encodeURIComponent(title)}`),

    // Videos
    getVideos: (query) => fetchData(`/videos?${query}`),
    searchVideos: (query, page = 0) =>
        fetchData(`/videos?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
    getVideoByTitle: (title) =>
        fetchData(`/videos?search_api_fulltext=${encodeURIComponent(title)}`),
    getVideoCategories: () => fetchData(`/videoscategories`),

    // Audios
    getAudios: (query) => fetchData(`/audios?${query}`),
    searchAudios: (query, page = 0) =>
        fetchData(`/audios?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
    getAudioByTitle: (title) =>
        fetchData(`/audios?search_api_fulltext=${encodeURIComponent(title)}`),
    getAudioCategories: () => fetchData(`/audioscategories`),

    // Photo Archives
    getPhotoArchives: (query) => fetchData(`/photo-archives?${query}`),
    searchPhotoArchives: (query, page = 0) =>
        fetchData(`/photo-archives?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
    getPhotoArchiveByTitle: (title) =>
        fetchData(`/photo-archives?search_api_fulltext=${encodeURIComponent(title)}`),
    getPhotoArchiveCategories: () => fetchData(`/photoarchivescategories`),
   
     // Manuscripts
     getManuscripts: (query) => fetchData(`/manuscripts?${query}`),
     searchManuscripts: (query, page = 0) =>
         fetchData(`/manuscripts?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
     getManuscriptByTitle: (title) =>
         fetchData(`/manuscripts?search_api_fulltext=${encodeURIComponent(title)}`),
     getManuscriptsCategories: () => fetchData(`/manuscriptscategories`),

     // Museum Collection
     getMuseumcollections: (query) => fetchData(`/museum-collections?${query}`),
     searchMuseumcollections: (query, page = 0) =>
        fetchData(`/museum-collections?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

    getMuseumcollectionsCategories: () => fetchData(`/museumcollectioncategories`),
    getMuseumcollectionsByTitle: (title) =>
        fetchData(`/museum-collections?search_api_fulltext=${encodeURIComponent(title)}`),
    
    // Other Collection
    getOthercollections: (query) => fetchData(`/other-collections?${query}`),
    searchOthercollections: (query, page = 0) =>
       fetchData(`/other-collections?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

   getOthercollectionsCategories: () => fetchData(`/othercollectioncategories`),
   getOthercollectionsByTitle: (title) =>
       fetchData(`/other-collections?search_api_fulltext=${encodeURIComponent(title)}`),

   // Research Papers
   getResearchPapers: (query) => fetchData(`/research-papers?${query}`),
   searchResearchPapers: (query, page = 0) =>
      fetchData(`/research-papers?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

  getResearchCategories: () => fetchData(`/researchcategories`),
  getResearchPapersByTitle: (title) =>
      fetchData(`/research-papers?search_api_fulltext=${encodeURIComponent(title)}`),

  // Images
  getImages: (query) => fetchData(`/images?${query}`),
  searchImages: (query, page = 0) =>
     fetchData(`/images?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

 getImagesCategories: () => fetchData(`/imagescategories`),
 getImagesByTitle: (title) =>
     fetchData(`/images?search_api_fulltext=${encodeURIComponent(title)}`),

  // Ebooks
  getEbooks: (query) => fetchData(`/e-books?${query}`),
  searchEbooks: (query, page = 0) =>
     fetchData(`/e-books?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

 getEbooksCategories: () => fetchData(`/ebookscategories`),
 getEbooksByTitle: (title) =>
     fetchData(`/e-books?search_api_fulltext=${encodeURIComponent(title)}`),

 // Rarebooks
 getRarebooks: (query) => fetchData(`/rare-books?${query}`),
 searchRarebooks: (query, page = 0) =>
    fetchData(`/rare-books?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getRarebooksCategories: () => fetchData(`/rare-bookscategories`),
getRarebooksByTitle: (title) =>
    fetchData(`/rare-books?search_api_fulltext=${encodeURIComponent(title)}`),

// Reports & Proceedings
getReportsProceedings: (query) => fetchData(`/reports-and-proceedings?${query}`),
searchReportsProceedings: (query, page = 0) =>
   fetchData(`/reports-and-proceedings?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getReportsProceedingsCategories: () => fetchData(`/reports-and-proceedingscategories`),
getReportsProceedingsByTitle: (title) =>
   fetchData(`/reports-and-proceedings?search_api_fulltext=${encodeURIComponent(title)}`),

// Gazettes & Gazetteers
getGazettesGazetteers: (query) => fetchData(`/gazettes-and-gazetteers?${query}`),
searchGazettesGazetteers: (query, page = 0) =>
   fetchData(`/gazettes-and-gazetteers?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getGazettesGazetteersCategories: () => fetchData(`/gazettecategories`),
getGazettesGazetteersByTitle: (title) =>
   fetchData(`/gazettes-and-gazetteers?search_api_fulltext=${encodeURIComponent(title)}`),

// Snippets
getSnippets: (query) => fetchData(`/snippets?${query}`),
searchSnippets: (query, page = 0) =>
   fetchData(`/snippets?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getSnippetsCategories: () => fetchData(`/gazettecategories`),
getSnippetsByTitle: (title) =>
   fetchData(`/snippets?search_api_fulltext=${encodeURIComponent(title)}`),

// Stories
getstories: (query) => fetchData(`/stories?${query}`),
searchstories: (query, page = 0) =>
   fetchData(`/stories?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getstoriesCategories: () => fetchData(`/storiescategories`),
getstoriesByTitle: (title) =>
   fetchData(`/stories?search_api_fulltext=${encodeURIComponent(title)}`),



// Forts freedom
getFortsOfIndia: (query) => fetchData(`/forts-of-india/forts-and-freedom-struggle?${query}`),
searchFortsOfIndia: (query, page = 0) =>
   fetchData(`/forts-of-india/forts-and-freedom-struggle?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getFortsOfIndiaCategories: () => fetchData(`/forts-of-india/forts-and-freedom-struggle`),
getFortsOfIndiaByTitle: (title) =>
   fetchData(`/forts-of-india/forts-and-freedom-struggle?search_api_fulltext=${encodeURIComponent(title)}`),

// Discovering Forts
getDiscoveringForts: (query) => fetchData(`/forts-of-india/discovering-the-forts-of-india?${query}`),
searchDiscoveringForts: (query, page = 0) =>
   fetchData(`/forts-of-india/discovering-the-forts-of-india?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getDiscoveringFortsCategories: () => fetchData(`/forts-of-india/discovering-the-forts-of-india`),
getDiscoveringFortsByTitle: (title) =>
   fetchData(`/forts-of-india/discovering-the-forts-of-india?search_api_fulltext=${encodeURIComponent(title)}`),


// Rarebooks Forts
getRarebooksForts: (query) => fetchData(`/forts-of-india/rarebooks?${query}`),
searchRarebooksForts: (query, page = 0) =>
   fetchData(`/forts-of-india/rarebooks?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getRarebooksFortsCategories: () => fetchData(`/forts-of-india/rarebooks`),
getRarebooksFortsByTitle: (title) =>
   fetchData(`/forts-of-india/rarebooks?search_api_fulltext=${encodeURIComponent(title)}`),

// Forts of History
getHistoryOfForts: (query) => fetchData(`/forts-of-india/history?${query}`),
searchHistoryOfForts: (query, page = 0) =>
   fetchData(`/forts-of-india/history?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getHistoryOfFortsCategories: () => fetchData(`/forts-of-india/history`),
getHistoryOfFortsByTitle: (title) =>
   fetchData(`/forts-of-india/history?search_api_fulltext=${encodeURIComponent(title)}`),

// Tale of Forts
getTalesOfForts: (query) => fetchData(`/forts-of-india/tales-of-forts?${query}`),
searchTalesOfForts: (query, page = 0) =>
   fetchData(`/forts-of-india/tales-of-forts?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getTalesOfFortsCategories: () => fetchData(`/forts-of-india/tales-of-forts`),
getTalesOfFortsByTitle: (title) =>
   fetchData(`/forts-of-india/tales-of-forts?search_api_fulltext=${encodeURIComponent(title)}`),


// Understanding Forts
getUnderstandingForts: (query) => fetchData(`/forts-of-india/understandingforts?${query}`),
searchUnderstandingForts: (query, page = 0) =>
   fetchData(`/forts-of-india/understandingforts?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getUnderstandingFortsCategories: () => fetchData(`/forts-of-india/understandingforts`),
getUnderstandingFortsByTitle: (title) =>
   fetchData(`/forts-of-india/understandingforts?search_api_fulltext=${encodeURIComponent(title)}`),

// Feature Forts
getFeaturesForts: (query) => fetchData(`/forts-of-india/understandingforts/features?${query}`),
searchFeaturesForts: (query, page = 0) =>
   fetchData(`/forts-of-india/understandingforts/features?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getFeaturesFortsCategories: () => fetchData(`/forts-of-india/understandingforts/features`),
getFeaturesFortsByTitle: (title) =>
   fetchData(`/forts-of-india/understandingforts/features?search_api_fulltext=${encodeURIComponent(title)}`),


// Paintings
getPaintings: (query) => fetchData(`/paintings?${query}`),
searchPaintings: (query, page = 0) =>
   fetchData(`/paintings?search_api_fulltext=${encodeURIComponent(query)}&page=${page}&items_per_page=25`),

getPaintingsCategories: () => fetchData(`/paintings`),
getPaintingsByTitle: (title) =>
   fetchData(`/paintings?search_api_fulltext=${encodeURIComponent(title)}`),

//company-paintings-in-rashtrapati-bhavan
getCompanyPaintingsInRashtrapatiBhavan: (query) => fetchData(`/paintings/company-paintings-in-rashtrapati-bhavan?${query}`),
searchCompanyPaintingsInRashtrapatiBhavan: (query, page = 0) =>
   fetchData(`/paintings/company-paintings-in-rashtrapati-bhavan?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getCompanyPaintingsInRashtrapatiBhavanCategories: () => fetchData(`/paintings/company-paintings-in-rashtrapati-bhavan`),
getCompanyPaintingsInRashtrapatiBhavanByTitle: (title) =>
   fetchData(`/paintings/company-paintings-in-rashtrapati-bhavan?search_api_fulltext=${encodeURIComponent(title)}`),

//paintings-in-the-ashoka-hall-of-rashtrapati-bhavan
getPaintingsInTheAshokaHallOfRashtrapatiBhavan: (query) => fetchData(`/paintings/paintings-in-the-ashoka-hall-of-rashtrapati-bhavan?${query}`),
searchPaintingsInTheAshokaHallOfRashtrapatiBhavan: (query, page = 0) =>
   fetchData(`/paintings/paintings-in-the-ashoka-hall-of-rashtrapati-bhavan?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),

getPaintingsInTheAshokaHallOfRashtrapatiBhavanCategories: () => fetchData(`/paintings/paintings-in-the-ashoka-hall-of-rashtrapati-bhavan`),
getPaintingsInTheAshokaHallOfRashtrapatiBhavanByTitle: (title) =>
   fetchData(`/paintings/paintings-in-the-ashoka-hall-of-rashtrapati-bhavan?search_api_fulltext=${encodeURIComponent(title)}`),


//select-paintings-of-rashtrapati-bhavan
getSelectPaintingsOfRashtrapatiBhavan: (query) => fetchData(`/paintings/select-paintings-of-rashtrapati-bhavan?${query}`),
searchSelectPaintingsOfRashtrapatiBhavan: (query, page = 0) =>
   fetchData(`/paintings/select-paintings-of-rashtrapati-bhavan?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),  

getSelectPaintingsOfRashtrapatiBhavanCategories: () => fetchData(`/paintings/select-paintings-of-rashtrapati-bhavan`),
getSelectPaintingsOfRashtrapatiBhavanByTitle: (title) =>
   fetchData(`/paintings/select-paintings-of-rashtrapati-bhavan?search_api_fulltext=${encodeURIComponent(title)}`),


//museum-paintings
getMuseumPaintings: (query) => fetchData(`/paintings/museum-paintings?${query}`),
searchMuseumPaintings: (query, page = 0) =>
   fetchData(`/paintings/museum-paintings?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),  

getMuseumPaintingsCategories: () => fetchData(`/museumpaintingscategories`),
getMuseumPaintingsByTitle: (title) =>
   fetchData(`/paintings/museum-paintings?search_api_fulltext=${encodeURIComponent(title)}`),   

 // Virtual Walkthrough
 getVirtualWalkthrough: (query) => fetchData(`/virtual-walkthrough?${query}`),
 searchVirtualWalkthrough: (query, page = 0) =>
      fetchData(`/virtual-walkthrough?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
 getVirtualWalkthroughByTitle: (title) =>
     fetchData(`/virtual-walkthrough?search_api_fulltext=${encodeURIComponent(title)}`),
 getVirtualWalkthroughCategories: () => fetchData(`/virtual-walkthrough`),



//unesco
getUnesco: (query) => fetchData(`/unesco?${query}`),
searchUnesco: (query, page = 0) =>
     fetchData(`/unesco?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getUnescoByTitle: (title) =>
    fetchData(`/unesco?search_api_fulltext=${encodeURIComponent(title)}`),
getUnescoCategories: () => fetchData(`/unesco`),                       

//unesco-heritage-sites
getUnescoHeritageSites: (query) => fetchData(`/unesco/heritage-site?${query}`),
searchUnescoHeritageSites: (query, page = 0) =>
   fetchData(`/unesco/heritage-site?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getUnescoHeritageSitesByTitle: (title) =>
   fetchData(`/unesco/heritage-site?search_api_fulltext=${encodeURIComponent(title)}`),
getUnescoHeritageSitesCategories: () => fetchData(`/unesco/heritage-site`),

///unesco global-network-of-learning-cities
getGlobalNetworkOfLearningCities: (query) => fetchData(`/unesco/global-network-of-learning-cities?${query}`),
searchGlobalNetworkOfLearningCities: (query, page = 0) =>
   fetchData(`/unesco/global-network-of-learning-cities?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getGlobalNetworkOfLearningCitiesByTitle: (title) =>
   fetchData(`/unesco/global-network-of-learning-cities?search_api_fulltext=${encodeURIComponent(title)}`),
getGlobalNetworkOfLearningCitiesCategories: () => fetchData(`/unesco/global-network-of-learning-cities`),

//unesco global-geoparks
getGlobalGeoparks: (query) => fetchData(`/unesco/global-geoparks?${query}`),
searchGlobalGeoparks: (query, page = 0) =>
   fetchData(`/unesco/global-geoparks?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getGlobalGeoparksByTitle: (title) =>
   fetchData(`/unesco/global-geoparks?search_api_fulltext=${encodeURIComponent(title)}`),
getGlobalGeoparksCategories: () => fetchData(`/unesco/global-geoparks`),

//unesco memory-of-the-world
getMemoryOfTheWorld: (query) => fetchData(`/unesco/memory-of-the-world?${query}`),
searchMemoryOfTheWorld: (query, page = 0) =>
   fetchData(`/unesco/memory-of-the-world?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getMemoryOfTheWorldByTitle: (title) =>
   fetchData(`/unesco/memory-of-the-world?search_api_fulltext=${encodeURIComponent(title)}`),
getMemoryOfTheWorldCategories: () => fetchData(`/unesco/memory-of-the-world`),

///unesco creative-cities-network
getCreativeCitiesNetwork: (query) => fetchData(`/unesco/creative-cities-network?${query}`),
searchCreativeCitiesNetwork: (query, page = 0) =>
   fetchData(`/unesco/creative-cities-network?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getCreativeCitiesNetworkByTitle: (title) =>
   fetchData(`/unesco/creative-cities-network?search_api_fulltext=${encodeURIComponent(title)}`),
getCreativeCitiesNetworkCategories: () => fetchData(`/unesco/creative-cities-network`),

///unesco biospheres
getBiospheres: (query) => fetchData(`/unesco/biospheres?${query}`),
searchBiospheres: (query, page = 0) =>
   fetchData(`/unesco/biospheres?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getBiospheresByTitle: (title) =>
   fetchData(`/unesco/biospheres?search_api_fulltext=${encodeURIComponent(title)}`),
getBiospheresCategories: () => fetchData(`/unesco/biospheres`),

///unesco intangible-cultural-heritage
getUnescoIntangibleCulturalHeritage: (query) => fetchData(`/unesco/intangible-cultural-heritage?${query}`),
searchUnescoIntangibleCulturalHeritage: (query, page = 0) =>
   fetchData(`/unesco/intangible-cultural-heritage?search_api_fulltext=${encodeURIComponent(query)}&page=${page}`),
getUnescoIntangibleCulturalHeritageByTitle: (title) =>
   fetchData(`/unesco/intangible-cultural-heritage?search_api_fulltext=${encodeURIComponent(title)}`),
getUnescoIntangibleCulturalHeritageCategories: () => fetchData(`/unesco/intangible-cultural-heritage`),






    // Shared utility
    getFileUrl: (filePath) =>
        filePath.startsWith("http") ? filePath : `${BASE_FILE_URL}${filePath}`,
};

export default Api;
