/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CreateWebsiteSection from './CreateWebsiteSection';
import DesignSection from './DesignSection';
import DevelopmentSection from './DevelopmentSection';
import ExpertSection from './ExpertSection';
import FeatureHeading from './FeatureHeading';
import FooterNavTab from './FooterNavTab';
import FooterSection from './FooterSection';
import Header from './Header';
import Heading from './Heading';
import IntroSection from './IntroSection';
import MarketingSection from './MarketingSection';
import MoreResourcesSection from './MoreResourceSection';
import PhenomenonHeadingSection from './PhenomenonHeading';
import PopupBuilderSection from './PopupBuilderSection';
import SignUpSection from './SignUp';
import ThemeBuilderSection from './ThemeBuilder';
import UserCommentSection from './UserCommentSection';
import VideoSection from './VideoSection';
import WidgetSection from './WidgetSection';
import WordpressEcosystemSection from './WordpressEcosystem';
import WordpressSection from './WordpressSection';

const mainStyles = css`
  position: relative;
  z-index: 200;
  margin-top: 200px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;

  > section {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    width: 1300px;
  }
`;

function App() {
  return (
    <>
      <Header />

      <main css={mainStyles}>
        <IntroSection />
        <VideoSection />
        <Heading />
        <DesignSection />
        <MarketingSection />
        <DevelopmentSection />
        <CreateWebsiteSection />
        <WordpressSection />
        <UserCommentSection />
        <ExpertSection />
        <FeatureHeading />
        <ThemeBuilderSection />
        <PopupBuilderSection />
        <WidgetSection />
        <WordpressEcosystemSection />
        <PhenomenonHeadingSection />
        <MoreResourcesSection />
        <SignUpSection />
        <FooterSection />
      </main>

      <FooterNavTab />
    </>
  );
}

export default App;
