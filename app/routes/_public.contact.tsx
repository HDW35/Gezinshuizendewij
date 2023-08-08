import { ButtonIconAnchor, Card, Layout, Separator } from "~/components";
import { createMetaData, createSitemap } from "~/utils";
import banner from "../../public/assets/images/banner.jpg";
import { AtSign, Home, Map, MapPin, Phone, Smartphone, User } from "~/icons";

export const meta = createMetaData({
  title: "Contact",
  description: "Contact informatie Gezinshuizen de wij.",
});

export const handle = createSitemap("/contact", 0.1);

export default function Route() {
  return (
    <Layout>
      <article className="prose-config text-justify">
        <h3>Contact</h3>
        <p>
          Neem contact met ons op. Wil je bij ons komen wonen of heb je vragen
          over begeleid wonen? Neem dan contact met ons op, en wij zullen je
          samen met het zorg expertise team van de Albero zorggroep informeren
          naar de mogelijkheden.
        </p>
      </article>
      <section className="flex">
        <img
          src={banner}
          className="xs:hidden hidden max-h-[440px] pr-6 sm:block"
          alt="Banner"
        />
        <div className="flex flex-col self-end">
          <h4 className="flex pb-4">
            <Home />
            <span className="ml-2">Houtduif en Torenvalk de Wij</span>
          </h4>
          <Card className="py-1">
            <div className="pb-1">
              <IconInfo
                icon={<Map />}
                href="https://maps.google.com/?q=35 Olyhorststraat, Gendt, Netherlands"
              >
                Olyhorststraat 35-41
              </IconInfo>
              <IconInfo
                icon={<MapPin />}
                href="https://maps.google.com/?q=6691HE 35"
              >
                6691 HE Gendt
              </IconInfo>
              <IconInfo icon={<Phone />} href="tel:0481-729737">
                06-21907019
              </IconInfo>
            </div>
            <Separator />
            <div className="pb-1">
              <IconInfo icon={<User className="dim dark:dim m-2" />}>
                Eddy Hilderink
              </IconInfo>
              <IconInfo icon={<Smartphone />} href="tel:06-25162284">
                06-54766550
              </IconInfo>
            </div>
            <Separator />
            <div className="pb-1">
              <IconInfo icon={<User className="dim dark:dim m-2" />}>
                Ingo D'Hont
              </IconInfo>
              <IconInfo icon={<Smartphone />} href="tel:06-54766550">
                06-22083819
              </IconInfo>
            </div>
            <Separator />
            <div className="pt-1">
              <IconInfo
                icon={<AtSign />}
                href="mailto:info@gezinshuizendewij.nl"
              >
                info@gezinshuizendewij.nl
              </IconInfo>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}

interface IconInfoProps {
  icon: JSX.Element;
  children: string;
  href?: string;
}

const IconInfo = ({ icon, children, href }: IconInfoProps) => {
  return (
    <p className="ml-1 flex items-center">
      {href ? (
        <ButtonIconAnchor href={href} variant="ghost" accent="dim">
          {icon}
          <span className="sr-only">Mail sturen</span>
        </ButtonIconAnchor>
      ) : (
        icon
      )}

      <span className="ml-2">{children}</span>
    </p>
  );
};
