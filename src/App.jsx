import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Weather from "./pages/Weather";
import Community from "./pages/Community";
import MarketPlace from "./pages/MarketPlace";
import CropAdvisory from "./pages/CropAdvisory";
import CommunityPage from "./pages/CommunityPage";
import RegisteredUsers1 from "./pages/RegisteredUsers1";
import RegisteredUsers2 from "./pages/RegisteredUsers2";
import ApnaTelangana from "./pages/ApnaTelangana";
import FarmerCalender from "./pages/FarmerCalender";
import TraderCalender from "./pages/TraderCalender";
import RaviKumar from "./pages/RaviKumar";
import Nizambad from "./pages/Nizambad";
import HomePageTelugu from "./pages/HomePageTelugu";
import WeatherTelugu from "./pages/WeatherTelugu";
import CropAdvisoryTelugu from "./pages/CropAdvisoryTelugu";
import CommunityTelugu from "./pages/CommunityTelugu";
import CommunityPageTelugu from "./pages/CommunityPageTelugu";
import RegisteredUsers1Telugu from "./pages/RegisteredUsers1Telugu";
import RegisteredUsers2Telugu from "./pages/RegisteredUsers2Telugu";
import MarketPlaceTelugu from "./pages/MarketPlaceTelugu";
import FarmerCalenderTelugu from "./pages/FarmerCalenderTelugu";
import TraderCalenderTelugu from "./pages/TraderCalenderTelugu";
import RaviKumarTelugu from "./pages/RaviKumarTelugu";
import NizambadTelugu from "./pages/NizambadTelugu";
import ApnaTelanganaTelugu from "./pages/ApnaTelanganaTelugu";
import Traders from "./pages/Traders1";
import Traders1Telugu from "./pages/Traders1Telugu";
import SelectLanguage from "./pages/SelectLanguage";
import MobileNumLogin from "./pages/MobileNumLogin";
import OtpLogin from "./pages/OtpLogin";
import CropPage from "./pages/CropPage";
import SelectRole from "./pages/SelectRole";
import AllowLocation from "./pages/AllowLocation";
import CompleteProfile1 from "./pages/FieldLocation";
import CropDetails from "./pages/CropDetails";
import FieldLocation from "./pages/FieldLocation";
import AllowNotifications from "./pages/AllowNotifications";
import SoilReport from "./pages/SoilReport";
import BookSoilTest from "./pages/BookSoilTest";
import ApnaApps from "./pages/ApnaApps";
import BharatAgri from "./pages/BharatAgri";
import MarketplacePrice from "./pages/MarketplacePrice";
import CropDoctor from "./pages/CropDoctor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* English */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<SelectLanguage />} />

          <Route path="/login" element={<MobileNumLogin />} />
          <Route path="/login-otp" element={<OtpLogin />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/allow-location" element={<AllowLocation />} />
          <Route path="/field-location" element={<FieldLocation />} />
          <Route path="/crop-details" element={<CropDetails />} />
          <Route path="/allow-notifications" element={<AllowNotifications />} />

          <Route path="/crop-advisory/soil-report" element={<SoilReport />} />
          <Route path="/crop-advisory/soil-report/book-test" element={<BookSoilTest />} />
          <Route path="/apna-apps" element={<ApnaApps />} />
          <Route
            path="/crop-advisory/soil-report/book-test"
            element={<BookSoilTest />}
          />
          <Route path="/apna-apps/bharat-agri" element={<BharatAgri />} />

          <Route path="/weather" element={<Weather />} />
          <Route path="/crop-advisory" element={<CropAdvisory />} />
          <Route path="/crop-advisory/crop" element={<CropPage />} />
          <Route path="/crop-advisory/crop-doctor" element={<CropDoctor />} />

          <Route path="/community" element={<Community />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route
            path="/market-place/farmer-calender"
            element={<FarmerCalender />}
          />
          <Route
            path="/market-place/trader-calender"
            element={<TraderCalender />}
          />
          <Route path="/market-place/price" element={<MarketplacePrice />} />
          <Route
            path="/community/micro-irrigation"
            element={<CommunityPage />}
          />
          <Route
            path="/community/micro-irrigation/registered-users1"
            element={<RegisteredUsers1 />}
          />
          <Route
            path="/community/micro-irrigation/registered-users2"
            element={<RegisteredUsers2 />}
          />
          <Route
            path="/community/micro-irrigation/ravi-kumar"
            element={<RaviKumar />}
          />
          <Route
            path="/community/micro-irrigation/nizambad"
            element={<Nizambad />}
          />
          <Route path="/apna-telangana" element={<ApnaTelangana />} />
          <Route
            path="/market-place/trader-calender/traders"
            element={<Traders />}
          />
          <Route
            path="/market-place-telugu/trader-calender-telugu/traders-telugu"
            element={<Traders1Telugu />}
          />

          {/* Telugu */}
          <Route path="/homepage-telugu" element={<HomePageTelugu />} />
          <Route path="/weather-telugu" element={<WeatherTelugu />} />
          <Route
            path="/crop-advisory-telugu"
            element={<CropAdvisoryTelugu />}
          />
          <Route path="/community-telugu" element={<CommunityTelugu />} />
          <Route
            path="/community/micro-irrigation-telugu"
            element={<CommunityPageTelugu />}
          />
          <Route
            path="/community/micro-irrigation/registered-users1-telugu"
            element={<RegisteredUsers1Telugu />}
          />
          <Route
            path="/community/micro-irrigation/registered-users2-telugu"
            element={<RegisteredUsers2Telugu />}
          />
          <Route
            path="/community/micro-irrigation/ravi-kumar-telugu"
            element={<RaviKumarTelugu />}
          />
          <Route
            path="/community/micro-irrigation/nizambad-telugu"
            element={<NizambadTelugu />}
          />
          <Route path="/market-place-telugu" element={<MarketPlaceTelugu />} />
          <Route
            path="/market-place-telugu/farmer-calender-telugu"
            element={<FarmerCalenderTelugu />}
          />
          <Route
            path="/market-place-telugu/trader-calender-telugu"
            element={<TraderCalenderTelugu />}
          />
          <Route
            path="/apna-telangana-telugu"
            element={<ApnaTelanganaTelugu />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
