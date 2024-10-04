import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import PractiseAreaCard from '../components/practiseAreaCard';

const PractiseAreasList = ({ numberOfItems }) => {
  const [itemToDisplay, setItemToDisplay] = React.useState([]);
  const state = {
    practiseAreas: [
      {
        areaName: 'Intellectual Property',
        areaDescription: `At Lexwell Partners, we provide comprehensive services to protect and enforce intellectual property (IP) rights. Our team advises on trademark, copyright, patent, design, and trade secret matters, ensuring your innovations and brands are secured. Whether it’s IP registration, enforcement, or defending IP-related disputes, our proactive approach helps businesses maintain a competitive edge in today’s global marketplace.`,
        areaImg: 'assets/images/intellectualProperty.webp',
      },
      {
        areaName: 'Corporate Advisory',
        areaDescription: `Our corporate advisory practice supports businesses at every stage of their growth. We provide counsel on company formation, governance, regulatory compliance, and strategic planning. Whether advising startups or established corporations, Lexwell Partners combines legal expertise with a deep understanding of industry-specific challenges to deliver effective corporate solutions.`,
        areaImg: 'assets/images/advisory.jpg',
      },
      {
        areaName: 'Mergers and Acquisitions',
        areaDescription: `Lexwell Partners advises clients on mergers, acquisitions, joint ventures, and restructuring deals across various industries. Our M&A team assists in structuring deals, conducting due diligence, and negotiating terms that protect our clients' interests. We work closely with corporate executives and stakeholders to navigate complex regulatory environments and ensure seamless transactions.`,
        areaImg: 'assets/images/mergers.png',
      },
      {
        areaName: 'Arbitration and Dispute Resolution',
        areaDescription: `We specialize in resolving disputes efficiently through arbitration, mediation, and other alternative dispute resolution (ADR) mechanisms. With experience across domestic and international arbitration forums, Lexwell Partners represents clients in high-stakes commercial disputes. Our approach is solution-oriented, focusing on minimizing risks and achieving favorable outcomes without lengthy court battles.`,
        areaImg: 'assets/images/dispute.jpg',
      },
      {
        areaName: 'Employment and Labour Law',
        areaDescription: `Lexwell Partners provides expert guidance on employment and labor law matters, including drafting employment contracts, workplace policies, and handling disputes. Our team advises clients on compliance with labor laws, employee benefits, workplace discrimination, and termination issues. We strive to safeguard employer interests while ensuring compliance with evolving employment regulations in India.`,
        areaImg: 'assets/images/labourLaw.jpeg',
      },
      {
        areaName: 'Litigation',
        areaDescription: `Our litigation team is proficient in representing clients in a wide range of civil and commercial disputes before courts and tribunals, including the Supreme Court of India, High Courts (specifically the Delhi High Court), and specialized forums such as the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), Debt Recovery Tribunal (DRT), Debt Recovery Appellate Tribunal (DRAT), National Consumer Disputes Redressal Commission (NCDRC), and Central Adminstrative Tribunal (CAT). Lexwell Partners also handles litigation across all District Courts in Delhi NCR. We employ strategic litigation practices to deliver favorable outcomes in corporate litigation, contractual disputes, and more, ensuring our clients' interests are aggressively protected.`,
        areaImg: 'assets/images/litigation.jpg',
      },
    ],
  };

  useEffect(() => {
    if (numberOfItems) {
      const firstThreeObjects = state.practiseAreas.slice(0, numberOfItems);
      setItemToDisplay(firstThreeObjects);
    } else setItemToDisplay(state.practiseAreas);
  }, [numberOfItems]);

  return (
    <Grid container spacing={3}>
      {itemToDisplay.length > 0 &&
        itemToDisplay.map((practiseArea) => (
          <Grid item size={{ xs: 12, sm: 6, lg: 4 }} key={practiseArea} className="mb-30">
            <PractiseAreaCard practiseArea={practiseArea} />
          </Grid>
        ))}
    </Grid>
  );
};

export default PractiseAreasList;
