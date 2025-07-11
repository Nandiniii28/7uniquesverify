import CandyHero from "../../pages/CandyHero";
import CandySolutions from "../../pages/CandySolutions";
import CandyUseCases from "../../pages/CandyUse";
import CandyWorkflow from "../../pages/CandyWorkflow";
import CandyReasons from "../../pages/CandyCards";
import HomeFAQ from "../../pages/HomeFAQ";
import SEO from "../Helmet/helment";
import { ContextData } from "../../config/context";
import { useContext } from "react";

export default function CandyPage() {
  const { seo } = useContext(ContextData);

  return (
    <>
      <SEO seo={seo} />
      <CandyHero />
      <CandySolutions></CandySolutions>
      <CandyUseCases></CandyUseCases>
      <CandyWorkflow></CandyWorkflow>
      <CandyReasons></CandyReasons>
      <HomeFAQ></HomeFAQ>
    </>
  );
}
