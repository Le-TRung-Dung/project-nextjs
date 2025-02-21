import BannerBlue from "./components/bannerBlue";
import PerfectDesign from "./components/effectBanner/perfectDesign";
import BuyaDomain from "./components/effectBanner/buyADomain";
import EarnMoney from "./components/effectBanner/earnMoney";
import KnowViewer from "./components/effectBanner/knowViewer";
import Memmories from "./components/effectBanner/memories";
import CreateBlog from "./components/effectBanner/createBlog";
import Header from "./pages/header";
import FooterLanding from "./pages/footerLanding";

export default function Home() {
  return (
    <>
      <Header />
      <BannerBlue />
      <PerfectDesign />
      <BuyaDomain />
      <EarnMoney />
      <KnowViewer />
      <Memmories />
      <CreateBlog />
      <FooterLanding />
    </>
  );
}
