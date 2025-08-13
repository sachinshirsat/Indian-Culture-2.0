import { React, useEffect, useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Sun, Moon } from "feather-icons-react";

//install this npm i react-router-dom//
import TopNavbar from "./components/TopNavbar";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import About from "./pages/About";
import HomeGalleryList from "./components/HomeGalleryList";
import Home from "./pages/Home";
import { ArrowUp } from "react-feather";
import UnderConst from "./components/UnderConst";

// import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext";
import AllCategories from "./components/AllCategories";
import FreedomArchive from "./components/FreedomArchive";
import LtwoDidYouKnow from "./components/LtwoDidYouKnow";
import LtwoTodayinHistory from "./components/LtwoTodayinHistory";
import ArcListpage from "./components/Archives/ArcListpage";
import ArcListResult from "./components/Archives/ArcListResultpage";
import JewelleryOfNizam from "./components/JewelleryOfNizam";
import JNHistory from "./components/JNHistory";
import JNResultpage from "./components/JNResultpage";

/* import FortsOfIndia from "./components/Forts of India/FortsOfIndia";

import UnderstandingForts from "./components/Forts of India/UnderstandingForts";
import WhatisFort from "./components/Forts of India/WhatisFort";
import FeaturesForts from "./components/Forts of India/FeaturesForts";

import Wall from "./components/Forts of India/FeatureDetails";

import TypesOfForts from "./components/Forts of India/TypesOfForts";
import FortHistory from "./components/Forts of India/FortHistory";
import FortHistoryResultpage from "./components/Forts of India/FortHistoryResultpage";
import FortsOfIndiaListpage from "./components/Forts of India/FortsOfIndiaListpage";
import FortsOfIndiaResultpage from "./components/Forts of India/FortsOfIndiaResultpage";
import FortsFreedom from "./components/Forts of India/FortsFreedom";
import FortsFreedomResultpage from "./components/Forts of India/FortsFreedomResultpage"; */

import DDR from "./components/DDR";
import DDRListingpage from "./components/DDRListingpage";
import DDRResultpage from "./components/DDRResultpage";

import "feather-icons";
import MusicalInstrument from "./components/MusicalInstrument";
import MusicalListingpage from "./components/MusicalListingpage";
import MusicalResult from "./components/MusicalResult";
import MusicalResultpage from "./components/MusicalResultpage";
import JNMonuments from "./components/JNMonuments";
import JNTerritories from "./components/JNTerritories";
import JNOrigin from "./components/JNOrigin";
import JNSalarJungs from "./components/JNSalarJungs";
import JNKeyPersonalities from "./components/JNKeyPersonalities";
import JNEconomy from "./components/JNEconomy";
import JNExtentofWealth from "./components/JNExtentofWealth";
import JNEcoCrisis from "./components/JNEcoCrisis";
import JNSourcesofWealth from "./components/JNSourcesofWealth";
import JNSociety from "./components/JNSociety";
import JNDiversity from "./components/JNDiversity";
import JNCuisine from "./components/JNCuisine";
import JNJewels from "./components/JNJewels";
import JNFamousGems from "./components/JNFamousGems";
import JNDesignVocabulary from "./components/JNDesignVocabulary";
import JNType from "./components/JNType";
import JNGems from "./components/JNGems";
import JNAquisitions from "./components/JNAquisitions";
import JNAnecdotes from "./components/JNAnecdotes";
import JNNizamNecklace from "./components/JNNizamNecklace";
import JNStolenTiffin from "./components/JNStolenTiffin";
import JNKulcha from "./components/JNKulcha";
import JNMarriageAlliances from "./components/JNMarriageAlliances";
import JNPrincesses from "./components/JNPrincesses";
import JNDurrushehvar from "./components/JNDurrushehvar";
import JNNiloufer from "./components/JNNiloufer";
import JNEsra from "./components/JNEsra";
import RetrievedArtefacts from "./components/RetrievedArtefacts";
import ArtefactsMore from "./components/ArtefactsMore";
import ArtefactsResultpage from "./components/ArtefactsResultpage";
import ReclaimedRelics from "./components/ReclaimedRelics";
import RecRelResultpage from "./components/RecRelResultpage";
import BooksIconography from "./components/BooksIconography";
import FlagshipEvent from "./components/FlagshipEvent";

