import { Layout } from "~/components";
import { cn, createMetaData, createSitemap } from "~/utils";
import torenvalkmp4 from "../../public/assets/videos/gezinshuis-de-wij-de-torenvalk.mp4";
import houtduifmp4 from "../../public/assets/videos/gezinshuis-de-wij-de-houtduif.mp4";

export const meta = createMetaData({
  title: "Begeleid wonen",
  description: "Informatie over begeleid wonen bij Gezinshuizen de wij",
});

export const handle = createSitemap("/begeleid-wonen", 0.1);

export default function Route() {
  return (
    <Layout>
      <section className={cn("prose-config")}>
        <h3>Begeleid wonen</h3>
        <p>
          Gezinshuizen de Wij heeft 2 woonlocaties die 24/7 wonen, begeleiding
          en zorg bieden aan (jong)volwassenen met LVB problematiek en/of met
          een GGZ indicatie. Onze gezinshuizen hebben een samenwerkingsverband
          met de AWBZ erkende Albero zorggroep. De Albero Zorggroep verzorgt de
          instroom, doorstroom en uitstroom met een multidisciplinair
          behandelteam en administratieve ondersteuning.
        </p>
      </section>
      <section className={cn("prose-config")}>
        <video className="h-auto w-full max-w-full" controls>
          <source src={houtduifmp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="h-auto w-full max-w-full" controls>
          <source src={torenvalkmp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          In Houtduif de Wij en Torenvalk de Wij wonen maximaal negen (jong)
          volwassenen vanaf 17 jaar, begeleid zelfstandig. Beide huizen hebben
          ieder hun eigen sfeer en eigen doelgroep. Een plek waar iedereen mag
          zijn wie die is, maar waar wel rekening gehouden wordt met elkaar.
          Eerlijkheid, respect voor elkaar, ruimte voor persoonlijke
          ontwikkeling, relevante daginvulling en het benutten van kansen en
          individuele mogelijkheden zijn belangrijke kernwaarden voor ons.​
        </p>
        <p>
          Je geeft zelf invulling aan je vrije tijd, maar er worden ook
          gezamenlijke activiteiten ondernomen zoals winkelen, wandelen,
          sporten, fietsen en film kijken. Binnen de veiligheid van het
          groepswonen is er veel ruimte voor persoonlijke groei en ontwikkeling.
          Hierdoor kunnen Houtduif de Wij en Torenvalk De Wij voor jou een basis
          zijn naar een nog zelfstandigere woonplek.
        </p>
      </section>
    </Layout>
  );
}
