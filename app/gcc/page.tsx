import type { Metadata } from "next";
import Image from "next/image";
import logo from "../../public/images/imanco-logo.png";
import jubail from "../../public/images/jubail-island-abu-dhabi.jpg";
import port from "../../public/images/port-de-la-mer-dubai.webp";
import resort from "../../public/images/desert-islands-resort-anantara.jpg";
import bloom from "../../public/images/bloom-living-abu-dhabi.jpg";
import MobileMenu from "./mobile-menu";
import styles from "./page.module.css";

const site = "https://imanco.net";
const tiles = `${site}/product/roof-tiles`;
const components = `${site}/product/roofing-components`;
const tileFilter = `${site}/galleryFilter`;
const about = `${site}/about-us`;
const portfolio = `${site}/project`;
const contact = `${site}/contact-us`;
const title = "Clay Roof Tiles & Roofing Components for the GCC | IMANCO";
const description = "Compare clay and glazed roof tiles for GCC projects. Ask IMANCO about tile profiles, matching dry-fix components, availability and delivery to your city.";
const socialImage = "/images/port-de-la-mer-dubai.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gcc" },
  openGraph: {
    type: "website",
    siteName: "IMANCO",
    url: "/gcc",
    title,
    description,
    images: [{ url: socialImage, width: 1920, height: 1080, alt: "Port de La Mer waterfront in Dubai" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

const projects = [
  { name: "Port de La Mer", location: "Dubai, UAE", image: port, alt: "Tiled rooftops overlooking the marina and Dubai skyline" },
  { name: "Jubail Island", location: "Abu Dhabi, UAE", image: jubail, alt: "Architectural rendering of a villa with warm brown pitched tile roofs" },
  { name: "Desert Islands Resort & Spa by Anantara", location: "Sir Bani Yas Island, UAE", image: resort, alt: "Anantara resort with green roofs surrounding an outdoor pool" },
  { name: "Bloom Living", location: "Abu Dhabi, UAE", image: bloom, alt: "Bloom Living visual showing tiled homes and gardens around a lake" },
];

const enquiryDetails = [
  "Project country and city",
  "Preferred tile or product reference",
  "Approximate roof area or quantity",
  "Required delivery date",
];

const buyerQuestions = [
  {
    question: "Can I enquire about clay roof tile delivery to my GCC country?",
    answer: "Yes. Include your country and city when requesting a quote. IMANCO handles GCC re-exports and reviews product availability, lead time and delivery options for the requested destination.",
  },
  {
    question: "Which clay roof tile profiles and finishes can I compare?",
    answer: "Start with the IMANCO product filter. Catalogue references include Duna Natural Red, Logica Plana Copper and Al Yamama Marseilles. If you are comparing natural red and glazed roof tiles, ask which finishes are available for the profile you need.",
  },
  {
    question: "Can I request tiles and dry-fix roofing components together?",
    answer: "Yes. Include the tile reference and roof details in one enquiry. Ask which components are compatible with your roof design, such as counter battens, pest guards or a breathable roof membrane.",
  },
  {
    question: "What do I need for a roof tile quote?",
    answer: "Send the project country and city, tile profile or product reference, approximate roof area or quantity, and required date. If you have drawings, include the roof pitch and details for ridges, hips or eaves.",
  },
  {
    question: "How do I match roof tiles for a replacement or extension?",
    answer: "Share photos of the existing roof and a close-up of a tile. If available, include the original product code, tile dimensions and the required quantity so IMANCO can check for a matching profile and finish.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site}/gcc#webpage`,
  url: `${site}/gcc`,
  name: title,
  description,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "IMANCO", url: site },
  about: [{ "@type": "Thing", name: "Clay roof tiles" }, { "@type": "Thing", name: "Roofing components" }],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function GccPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }} />
      <a className={styles.skip} href="#main">Skip to content</a>
      <header className={styles.header}>
        <div className={styles.shell + " " + styles.headerInner}>
          <a href={site} className={styles.brand}>
            <Image src={logo} alt="" width={76} height={57} />
            <span>IMANCO<small>Building materials</small></span>
          </a>
          <nav aria-label="Main navigation" className={styles.nav}>
            <a href={tiles}>Roof tiles</a>
            <a href={components}>Roofing components</a>
            <a href={portfolio}>Projects</a>
            <a href="/gcc" aria-current="page">GCC</a>
          </nav>
          <a className={styles.headerCta} href={contact}>Contact us <Arrow /></a>
          <MobileMenu />
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="page-title">
          <Image src={jubail} alt="" fill preload sizes="100vw" className={styles.heroImage} />
          <div className={styles.shell + " " + styles.heroInner}>
            <p className={styles.eyebrow}>IMANCO Gulf Cooperation Council</p>
            <h1 id="page-title">Clay Roof Tiles<br />for GCC Projects</h1>
            <p className={styles.heroText}>Source roof tiles and matching components for your project in the Gulf. Share your tile profile, quantity and destination so we can review availability and delivery options.</p>
            <div className={styles.actions}>
              <a className={styles.button} href="#enquire">Enquire About Your Project <Arrow /></a>
              <a className={styles.outline} href={tiles}>Browse Roof Tiles <Arrow /></a>
            </div>
          </div>
          <div className={styles.photoCredit}>Jubail Island · Abu Dhabi</div>
        </section>

        <section className={styles.shell + " " + styles.products} aria-labelledby="products-title">
          <div>
            <p className={styles.eyebrow}>Roofing materials</p>
            <h2 id="products-title">Clay roof tiles and<br className={styles.desktopBreak} /> matching components</h2>
          </div>
          <div className={styles.productCopy}>
            <p>IMANCO Trading is a Sharjah-based roof tile supplier that handles re-exports to GCC markets. Contractors and distributors can enquire about clay roof tiles and matching roofing accessories for villas, resorts and residential developments.</p>
            <a href={tiles}>Browse Roof Tiles <Arrow /></a>
            <a href={components}>View Roofing Components <Arrow /></a>
          </div>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <h3>Clay roof tile profiles</h3>
              <p>Compare Spanish, Italian and Portuguese roof tile ranges. Catalogue examples include Spanish Duna Natural Red, Portuguese Logica Plana Copper and Al Yamama Marseilles.</p>
              <a className={styles.textLink} href={tileFilter}>Compare catalogue references <Arrow /></a>
            </article>
            <article className={styles.infoCard}>
              <h3>Natural red and glazed roof tiles</h3>
              <p>Ask about natural red or terracotta tones, glazed finishes and colour options for your chosen tile. For a replacement or extension, share a close-up of the original tile and any product code.</p>
            </article>
            <article className={styles.infoCard}>
              <h3>Dry-fix roofing components</h3>
              <p>IMANCO’s CoolRoof system describes counter battens, pest guards and a breathable waterproof layer. Include roof pitch and drawings when asking which dry-fix components suit your tile and roof design.</p>
            </article>
          </div>
        </section>

        <section className={styles.gallerySection} aria-labelledby="projects-title">
          <div className={styles.shell}>
            <div className={styles.galleryHeading}>
              <div>
                <p className={styles.eyebrow}>United Arab Emirates</p>
                <h2 id="projects-title">Roofing project references</h2>
                <p>See how roof colours and profiles look across villas, waterfront developments and resorts. Include a project name or image in your enquiry if it shows a look you want to match.</p>
              </div>
              <a className={styles.textLink} href={portfolio}>View IMANCO Projects <Arrow /></a>
            </div>
            <div className={styles.gallery}>
              {projects.map((project) => (
                <figure key={project.name} className={styles.project}>
                  <div className={styles.projectPhoto}>
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 1080px) 45vw, 280px" />
                  </div>
                  <figcaption><span>{project.location}</span><strong>{project.name}</strong></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.shell + " " + styles.destinations} aria-labelledby="destinations-title">
          <h2 id="destinations-title">Roof tile supply enquiries by GCC destination</h2>
          <p className={styles.sectionIntro}>IMANCO reviews availability, lead time and delivery by project. Include the final delivery city and flag any site access or unloading requirements when requesting a quote.</p>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <h3>United Arab Emirates</h3>
              <p>IMANCO lists its main office and showroom in Sharjah. Include your emirate and city when asking about roof tile availability or delivery.</p>
              <a className={styles.textLink} href={contact}>View UAE contact details <Arrow /></a>
            </article>
            <article className={styles.infoCard}>
              <h3>Saudi Arabia</h3>
              <p>IMANCO lists a Saudi Arabia location on its Contact page. Share your delivery city and tile reference so the team can review options for your project.</p>
              <a className={styles.textLink} href={contact}>View Saudi Arabia location <Arrow /></a>
            </article>
            <article className={styles.infoCard}>
              <h3>Qatar, Oman, Kuwait and Bahrain</h3>
              <p>For re-export enquiries, send the destination city, tile quantity and required date. Ask IMANCO to confirm the delivery arrangement for your specific order.</p>
              <a className={styles.textLink} href={about}>About IMANCO’s re-export business <Arrow /></a>
            </article>
          </div>
        </section>

        <section className={styles.questionsSection} aria-labelledby="questions-title">
          <div className={styles.shell + " " + styles.questions}>
            <h2 id="questions-title">GCC roof tile supply questions</h2>
            <div className={styles.answers}>
              {buyerQuestions.map(({ question, answer }) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.enquirySection} id="enquire" aria-labelledby="enquiry-title">
          <div className={styles.shell + " " + styles.enquiry}>
            <div>
              <p className={styles.eyebrow}>Project enquiries</p>
              <h2 id="enquiry-title">Enquire about supply<br className={styles.desktopBreak} /> for your GCC project</h2>
              <p>IMANCO’s Contact page lists locations in the UAE and Saudi Arabia. Share your project details so our team can review availability, lead times and delivery options for your destination.</p>
              <a className={styles.button} href={contact}>Enquire About Your Project <Arrow /></a>
            </div>
            <div className={styles.checklist}>
              <h3>What to include in your enquiry</h3>
              <ul>{enquiryDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <p>Need clay bricks or solar water heaters? Add them to the same enquiry.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.shell + " " + styles.footerInner}>
          <a href={site} className={styles.brand}>
            <Image src={logo} alt="" width={65} height={49} />
            <span>IMANCO<small>Sharjah, United Arab Emirates</small></span>
          </a>
          <nav aria-label="Footer navigation">
            <a href={about}>About IMANCO</a>
            <a href={portfolio}>Projects</a>
            <a href={contact}>Contact us <Arrow /></a>
          </nav>
        </div>
      </footer>
    </>
  );
}