import FlagEvenResultpage from "./components/FlagEvenResultpage";
import FlagEventLib from "./components/FlagEvenLib";
import FestivalsOfIndia from "./components/FestivalsOfIndia";
import FIPanIndia from "./components/FIPanIndia";
import FIBuddhaPurnima from "./components/FIBuddhaPurnima";
import FICulinaryTraditions from "./components/FICulinaryTraditions";
import FIPerformativeTraditions from "./components/FIPerformativeTraditions";
import FIMythsLegends from "./components/FIMythsLegends";
import FIFolkFestivals from "./components/FIFolkFestivals";
import FICelebratingNature from "./components/FICelebratingNature";
import FIGudiPadwa from "./components/FIGudiPadwa";
import FIDiscoverGudiPadwa from "./components/FIDiscoverCulTrad";
import FIDiscoverCulTrad from "./components/FIDiscoverCulTrad";
import FIDiscoverMythLeg from "./components/FIDiscoverMythLeg";
import FITribalFestivals from "./components/FITribalFestivals";
import FIWorshipingNature from "./components/FIWorshipingNature";
import FIShadSukMynsiem from "./components/FIShadSukMynsiem";
import FIFairsPilgrimages from "./components/FIFairsPilgrimages";
import FIFairs from "./components/FIFairs";
import FIMallinath from "./components/FIMallinath";
import FIMallinathCulTrad from "./components/FIMallinathCulTrad";
import FIMythsLegendsss from "./components/FIMallinathMythLeg";
import FIMallinathMythLeg from "./components/FIMallinathMythLeg";
import NorthEastArchive from "./components/NorthEastArchive";
import NEAState from "./components/NEAState";
import NEABuildHeritage from "./components/NEABuildHeritage";
import NEASnapshots from "./components/NEASnapshots";
import NEASnapshotResultpage from "./components/NEASnapshotResultpage";
import NEAShillong from "./components/NEAShillong";
import NEAShillongResultpage from "./components/NEAShillongResultpage";
import NEABuiltHerResultpage from "./components/NEABuiltHerResultpage";
import TimelessTrends from "./components/TimelessTrends";
import TTClothing from "./components/TTClothing";
import TTDigiCateList from "./components/TTDigiCateList";
import TTDigiCatelogue from "./components/TTDigiCatelogue";
import TTReadingList from "./components/TTReadingList";
import TTVideoStories from "./components/TTVideoStories";
import TTPhotoEssays from "./components/TTPhotoEssays";
import TTSnippets from "./components/TTSnippets";
import TTAncientTimeline from "./components/TTAncientTimeline";
import TTAncientHistoryResultpage from "./components/TTAncientHistoryResultpage";
import TTMedievalHistoryResultpage from "./components/TTMedievalHistoryResultpage";
import TTColonialHistoryResultpage from "./components/TTColonialHistoryResultpage";
import TTVideoResultpage from "./components/TTVideoResultpage";
import Ajanta from "./components/Ajanta";
import Caves from "./components/Caves";
import EarlyCaves from "./components/EarlyCaves";
import LaterCaves from "./components/LaterCaves";
import Cave9 from "./components/Caves9";
import ACPaintings from "./components/ACPaintings";
import Cave1Campaka from "./components/Cave1Campaka";
import PhotoEassy from "./components/PhotoEassy";
import PhotoEassyResultpage from "./components/PhotoEassyResultpage";
import HistoricCities from "./components/HistoricCities";
import HistoricStates from "./components/HistoricStates";
import MangoesofLucknow from "./components/MangoesofLucknow";
import ReadLucknow from "./components/ReadLucknow";
import RiverGomti from "./components/RiverGomti";
import HCDelhiHome from "./components/HCDelhiHome";
import HCCentralDelhi from "./components/HCCentralDelhi";
import FoodnCulture from "./components/FoodnCulture";
import FoodnCultureResultpage from "./components/FoodnCultureResultpage";
import CuisinesofIndia from "./components/CuisinesofIndia";
import FCCuisineListpage from "./components/FCCuisineListpage";
import FCCuisineResultpage from "./components/FCCuisineResultpage";
import TimelessRecipes from "./components/TimelessRecipes";
import Maincourse from "./components/MainCourselistpage";
import FCMainCourseResultpage from "./components/FCMainCourseResultpage";
import HerbsnSpicelsitpage from "./components/HerbsnSpicelistpage";
import FCHerbsnSpiceResultpage from "./components/FCHerbsnSpiceResultpage";
import Foodlistpage from "./components/Foodlistpage";
import FCFoodImagesResultpage from "./components/FCFoodImagesResultpage";
import FoodnFestivals from "./components/FoodnFestivals";
import FCFoodFestivalsResultpage from "./components/FCFoodFestivalsResultpage";
import TextilenFabric from "./components/TextilenFabric";
import TextileMuseum from "./components/TextileMuseum";
import MuseumListpage from "./components/TxtileMuseumListpage";
import MuseumResultpage from "./components/MuseumResultpage";
import TxtileTrade from "./components/TxtileTrade";
import TxtileColonialPeriod from "./components/TxtileColonialPeriod";
import TypesofTextiles from "./components/TypesofTextiles";
import TxtilePainting from "./components/TxtilePainting";
import TxtilePaintingResultpage from "./components/TxtilePaintingResultpage";
import TxtileManufacturing from "./components/TxtileManufacturing";
import TxtileWeavingListpage from "./components/TxtileWeavingListpage";
import TxtileWeavingResultpage from "./components/TxtileWeavingResultpage";
import TxtileArtisans from "./components/TxtileArtisans";
import TxtileNissarAli from "./components/TxtileNissarAli";
import TxtileArtifacts from "./components/TxtileArtifacts";
import TxtileArtifactsResultpage from "./components/TxtileArtifactsResultpage";
import TextileTales from "./components/TextileTales";
import TxtileFreedomMovement from "./components/TxtileFreedomMovement";
import TxtileFreedomMoveResultpage from "./components/TxtileFreedomMoveResultpage";
import TxtileHistory from "./components/TxtileHistory";
import TxtileHistoryAncient from "./components/TxtileHistoryAncient";
import TxtileHistoryAncientTimeline from "./components/TxtileHistoryAncientTimeline";
import TxtileHistoryAncientResult from "./components/TxtileHistoryAncientResult";
import VideosListpage from "./components/Videos/VideosListpage";
import VideosListResultpage from "./components/Videos/VideosListResultpage";
import AudiosListpage from "./components/Audios/AudiosListpage";
import AudiosListResultpage from "./components/Audios/AudiosListResultpage";
import PhotoArchiveListpage from "./components/PhotoArchives/PhotoArchiveListpage";
import PhotoArchiveListResultpage from "./components/PhotoArchives/PhotoArchiveListResultpage";
import ManuscriptsListpage from "./components/Manuscripts/ManuscriptsListpage";
import ManuscriptsListResultpage from "./components/Manuscripts/ManuscriptsListResultpage";
import MuseumCollections from "./components/Museum Collections/MuseumCollections";
import MuseumCollectionsResultpage from "./components/Museum Collections/MuseumCollectionsResultpage";
import OtherCollection from "./components/Other Collections/OtherCollection";
import OtherCollectionResultpage from "./components/Other Collections/OtherCollectionResultpage";
import ResearchPapers from "./components/Research Papers/ResearchPapers";
import ResearchPapersResultpage from "./components/Research Papers/ResearchPapersResultpage";
import Ebooks from "./components/E-books/Ebooks";
import EbooksResultpage from "./components/E-books/EbooksResultpage";
import Images from "./components/Images/Images";
import ImagesResultpage from "./components/Images/ImagesResultpage";
import Rarebook from "./components/Rarebook";
import Rarebooks from "./components/Rarebooks/Rarebooks";
import RarebooksResultpage from "./components/Rarebooks/RarebooksResultpage";
import ReportsProceedings from "./components/Reports & Proceedings/ReportsProceedings";
import ReportsProceedingsResultpage from "./components/Reports & Proceedings/ReportsProceedingsResultpage";
import GazettesGazetteers from "./components/Gazettes & Gazetteers/GazettesGazetteers";
import GazettesGazetteersResultpage from "./components/Gazettes & Gazetteers/GazettesGazetteersResultpage";
import Snippets from "./components/Snippets/Snippets";
import SnippetsResultpage from "./components/Snippets/SnippetsResultpage";
import Stories from "./components/Stories/Stories";
import StoriesResultpage from "./components/Stories/StoriesResultpage";
import FortsOfIndia from "./components/Forts of India/FortsOfIndia";
import FortsFreedom from "./components/Forts of India/FortsFreedom";
import FortsFreedomResultpage from "./components/Forts of India/FortsFreedomResultpage";
import DiscoveringFortsListpage from "./components/Forts of India/DiscoveringFortsListpage";
import DiscoveringFortsResultpage from "./components/Forts of India/DiscoveringFortsResultpage";
import RarebooksOfForts from "./components/Forts of India/RarebooksOfForts";
import RarebooksOfFortsResultpage from "./components/Forts of India/RarebooksOfFortsResultpage";
import FortHistory from "./components/Forts of India/FortHistory";
import FortHistoryResultpage from "./components/Forts of India/FortHistoryResultpage";
import TalesOfForts from "./components/Forts of India/TalesOfForts";
import TalesOfFortsResultpage from "./components/Forts of India/TalesOfFortsResultpage";
import UnderstandingForts from "./components/Forts of India/UnderstandingForts";
import WhatisFort from "./components/Forts of India/WhatisFort";
import TypesOfForts from "./components/Forts of India/TypesOfForts";
import FeaturesForts from "./components/Forts of India/FeaturesForts";
import FeatureDetails from "./components/Forts of India/FeatureDetails";
import PaintingCollections from "./components/Paintings/PaintingCollections";
import Paintings from "./components/Paintings/Paintings";
import SelectPaintingsOfRashtrapatiBhavan from "./components/Paintings/SelectPaintingsOfRashtrapatiBhavan";
import SelectPaintingsOfRashtrapatiBhavanResultpage from "./components/Paintings/SelectPaintingsOfRashtrapatiBhavanResultpage";
import PaintingsInTheAshokaHallOfRashtrapatiBhavan from "./components/Paintings/PaintingsInTheAshokaHallOfRashtrapatiBhavan";
import PaintingsInTheAshokaHallOfRashtrapatiBhavanResultpage from "./components/Paintings/PaintingsInTheAshokaHallOfRashtrapatiBhavanResultpage";
import CompanyPaintingsInRashtrapatiBhavan from "./components/Paintings/CompanyPaintingsInRashtrapatiBhavan";
import CompanyPaintingsInRashtrapatiBhavanResultpage from "./components/Paintings/CompanyPaintingsInRashtrapatiBhavanResultpage";
import PaintingsResultpage from "./components/Paintings/PaintingsResultpage";
import MuseumPaintings from "./components/Paintings/MuseumPaintings";
import MuseumPaintingsResultpage from "./components/Paintings/MuseumPaintingsResultpage";
import VirtualWalkthrough from "./components/Virtual-Walkthrough/VirtualWalkthrough";
import VirtualWalkthroughResultpage from "./components/Virtual-Walkthrough/VirtualWalkthroughResultpage";
import Unesco from "./components/Unesco/Unesco";
import UnescoHeritageSites from "./components/Unesco/UnescoHeritageSites";
import UnescoHeritageSitesDetails from "./components/Unesco/UnescoHeritageSitesDetails";
import GlobalNetworkOfLearningCities from "./components/Unesco/GlobalNetworkOfLearningCities";
import GlobalNetworkOfLearningCitiesDetails from "./components/Unesco/GlobalNetworkOfLearningCitiesDetails";
import GlobalGeoparks from "./components/Unesco/GlobalGeoparks";
import GlobalGeoparksDetails from "./components/Unesco/GlobalGeoparksDetails";
import MemoryOfTheWorld from "./components/Unesco/MemoryOfTheWorld";
import MemoryOfTheWorldDetails from "./components/Unesco/MemoryOfTheWorldDetails";
import CreativeCitiesNetwork from "./components/Unesco/CreativeCitiesNetwork";
import CreativeCitiesNetworkDetails from "./components/Unesco/CreativeCitiesNetworkDetails";
import Biospheres from "./components/Unesco/Biospheres";
import BiospheresDetails from "./components/Unesco/BiospheresDetails";
import IntangibleCulturalHeritage from "./components/Unesco/IntangibleCulturalHeritage";
import IntangibleCulturalHeritageDetails from "./components/Unesco/IntangibleCulturalHeritageDetails";
import AtlasOfTheWorlds from "./components/Unesco/AtlasOfTheWorlds";

