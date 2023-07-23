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
          Geesje en Eddy Hilderink zijn de gezinsouders. Samen in een team met
          Lotte, Ilva en Ingo zorgen zij voor de dagelijkse, persoonlijke
          begeleiding. Geesje en Eddy zijn inmiddels ruim 37 jaar geleden
          getrouwd waarbij toen hun thema was:
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
