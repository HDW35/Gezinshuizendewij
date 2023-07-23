import { Card, Layout } from "~/components";
import { cn, createMetaData, createSitemap } from "~/utils";
import portretEddy from "../../public/assets/images/Portret-Eddy.jpg";
import portretGeesje from "../../public/assets/images/Portret-Geesje.jpg";
import portretLotte from "../../public/assets/images/Portret-Lotte.jpg";
import portretIngo from "../../public/assets/images/Portret-Ingo.jpg";
import portretIlva from "../../public/assets/images/Portret-Ilva.jpg";

export const meta = createMetaData({
  title: "Wie zijn wij",
  description: "Informatie over wie er werken bij Gezinshuizen de wij.",
});

export const handle = createSitemap("/wie-zijn-wij", 0.1);

export default function Route() {
  return (
    <Layout>
      <section className={cn("prose-config")}>
        <h3>Wie zijn wij?</h3>
        <p>Het team van Gezinshuizen de Wij bestaat uit:</p>
        <p>
          Eddy en Geesje Hilderink, gezinsouders. Lotte Blom, begeleider. Ilva
          Hilderink, begeleider Ingo D'Hont, begeleider. Tessa, begeleider.
        </p>
        <p>
          Als gezinshuizen hebben wij onze eigen identiteit en zorgen wij samen,
          als 1 kleinschalig team, voor persoonlijke begeleiding, met ruimte
          voor eigen initiatief voor zowel begeleider als bewoner. Elke dag
          vertrouwde gezichten in de dagelijks begeleiding. Samen leven, samen
          wonen, samen plezier maken en met positieve aandacht voor elkaar.
        </p>
      </section>
      <section className="flex flex-wrap gap-4">
        <Card className="max-w-sm rounded-lg">
          <img className="rounded-t-lg" src={portretEddy} alt="Portret Eddy" />
          <article className={cn("prose-sm p-4")}>
            <h5>
              Eddy Hilderink
            </h5>
            <p className="font-normal">
              Hallo, ik ben Eddy en kom oorspronkelijk uit Huissen. Na mijn
              opleiding fysiotherapie in Deventer, waar ik Geesje heb leren
              kennen, heb ik ruim 35 jaar in Lelystad gewoond en gewerkt als
              zelfstandig fysiotherapeut met diverse specialisaties. Als
              kinderfysiotherapeut heb ik ook meer dan 25 jaar in het speciaal
              onderwijs gewerkt. In 2015 hebben Geesje en ik samen gekozen om
              het roer om te gooien, terug te keren naar het oosten van het land
              en als gezinsouders te gaan werken. Ik vind het belangrijk dat je
              wensen en doelen hebt voor de toekomst. Graag wil ik je helpen om
              samen met jou vorm te geven aan deze toekomstplannen. Met passie,
              enthousiasme, doorzettingsvermogen en creativiteit zoeken naar
              wegen om jouw dromen en wensen mogelijk te maken.
            </p>
          </article>
        </Card>
        <Card className="max-w-sm rounded-lg">
          <img
            className="rounded-t-lg"
            src={portretGeesje}
            alt="Portret Geesje"
          />
          <article className={cn("prose-sm p-4")}>
            <h5>Geesje Hilderink</h5>
            <p>
              Hallo, ik ben Geesje en kom oorspronkelijk uit Arnhem-Zuid. Na
              mijn opleiding fysiotherapie in Deventer, waar ik Eddy heb leren
              kennen, heb ik ruim 35 jaar in Lelystad gewoond en gewerkt als
              zelfstandig fysiotherapeut met diverse specialisaties. In 2015
              hebben Eddy en ik samen gekozen om het roer om te gooien door
              terug te gaan naar het oosten van het land en als gezinsouders te
              gaan werken. Voor mij zijn respect en eerlijkheid voor jezelf en
              voor anderen belangrijke kernwaarden. We respecteren onze
              medebewoners, onze begeleiders, houden rekening met elkaar en
              waarderen de inbreng van allen. Een goede, open communicatie is
              hierbij essentieel.
            </p>
          </article>
        </Card>
        <Card className="max-w-sm rounded-lg">
          <img
            className="rounded-t-lg"
            src={portretLotte}
            alt="Portret Lotte"
          />
          <article className={cn("prose-sm p-4")}>
            <h5>Lotte Blom</h5>
            <p>
              Hallo, ik ben Lotte en woon in Arnhem-Zuid. Ik heb de opleiding
              verzorgde niveau 3 gedaan. Als stagiaire ben ik bij de Karmel
              begonnen en daarna als woonbegeleider in de Slangenburg en later
              de Wij. Inmiddels werk ik 8 jaar bij de Wij, waarvan de laatste 5
              jaar samen met Eddy en Geesje. Ik wil je graag vanuit een veilige,
              huiselijke omgeving helpen om samen te ontdekken wie je bent en
              wat je aan nieuwe dingen ten aanzien van zelfstandigheid. Bij het
              ontwikkelen van toenemende zelfstandigheid en vrijheid hoort ook
              het nemen van persoonlijke verantwoordelijkheid.
            </p>
          </article>
        </Card>
        <Card className="max-w-sm rounded-lg">
          <img className="rounded-t-lg" src={portretIlva} alt="Portret Ilva" />
          <article className={cn("prose-sm p-4")}>
            <h5>Ilva Hilderink</h5>
            <p>
              Hallo, ik ben Ilva en samen met mijn man Ingo woon ik sinds
              november 2016 in het privé gedeelte van de Torenvalk. Ingo en ik
              kennen elkaar vanuit onze opleidingsperiode in Vlissingen. Ik maak
              onderdeel uit van het begeleidingsteam de Wij en werk daarnaast
              parttime als verloskundige en als obstetrie verpleegkundige. Ik
              vind het als begeleider belangrijk om uit te gaan van jouw eigen
              talent, de dingen waar jij goed in bent. Vanuit je eigen talent
              kun je op je eigen tempo, waar mogelijk samen met je persoonlijke
              netwerk, met persoonlijke afspraken je eigen mogelijkheden verder
              ontplooien.
            </p>
          </article>
        </Card>
        <Card className="max-w-sm rounded-lg">
          <img className="rounded-t-lg" src={portretIngo} alt="Portret Ingo" />
          <article className={cn("prose-sm p-4")}>
            <h5>Ingo D'Hont</h5>
            <p>
              Hallo, ik ben Ingo en samen met mijn vrouw Ilva woon ik sinds
              november 2016 in het privé gedeelte van de Torenvalk. Ilva en ik
              kennen elkaar vanuit onze opleidingsperiode in Vlissingen ik ben
              daar afgestudeerd als Civiel Ingenieur. Om mij als persoonlijk
              begeleider verder te ontwikkelen ben ik bezig met een opleiding
              binnen de sociale/pedagogische sector. Ik vind het als begeleider
              belangrijk dat je een zinvolle invulling van de dag hebt. Werk,
              school, opleiding of een vorm van dagbesteding zijn hierbij
              belangrijk. Graag wil ik samen met jou werken aan je wensen voor
              een zinvolle, passende dag invulling.
            </p>
          </article>{" "}
        </Card>
        <Card className="max-w-sm rounded-lg">
          <img
            className="rounded-t-lg"
            src={portretGeesje}
            alt="Portret Geesje"
          />
          <article className={cn("prose-sm p-4")}>
            <h5>Ingo D'Hont</h5>
            <p>
              Hallo, ik ben Ingo en samen met mijn vrouw Ilva woon ik sinds
              november 2016 in het privé gedeelte van de Torenvalk. Ilva en ik
              kennen elkaar vanuit onze opleidingsperiode in Vlissingen ik ben
              daar afgestudeerd als Civiel Ingenieur. Om mij als persoonlijk
              begeleider verder te ontwikkelen ben ik bezig met een opleiding
              binnen de sociale/pedagogische sector. Ik vind het als begeleider
              belangrijk dat je een zinvolle invulling van de dag hebt. Werk,
              school, opleiding of een vorm van dagbesteding zijn hierbij
              belangrijk. Graag wil ik samen met jou werken aan je wensen voor
              een zinvolle, passende dag invulling.
            </p>
          </article>
        </Card>
      </section>
    </Layout>
  );
}
