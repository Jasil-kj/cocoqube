import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max w-full mx-auto">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
              Premium Organic Export
            </span>
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg text-on-surface mb-8 leading-tight">
              Sustainable Coir Solutions for Global Markets.
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md hover:bg-secondary transition-all duration-300"
                href="/products"
              >
                Explore Products
              </Link>
              <Link
                className="bg-surface-container-high text-on-surface-variant px-8 py-4 rounded-full font-body-md border border-outline-variant hover:bg-surface-variant transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                Download Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div
            className="rounded-[40px] overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdNDCplj3xE4araY_dF_Z-2ktOp65brj4a9KjDI064OV6fHm2w66tRB8jdzNIgR5Bu9l5lPdsCJZS0yjrK46ulMPYA6m7xlSzAA2BA3Gd_Mbe6W9wy7hijfH6tCyz4GeGx3MV6EPCm3aqHnh0Ex4JI58UdnYF05b-Il-5RxH4Ohor_-jxouGPuLRVI07DzdCDBSIdDsmK3mHSyLsCs4OJP4PsATSJGa6Bl6cnaFfcrj6ULbQah8bh_ys8QY2LyWUnPxalFAtSpPm0m')",
            }}
          ></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-[32px] p-8 hidden lg:flex flex-col justify-end text-on-secondary shadow-xl">
            <span className="font-display-lg text-headline-lg block">25+</span>
            <p className="font-body-md">
              Years of Export Excellence across 40+ countries.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-primary mb-6 leading-snug">
            Pioneering a Greener Future in Horticulture.
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-10">
            At Cocoqube, we transform natural coconut husks into premium
            growing media. Our journey is rooted in the lush coastal groves
            where tradition meets modern industrial precision. We bridge the gap
            between organic rawness and sophisticated global trade.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div>
                <h4 className="font-bold text-primary">100% Organic</h4>
                <p className="text-sm text-on-surface-variant">
                  Pure, chemical-free processing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div>
                <h4 className="font-bold text-primary">Global Reach</h4>
                <p className="text-sm text-on-surface-variant">
                  Trusted by 200+ partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us: Bento Grid */}
      <section className="bg-surface-container-low py-32">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-primary mb-4 leading-snug">
              Precision in Every Fiber
            </h2>
            <p className="text-on-surface-variant">
              Setting the benchmark for premium coir manufacturing and
              international supply chain logistics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "temp_preferences_custom",
                title: "Custom Manufacturing",
                desc: "Tailored EC and pH levels specific to your crop requirements and regional climates.",
              },
              {
                icon: "verified",
                title: "Quality Assurance",
                desc: "Triple-washing process ensures ultra-low sodium levels for healthy root development.",
              },
              {
                icon: "shop",
                title: "Worldwide Shipping",
                desc: "Seamless logistics with real-time tracking from our coastal facilities to your warehouse.",
              },
              {
                icon: "nature",
                title: "Natural Products",
                desc: "Sustainability at the core—reclaiming waste into high-performance agricultural substrate.",
              },
              {
                icon: "workspace_premium",
                title: "Export Quality",
                desc: "Stringent international standards compliant with EU and North American regulations.",
              },
              {
                icon: "payments",
                title: "Competitive Pricing",
                desc: "Direct-from-source pricing without compromising on premium export craftsmanship.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 md:p-10 rounded-[32px] card-hover shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                  {item.icon}
                </span>
                <h3 className="font-headline-md text-primary text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section
        className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
        id="products"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">
              Product Range
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-primary leading-snug">
              Crafted Substrates for Modern Horticulture
            </h2>
          </div>
          <Link
            href="/products"
            className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All Products{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[
            {
              title: "Coir Pots",
              desc: "Biodegradable root-friendly pots for nurseries and home gardening.",
              badge: "TOP SELLER",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6DsHFHOjKckLHRjIFOd2uXGpPBqecup7zuO3yikXBH1LLYtY0SjZO2DwwWbSJucJQyFMIE2n5k1J19O3lFNP32VhpTAWlgQtI-n160FOA5lR8JsLR8iCqVWI5WiUwXVUMqo2JTzUlp20AtFhybzH0mr_AP4u7ybV79hOq2mk2on9yr-waBX1WqZWJWD4CAHsxvhWGB3HlORmgI74ATRnKNsroYwXiq83HmSXUVGxM2Ay0cTAyves0IBeONHJZXbYHMlyG_rj50r3e",
            },
            {
              title: "Coco Peat",
              desc: "High water-retention substrate for professional greenhouses.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqEfRT-ZbI1VL8S1Yoy790d6qYJwXXYslKHWT0aJFH1nblZcl3YSVdiVVQZ0vf2vGclNudjmp9p6oPwgDuLI-6N4hMx6JrWXO-KMaAGsdN9vVnUNBZm0qhpmIkg8lURigNkG2xQV0HiiOMsEnOW4khrW88a_1qWtMC8SwcXihuc4kX3EPbcR7lFIW7CmqrgneoZUy93cA24u11fyiF1_u5rxjCWY-BXNMyR_WQOc-KPxjFlk48Bim3w99Vc7sp6rKaqHJVBqS2hB4M",
            },
            {
              title: "Grow Bags",
              desc: "UV-stabilized professional bags for hydroponic cultivation.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClIO0nwcj2Pj_4dJJ69aCy3HrfqF7jrafF0FUVsY_QJbgi9wibK9mbt50xo_0xnkOKqXmh4hKkhKwI3l1OQeYTl3LblPqfAI-rHUSPYfWXfy2dS8H4UgREZ-sx1L1-EVAKabIhPdqicxTjqSt-ikkYQyfh5k0nWdsiWws6mph5UydZALDonIzy7sMu2UTLkgIAOQP_ryXaSxgvMWMXQ903SaCS5p2_o9ApVaYb4eELw56nsYa_CC00y56vxxdOaq21xM1XXJ938dA9",
            },
            {
              title: "Coir Discs",
              desc: "Compressed discs for seed starters and decorative planters.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqYVl3RtWEGInjD7_T9JyOGq3xEZCHFTWxg51OYHhV4lR9XItsH_pyw7no-5wzfVIWJA0vkzvYaB3-3sFyE0FhThafOpaDUNo8WzML29yCQ76VbNzNlZb8uc3q8bHnPWf0l004gy8kt6BCdcfpnZq4CTvE2lT4j-Nbj_AjSAOfB_S7uQ9ZyZp3TX55SM2welu5I2Pk5k6FM3Qp-U_Odw6AD-5ioRVsEIyz8SYJIyhDh8yGPPA4KIF6cNVaeht5M2LCv-rg7LXDSu0W",
            },
            {
              title: "Coir Poles",
              desc: "Eco-friendly support for climbing plants and creepers.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfNfA2oIuFs35S8WZbKfY49HLn_YbdnQjeyz4A2egC-EDil_I_QMjC0ZuHogvdpr13f1SEiEuX_9nrD8roDWhHTyUHNd4MN2IObU_BYqS_gyMQyejYxsOgAoxUAnWObZfEvX38q7qD2e4wi0X3-xlsKMFpljVByIqmBckvd2SFErcaf2lU53X0e-7LK9c8zfmiHJFh_JirXQkbRFlK_II6g-gkyr6ixl5fTxcCRYtxhBgMrVR9rdIVGYnh0lVNW2zO93s1zh7kMedY",
            },
            {
              title: "Coir Logs",
              desc: "Heavy-duty solution for erosion control and slope stability.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDsU4Rbe2bP9O2KUpzaUKARm9P4Es4NaRkiVbWlG1Uz2Tpqa5saymXXDKI6dvQK7crcJI-Xrz_bHrwgLCqfGPzi3yo3DNnditVrw4P7tIDE5F0OcforTUJ02vPnTLOgnIaPHlmMeSEqWgGsHng902xpGp23TpAveV0Atlh81Lr16iZv5KxxMDLkbWq2ZWcvF7rE29RD6sVy_mjDs6wszpL-rDA7SewIFAhpCFXGb8ZYppRwstOCaJKZiHBLZZH2g23NejmwbqfB4Vf",
            },
          ].map((prod, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] mb-6 relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${prod.img}')` }}
                ></div>
                {prod.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary/90 backdrop-blur-md text-on-secondary text-[10px] px-3 py-1 rounded-full font-label-caps">
                      {prod.badge}
                    </span>
                  </div>
                )}
              </div>
              <h4 className="font-headline-md text-2xl text-primary mb-2">
                {prod.title}
              </h4>
              <p className="text-on-surface-variant mb-4">{prod.desc}</p>
              <div className="h-[1px] w-full bg-outline-variant"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-surface-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-12 uppercase tracking-widest">
            Global Standard Certifications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">
                verified_user
              </span>
              <span className="font-bold text-xl">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">eco</span>
              <span className="font-bold text-xl">Organic Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">
                language
              </span>
              <span className="font-bold text-xl">OMRI Listed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">
                handshake
              </span>
              <span className="font-bold text-xl">Fair Trade</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
