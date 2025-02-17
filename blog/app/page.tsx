import BannerBlue from "./components/bannerBlue";
import PerfectDesign from "./components/effectBanner/perfectDesign";
import BuyaDomain from "./components/effectBanner/buyADomain";
import EarnMoney from "./components/effectBanner/earnMoney";
import KnowViewer from "./components/effectBanner/knowViewer";
import Memmories from "./components/effectBanner/memories";
import CreateBlog from "./components/effectBanner/createBlog";

export default function Home() {
  return (
    <>
      <BannerBlue />
      <PerfectDesign />
      <BuyaDomain />
      <EarnMoney />
      <KnowViewer />
      <Memmories />
      <CreateBlog />
    </>
  );
}
