import { Layout } from "~/components";
import { cn, createSitemap } from "~/utils";

export const handle = createSitemap("/", 1);

export default function Route() {
  return (
    <Layout>
      <section className={cn("prose-config text-justify")}>
        <h3>- Nog één plaats beschikbaar! -</h3>
        <p>
          “Houtduif de Wij” en “Torenvalk de Wij” zijn twee prachtig en
          landelijk gelegen boerderijen in Gendt.
        </p>
        <p>
          Eddy, Ingo en Ilva zijn de gezinsouders. Samen in een team met Lotte 
          en Tessa zorgen zij voor de dagelijkse, persoonlijke begeleiding.
          Eddy en Geesje Hilderink zijn 1 januari 2016 als gezinsouders gestart.
          In november 2016 zijn dochter Ilva en schoonzoon Ingo in de Torenvalk
          komen wonen en ook betrokken in het gezinshuis. De gezinshuizen zijn
          daarmee ook meer een familiehuis geworden.
          Geesje en Eddy waren in oktober 2021 40 jaar geleden getrouwd waarbij
          toen hun thema was en ook nog steeds is:
        </p>
        <p>Niet ik, niet jij, …..maar wij!</p>
        <p>
          Dit thema is ook het centrale thema van de begeleiding van
          Gezinshuizen de Wij.
        </p>
        <p>
          Samen zorgen wij voor een veilige, prettige, rustige, creatieve en
          huiselijke woonomgeving waarin iedereen zichzelf kan zijn, zich thuis
          kan voelen en zich op zijn/haar wijze kan ontwikkelen.
        </p>
        <p>
          “Houtduif en Torenvalk de Wij” zijn de bewoners en hun netwerk, de
          gezinsouders, het team samen met de ondersteuning vanuit de Albero
          gezinshuizen, de Albero Zorggroep en het werk, school of de
          dagbesteding.
        </p>
        <p>Samen maken wij “Gezinshuizen de Wij ”.</p>
      </section>
    </Layout>
  );
}