/* import JewelleryNizam from './components/JewelleryNizam';
import JNHistory from './components/JNHistory'; */

function App() {
  // Theme variable
  const { theme, toggleTheme } = useContext(ThemeContext);

  // back to top btn
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`theme-${theme}`}>
        <label className="switch toggle">
          <input type="checkbox" />
          <span className="slider round" onClick={toggleTheme}></span>
        </label>

        {isVisible && (
          <button onClick={scrollToTop} className="back-to-top-button">
            <ArrowUp style={{ marginLeft: "-1px" }} />
          </button>
        )}

        <Router>
          <TopNavbar />
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/galleryview" element={<HomeGalleryList />} />
            <Route path="/underconstructor" element={<UnderConst />} />
            <Route path="/allcategories" element={<AllCategories />} />
            <Route path="/freedomarchive" element={<FreedomArchive />} />

            <Route path="/ltwodidyouknow" element={<LtwoDidYouKnow />} />
            <Route path="/ltwotodayinhistory" element={<LtwoTodayinHistory />}/>

            <Route path="/arclistpage" element={<ArcListpage />} />
            <Route path="/arclistresultpage" element={<ArcListResult />} />

            <Route path="/videoslistpage" element={<VideosListpage />} />
            <Route path="/videoslistresultpage" element={<VideosListResultpage />}/>

            <Route path="/audioslistpage" element={<AudiosListpage />} />
            <Route path="/audioslistresultpage" element={<AudiosListResultpage />}/>

            <Route path="/photoarchivelistpage" element={<PhotoArchiveListpage />}/>
            <Route path="/photoarchivelistresultpage" element={<PhotoArchiveListResultpage />}/>

            <Route path="/manuscriptslistpage" element={<ManuscriptsListpage />} />
            <Route path="/manuscriptslistresultpage" element={<ManuscriptsListResultpage />}/>

            <Route path="/museumcollections" element={<MuseumCollections />} />
            <Route path="/museumcollectionsresultpage" element={<MuseumCollectionsResultpage />} />

            <Route path="/othercollection" element={<OtherCollection />} />
            <Route path="/othercollectionresultpage" element={<OtherCollectionResultpage />} />

            <Route path="/researchpapers" element={<ResearchPapers />} />
            <Route path="/researchpapersresultpage" element={<ResearchPapersResultpage />} />

            <Route path="/ebooks" element={<Ebooks />} />
            <Route path="/ebooksresultpage" element={<EbooksResultpage />} />

            <Route path="/images" element={<Images />} />
            <Route path="/imagesresultpage" element={<ImagesResultpage />} />

            <Route path="/rarebooks" element={<Rarebooks />} />
            <Route path="/rarebooksresultpage" element={<RarebooksResultpage />} />

            <Route path="/reportsproceedings" element={<ReportsProceedings />} />
            <Route path="/reportsproceedingsresultpage" element={<ReportsProceedingsResultpage />} />

            <Route path="/gazettesgazetteers" element={<GazettesGazetteers />} />
            <Route path="/gazettesgazetteersresultpage" element={<GazettesGazetteersResultpage />} />

            <Route path="/snippets" element={<Snippets />} />
            <Route path="/snippetsresultpage" element={<SnippetsResultpage />} />

            <Route path="/stories" element={<Stories />} />
            <Route path="/storiesresultpage" element={<StoriesResultpage />} />

           {/*  <Route path="/stories" element={<Stories />} />
            <Route id="/stories/:id" element={<StoriesResultpage />} /> */}


            <Route path="/paintingcollections" element={<PaintingCollections />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/paintingsresultpage" element={<PaintingsResultpage />} />
            <Route path="/select-paintings-of-rashtrapati-bhavan" element={<SelectPaintingsOfRashtrapatiBhavan />} />
            <Route path="/select-paintings-of-rashtrapati-bhavan-resultpage" element={<SelectPaintingsOfRashtrapatiBhavanResultpage />} />
            <Route path="/paintings-in-the-ashoka-hall-of-rashtrapati-bhavan" element={<PaintingsInTheAshokaHallOfRashtrapatiBhavan />} />
            <Route path="/paintings-in-the-ashoka-hall-of-rashtrapati-bhavan-resultpage" element={<PaintingsInTheAshokaHallOfRashtrapatiBhavanResultpage />} />
            <Route path="/company-paintings-in-rashtrapati-bhavan" element={<CompanyPaintingsInRashtrapatiBhavan />} />
            <Route path="/company-paintings-in-rashtrapati-bhavan-resultpage" element={<CompanyPaintingsInRashtrapatiBhavanResultpage />} />
            <Route path="/museum-paintings" element={<MuseumPaintings />} />
            <Route path="/museum-paintings-resultpage" element={<MuseumPaintingsResultpage />} />

            <Route path="/virtual-walkthrough" element={<VirtualWalkthrough />} />
            <Route path="/virtual-walkthrough-resultpage" element={<VirtualWalkthroughResultpage />} />


            <Route path="/unesco" element={<Unesco />} />
            <Route path="/unesco-heritage-sites" element={<UnescoHeritageSites />} />
            <Route path="/unesco-heritage-sites-details" element={<UnescoHeritageSitesDetails />} />
            <Route path="/unesco-global-network-of-learning-cities" element={<GlobalNetworkOfLearningCities />} />
            <Route path="/unesco-global-network-of-learning-cities-details" element={<GlobalNetworkOfLearningCitiesDetails />} />
            <Route path="/unesco-global-geoparks" element={<GlobalGeoparks />} />
            <Route path="/unesco-global-geoparks-details" element={<GlobalGeoparksDetails />} />
            <Route path="/unesco-memory-of-the-world" element={<MemoryOfTheWorld />} />
            <Route path="/unesco-memory-of-the-world-details" element={<MemoryOfTheWorldDetails />} />
            <Route path="/unesco-creative-cities-network" element={<CreativeCitiesNetwork />} />
            <Route path="/unesco-creative-cities-network-details" element={<CreativeCitiesNetworkDetails />} />
            <Route path="/unesco-biospheres" element={<Biospheres />} />
            <Route path="/unesco-biospheres-details" element={<BiospheresDetails />} />
            <Route path="/unesco-intangible-cultural-heritage" element={<IntangibleCulturalHeritage />} />
            <Route path="/unesco-intangible-cultural-heritage-details" element={<IntangibleCulturalHeritageDetails />} />
            <Route path="/unesco-atlas-of-the-worlds" element={<AtlasOfTheWorlds />} />

            <Route path="/jewellerofynizam" element={<JewelleryOfNizam />} />
            <Route path="/jnhistory" element={<JNHistory />} />
            <Route path="/jnmonuments" element={<JNMonuments />} />
            <Route path="/jnterritories" element={<JNTerritories />} />
            <Route path="/jnorigin" element={<JNOrigin />} />
            <Route path="/jnsalarjungs" element={<JNSalarJungs />} />
            <Route
              path="/jnkeypersonalities"
              element={<JNKeyPersonalities />}
            />
            <Route path="/jneconomy" element={<JNEconomy />} />
            <Route path="/jnextentofwealth" element={<JNExtentofWealth />} />
            <Route path="/jnecocrisis" element={<JNEcoCrisis />} />
            <Route path="/jnsourcesofwealth" element={<JNSourcesofWealth />} />
            <Route path="/jnsociety" element={<JNSociety />} />
            <Route path="/jndiversity" element={<JNDiversity />} />
            <Route path="/jncuisine" element={<JNCuisine />} />
            <Route path="/jnjewels" element={<JNJewels />} />
            <Route path="/jnfamousgems" element={<JNFamousGems />} />
            <Route
              path="/jndesignvocabulary"
              element={<JNDesignVocabulary />}
            />
            <Route path="/jntype" element={<JNType />} />
            <Route path="/jngems" element={<JNGems />} />
            <Route path="/jnaquisitions" element={<JNAquisitions />} />
            <Route path="/jnanecdotes" element={<JNAnecdotes />} />
            <Route path="/jnnizamnecklace" element={<JNNizamNecklace />} />
            <Route path="/jnstolentiffin" element={<JNStolenTiffin />} />
            <Route path="/jnkulcha" element={<JNKulcha />} />
            <Route
              path="/jnmarriagealliances"
              element={<JNMarriageAlliances />}
            />
            <Route path="/jnprincesses" element={<JNPrincesses />} />
            <Route path="/jndurrushehvar" element={<JNDurrushehvar />} />
            <Route path="/jnniloufer" element={<JNNiloufer />} />
            <Route path="/jnesra" element={<JNEsra />} />

            <Route path="/jnresultpage" element={<JNResultpage />} />


            {/* <Route path="/fortsofindia" element={<FortsOfIndia />} />
            <Route
              path="/understandingforts"
              element={<UnderstandingForts />}
            />
            <Route path="/whatisfort" element={<WhatisFort />} />
            <Route path="/featuresforts" element={<FeaturesForts />} />
            <Route path="/wall" element={<Wall />} />
            <Route path="/typesofforts" element={<TypesOfForts />} />
            <Route path="/forthistory" element={<FortHistory />} />
            <Route
              path="/forthistoryresultpage"
              element={<FortHistoryResultpage />}
            />

            <Route
              path="/fortsofindialistpage"
              element={<FortsOfIndiaListpage />}
            />
            <Route
              path="/fortsofindiaresultpage"
              element={<FortsOfIndiaResultpage />}
            />

            <Route path="/fortsfreedom" element={<FortsFreedom />} />
            <Route
              path="/fortsfreedomresultpage"
              element={<FortsFreedomResultpage />} 
            /> */}
            <Route path="/fortsofindia" element={<FortsOfIndia />} />
            <Route path="/fortsfreedom" element={<FortsFreedom/>} />
            <Route path="/fortsfreedomresultpage" element={<FortsFreedomResultpage/>} />
            <Route path="/discoveringfortslistpage" element={<DiscoveringFortsListpage/>} />
            <Route path="/discoveringfortsresultpage" element={<DiscoveringFortsResultpage/>} />
            <Route path="/rarebooksofforts" element={<RarebooksOfForts />} />
            <Route path="/rarebooksoffortsresultpage" element={<RarebooksOfFortsResultpage />} />
            <Route path="/forthistory" element={<FortHistory />} />
            <Route path="/forthistoryresultpage" element={<FortHistoryResultpage />} />
            <Route path="/talesofforts" element={<TalesOfForts />} />
            <Route path="/talesoffortsresultpage" element={<TalesOfFortsResultpage />} />
            <Route path="/understandingforts" element={<UnderstandingForts />} />
            <Route path="/whatisfort" element={<WhatisFort />} />
            <Route path="/typesofforts" element={<TypesOfForts />} />
            <Route path="/featuresforts" element={<FeaturesForts />} />
            <Route path="/feature-details" element={<FeatureDetails />} />



            <Route path="/ddr" element={<DDR />} />
            <Route path="/ddrlistingpage" element={<DDRListingpage />} />
            <Route path="/ddrresultpage" element={<DDRResultpage />} />

            <Route path="/musicalinstrument" element={<MusicalInstrument />} />
            <Route path="/musicallistingpage" element={<MusicalListingpage />} />
            <Route path="/musicalresult" element={<MusicalResult />} />
            <Route path="/musicalresultpage" element={<MusicalResultpage />} />

            <Route path="/retrievedartefacts" element={<RetrievedArtefacts />} />
            <Route path="/artefactsmore" element={<ArtefactsMore />} />
            <Route
              path="/artefactsresultpage"
              element={<ArtefactsResultpage />}
            />
            <Route path="/reclaimedrelics" element={<ReclaimedRelics />} />
            <Route path="/recrelresultpage" element={<RecRelResultpage />} />
            <Route path="/booksiconography" element={<BooksIconography />} />

            <Route path="/flagshipevent" element={<FlagshipEvent />} />
            <Route path="/flageventlib" element={<FlagEventLib />} />
            <Route
              path="/flagevenresultpage"
              element={<FlagEvenResultpage />}
            />

            <Route path="/festivalsofindia" element={<FestivalsOfIndia />} />
            <Route path="/fipanindia" element={<FIPanIndia />} />
            <Route path="/fibuddhapurnima" element={<FIBuddhaPurnima />} />
            <Route
              path="/ficulinarytraditions"
              element={<FICulinaryTraditions />}
            />
            <Route
              path="/fiperformativetraditions"
              element={<FIPerformativeTraditions />}
            />
            <Route path="/fimythslegends" element={<FIMythsLegends />} />
            <Route path="/fifolkfestivals" element={<FIFolkFestivals />} />
            <Route
              path="/ficelebratingnature"
              element={<FICelebratingNature />}
            />
            <Route path="/figudipadwa" element={<FIGudiPadwa />} />
            <Route path="/fidiscovercultrad" element={<FIDiscoverCulTrad />} />
            <Route path="/fidiscovermythleg" element={<FIDiscoverMythLeg />} />
            <Route path="/fitribalfestivals" element={<FITribalFestivals />} />
            <Route
              path="/fiworshipingnature"
              element={<FIWorshipingNature />}
            />
            <Route path="/fishadsukmynsiem" element={<FIShadSukMynsiem />} />
            <Route
              path="/fifairspilgrimages"
              element={<FIFairsPilgrimages />}
            />
            <Route path="/fifairs" element={<FIFairs />} />
            <Route path="/fimallinath" element={<FIMallinath />} />
            <Route
              path="/fimallinathcultrad"
              element={<FIMallinathCulTrad />}
            />
            <Route
              path="/fimallinathmythleg"
              element={<FIMallinathMythLeg />}
            />

            <Route path="/northeastarchive" element={<NorthEastArchive />} />
            <Route path="/neastate" element={<NEAState />} />
            <Route path="/neabuildheritage" element={<NEABuildHeritage />} />
            <Route path="/neasnapshots" element={<NEASnapshots />} />
            <Route
              path="/neasnapshotresultpage"
              element={<NEASnapshotResultpage />}
            />
            <Route path="/neashillong" element={<NEAShillong />} />
            <Route
              path="/neashillongresultpage"
              element={<NEAShillongResultpage />}
            />
            <Route
              path="/neabuiltherresultpage"
              element={<NEABuiltHerResultpage />}
            />

            <Route path="/timelesstrends" element={<TimelessTrends />} />
            <Route path="/ttclothing" element={<TTClothing />} />
            <Route path="/ttdigicatelist" element={<TTDigiCateList />} />
            <Route path="/ttdigicatelogue" element={<TTDigiCatelogue />} />
            <Route path="/ttreadinglist" element={<TTReadingList />} />
            <Route path="/ttvideostories" element={<TTVideoStories />} />
            <Route path="/ttphotoessays" element={<TTPhotoEssays />} />
            <Route path="/ttsnippets" element={<TTSnippets />} />
            <Route path="/ttancienttimeline" element={<TTAncientTimeline />} />
            <Route
              path="/ttancienthistoryresultpage"
              element={<TTAncientHistoryResultpage />}
            />
            <Route
              path="/ttmedievalhistoryresultpage"
              element={<TTMedievalHistoryResultpage />}
            />
            <Route
              path="/ttcolonialhistoryresultpage"
              element={<TTColonialHistoryResultpage />}
            />
            <Route path="/ttvideoresultpage" element={<TTVideoResultpage />} />

            <Route path="/ajanta" element={<Ajanta />} />
            <Route path="/caves" element={<Caves />} />
            <Route path="/earlycaves" element={<EarlyCaves />} />
            <Route path="/latercaves" element={<LaterCaves />} />
            <Route path="/cave9" element={<Cave9 />} />
            <Route path="/acpaintings" element={<ACPaintings />} />
            <Route path="/cave1campaka" element={<Cave1Campaka />} />

            <Route path="/photoeassy" element={<PhotoEassy />} />
            <Route
              path="/photoeassyresultpage"
              element={<PhotoEassyResultpage />}
            />

            <Route path="/historiccities" element={<HistoricCities />} />
            <Route path="/historicstates" element={<HistoricStates />} />
            <Route path="/mangoesoflucknow" element={<MangoesofLucknow />} />
            <Route path="/readlucknow" element={<ReadLucknow />} />
            <Route path="/rivergomti" element={<RiverGomti />} />
            <Route path="/hcdelhihome" element={<HCDelhiHome />} />
            <Route path="/hccentraldelhi" element={<HCCentralDelhi />} />

            <Route path="/foodnculture" element={<FoodnCulture />} />
            <Route
              path="/foodncultureresultpage"
              element={<FoodnCultureResultpage />}
            />
            <Route path="/cuisinesofindia" element={<CuisinesofIndia />} />
            <Route path="/fccuisinelistpage" element={<FCCuisineListpage />} />
            <Route
              path="/fccuisineresultpage"
              element={<FCCuisineResultpage />}
            />
            <Route path="/timelessrecipes" element={<TimelessRecipes />} />
            <Route path="/maincourse" element={<Maincourse />} />
            <Route
              path="/fcmaincourseresultpage"
              element={<FCMainCourseResultpage />}
            />
            <Route
              path="/herbsnspicelsitpage"
              element={<HerbsnSpicelsitpage />}
            />
            <Route
              path="/fcherbsnspiceresultpage"
              element={<FCHerbsnSpiceResultpage />}
            />
            <Route path="/foodlistpage" element={<Foodlistpage />} />
            <Route
              path="/fcfoodimagesresultpage"
              element={<FCFoodImagesResultpage />}
            />
            <Route path="/foodnfestivals" element={<FoodnFestivals />} />
            <Route
              path="/fcfoodfestivalsresultpage"
              element={<FCFoodFestivalsResultpage />}
            />

            <Route path="/textilenfabric" element={<TextilenFabric />} />
            <Route path="/textilemuseum" element={<TextileMuseum />} />
            <Route path="/museumlistpage" element={<MuseumListpage />} />
            <Route path="/museumresultpage" element={<MuseumResultpage />} />
            <Route path="/txtiletrade" element={<TxtileTrade />} />
            <Route
              path="/txtilecolonialperiod"
              element={<TxtileColonialPeriod />}
            />
            <Route path="/typesoftextiles" element={<TypesofTextiles />} />
            <Route path="/txtilepainting" element={<TxtilePainting />} />
            <Route
              path="/txtilepaintingresultpage"
              element={<TxtilePaintingResultpage />}
            />
            <Route
              path="/txtilemanufacturing"
              element={<TxtileManufacturing />}
            />
            <Route
              path="/txtileweavinglistpage"
              element={<TxtileWeavingListpage />}
            />
            <Route
              path="/txtileweavingresultpage"
              element={<TxtileWeavingResultpage />}
            />
            <Route path="/txtileartisans" element={<TxtileArtisans />} />
            <Route path="/txtilenissarali" element={<TxtileNissarAli />} />
            <Route path="/txtileartifacts" element={<TxtileArtifacts />} />
            <Route
              path="/txtileartifactsresultpage"
              element={<TxtileArtifactsResultpage />}
            />
            <Route path="/textiletales" element={<TextileTales />} />
            <Route
              path="/txtilefreedommovement"
              element={<TxtileFreedomMovement />}
            />
            <Route
              path="/txtilefreedommovementresultpage"
              element={<TxtileFreedomMoveResultpage />}
            />
            <Route path="/txtilehistory" element={<TxtileHistory />} />
            <Route
              path="/txtilehistoryancient"
              element={<TxtileHistoryAncient />}
            />
            <Route
              path="/txtilehistoryancienttimeline"
              element={<TxtileHistoryAncientTimeline />}
            />
            <Route
              path="/txtilehistoryancientresult"
              element={<TxtileHistoryAncientResult />}
            />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
