import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/site/config";
import { buildMetadata, buildLocalBusinessSchema } from "@/lib/seo";

// Aceternity & Icon Imports
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  IconPlaneDeparture, 
  IconMapPin, 
  IconRoute, 
  IconHistory,
  IconPaw
} from "@tabler/icons-react";

export const metadata = {
  ...buildMetadata({
    title: "Sri Lanka Airport Transfer | Reliable Private Chauffeur Services",
    description:
      "#1 Private Driver in Sri Lanka: Safe, stress-free travel with a licensed local guide. Fixed prices, no hidden costs & expert advice. Book your tour today!",
    path: "/",
  }),
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    title: "Private Driver Sri Lanka | Safe Airport Transfers & Local Guides",
    description: "#1 Private Driver in Sri Lanka: Safe, stress-free travel with a licensed local guide. Fixed prices, no hidden costs & expert advice. Book your tour today!",
    url: "/",
    siteName: siteConfig.brand,
    images: [
      {
        url: "/images/sri-lanka-best_private-airport-transfer-driver.webp",
        width: 1200,
        height: 630,
        alt: "Private Driver Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <main className="w-full bg-white">
      {localBusinessSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-end md:justify-center items-end overflow-hidden bg-slate-950">
        <div className="absolute inset-0 top-0 left-0 z-0">
          <Image
            src="/images/sri-lanka-best_private-airport-transfer-driver.webp"
            alt="Professional private driver in Sri Lanka"
            fill
            priority
            className="object-cover object-left md:object-left"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 md:hidden" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/80 to-transparent z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-0 h-full flex flex-col justify-end md:justify-center items-center md:items-end">
          <div className="w-[98%] md:max-w-xl bg-slate-950/80 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl md:mr-4">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              <Badge className="bg-amber-500 text-slate-950 border-none font-bold uppercase tracking-widest text-[10px] px-2 py-1">
                Award-Winning Safety
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/5 font-bold uppercase tracking-widest text-[10px] px-2 py-1">
                Local Guide Included
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">
              Reliable Sri Lanka Airport Transfers
            </h1>
            <p className="text-sm md:text-lg text-slate-200 mb-8 font-medium">
              Don&apos;t just hire a car; gain a local partner. We know the ins and outs to keep you safe.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full h-14 bg-amber-500 text-slate-950 font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all">
                <Link href="/contact/">{siteConfig.contact.whatsappLabel}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full h-14 border-2 border-slate-900/10 text-slate-900 font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                <Link href="/prices/">View Fixed Prices</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= UPDATED BENTO GRID SECTION ================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">Featured Destinations</h2>
              <p className="text-lg text-slate-500 mt-2">Premium private transfers to Sri Lanka&apos;s most iconic landmarks.</p>
            </div>
            <Link href="/prices/" className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-widest border-b-2 border-amber-600 pb-1 hover:text-slate-900 transition-colors">
              View All Prices →
            </Link>
          </div>

          <BentoGrid>
            {gridItems.map((item, i) => (
              <Link href={item.href} key={i} className={i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""}>
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className="h-full cursor-pointer hover:border-amber-500 transition-all border-slate-200"
                />
              </Link>
            ))}
          </BentoGrid>

          {/* INTERNAL LINKING BLOCK FOR SEO */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Popular Transfer Routes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {allRoutes.map((route) => (
                <Link 
                  key={route.href} 
                  href={route.href} 
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-amber-600 p-3 bg-slate-50 border border-slate-100 rounded-xl transition-all"
                >
                  {route.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ORIGINAL TRAVEL TIPS & FAQs SECTION ================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 text-center mb-10 md:mb-16">
            Your Questions Answered: Easy Sri Lanka Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card className="shadow-lg border-slate-100 bg-white">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Getting Connected: Your Sri Lanka SIM Card</h3>
                <p className="text-slate-700 leading-relaxed">
                  For your 3-week <strong>Sri Lanka tour</strong>, staying connected is easy. You can pick up a local SIM card
                  right at the airport&apos;s arrival lounge. Most travelers choose <Link href="https://www.dialog.lk" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Dialog</Link> or <Link href="https://www.mobitel.lk" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Mobitel</Link> – they offer great coverage
                  across the island, perfect for keeping in touch and navigating your <strong>Sri Lanka travel</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-slate-100 bg-white">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Booking Excursions: Plan Ahead or Decide Later?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Both options work! But for a truly <strong>hassle-free Sri Lanka tour</strong>, booking your excursions and activities
                  before you arrive often saves time and lets you choose from the best options. This also helps you
                  avoid last-minute rushes or price surprises. Our <strong>private driver Sri Lanka</strong> team can even recommend
                  top experiences for free, helping you steer clear of scams.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-slate-100 bg-white">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Extending Your Stay: Sri Lanka Visa Extension Online</h3>
                <p className="text-slate-700 leading-relaxed">
                  Good news! Extending your tourist visa for <strong>Sri Lanka travel</strong> can be done completely online.
                  Simply visit the official immigration e-services website, register, and follow the steps to apply.
                  You&apos;ll need digital copies of your passport and a photo. Once approved, pay online, and your
                  extension arrives via email. Easy peasy!
                </p>
                <Link href="https://immigration.gov.lk/index_e.php" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline text-sm font-bold">
                  Visit Immigration e-services →
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-slate-100 bg-white">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Getting Around: Why a Private Driver is Best</h3>
                <p className="text-slate-700 leading-relaxed">
                  While public transport is super affordable, for peace of mind and comfort on your <strong>Sri Lanka tour</strong>,
                  we highly recommend a <strong>private driver with a vehicle</strong>. It&apos;s easy, surprisingly affordable,
                  and incredibly safe. Imagine exploring the island at your own pace, stopping whenever you like,
                  and having a local expert guide the way. Our team ensures a relaxed and memorable <strong>Sri Lanka travel</strong> experience.
                </p>
                <Link href="/private-driver-sri-lanka/" className="text-amber-600 hover:underline text-sm font-bold">
                  Learn About Our Private Driver Service →
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-slate-100 bg-white">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Local Money & ATMs: Paying Your Way in Sri Lanka</h3>
                <p className="text-slate-700 leading-relaxed">
                  In <strong>Sri Lanka</strong>, you&apos;ll mostly use the local currency, LKR (Sri Lankan Rupees). While some hotels
                  might take US Dollars, shops and restaurants prefer LKR. Getting local cash is simple:
                  you can exchange money at the airport or banks, and ATMs are easy to find in cities and
                  tourist spots. They&apos;re reliable and accept Visa/Mastercard. Enjoy your <strong>Sri Lanka tour</strong> without currency worries!
                </p>
                <Link href="https://www.cbsl.gov.lk/en/rates-and-indicators/exchange-rates" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline text-sm font-bold">
                  View Official Exchange Rates →
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-slate-100 bg-white">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Your Driver, Your Trip: How it Works in Sri Lanka</h3>
                <p className="text-slate-700 leading-relaxed">
                  Unlike many places, <strong>renting a car in Sri Lanka</strong> to drive yourself isn&apos;t usually recommended due to different road rules and traffic.
                  Instead, most travelers choose a <strong>private driver Sri Lanka</strong> expert. Your driver often stays with you for your whole <strong>Sri Lanka tour</strong>,
                  helping you plan each day and showing you the best spots. Good news: their accommodation is usually covered by the service!
                </p>
                <p className="text-slate-700 leading-relaxed">
                  While <strong className="text-slate-900">tuk-tuk rides are fun</strong> for short trips in towns, they are not safe or comfortable for long distances.
                  A private driver ensures safe and smooth travel across the island, giving you peace of mind to enjoy your adventure!
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </main>
  );
}

// ================= DATA & BENTO HELPERS =================

const BentoImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-full min-h-[10rem] rounded-xl overflow-hidden bg-slate-200">
    <Image 
      src={src} 
      alt={alt} 
      fill 
      className="object-cover group-hover/bento:scale-110 transition-transform duration-500" 
    />
    <div className="absolute inset-0 bg-black/10 group-hover/bento:bg-black/0 transition-colors" />
  </div>
);

const gridItems = [
  {
    title: "Colombo Airport Transfer",
    description: "Experience the best airport  transfer service.",
    header: <BentoImage src="/images/Vehicle fleet Sri Lanka Private Driver.webp" alt="Colombo Airport Transfer Fleet" />,
    icon: <IconPlaneDeparture className="h-4 w-4 text-amber-500" />,
    href: "/airport-to-colombo-taxi/",
  },
  {
    title: "Galle Fort",
    description: "UNESCO history meets stunning southern coastline.",
    header: <BentoImage src="/images/Galle_Fort_sri lanka.webp" alt="Galle Fort Sri Lanka" />,
    icon: <IconMapPin className="h-4 w-4 text-blue-500" />,
    href: "/airport-to-galle-taxi/",
  },
  {
    title: "Kandy Temple",
    description: "Sacred heritage at the Temple of the Tooth Relic.",
    header: <BentoImage src="/images/temple of tooth relic Kandy Sri Lanka.webp" alt="Temple of Tooth Kandy" />,
    icon: <IconHistory className="h-4 w-4 text-emerald-500" />,
    href: "/airport-to-kandy-taxi/",
  },
  {
    title: "Ella Mountains",
    description: "Breathtaking train views and misty mountain peaks.",
    header: <BentoImage src="/images/Train ride through beautiful mountains in sri lanka.webp" alt="Scenic Kandy to Ella Train Journey Sri Lanka" />,
    icon: <IconRoute className="h-4 w-4 text-indigo-500" />,
    href: "/airport-to-ella-taxi/",
  },
  {
    title: "Mirissa Beaches & Surfing", 
    description: "Private transfers to Sri Lanka's best surf breaks and whale watching hubs.",
    header: (
      <BentoImage 
        src="/images/Sri lanka beach a heaven on earth.webp" 
        alt="Surfing in Mirissa Sri Lanka - Private transfer to south coast beaches" 
      />
    ),
    icon: <IconRoute className="h-4 w-4 text-indigo-500" />, 
    href: "/airport-transfer/colombo-to-mirissa",
  },
  {
    title: "Yala Wildlife",
    description: "Epic leopard safaris and wild nature encounters.",
    header: <BentoImage src="/images/Sri lankan wild life -tiger in Yala.webp" alt="Leopard Safari in Yala National Park Sri Lanka" />,
    icon: <IconPaw className="h-4 w-4 text-orange-600" />,
    href: "/tours/wildlife-safari-yala-and-udawalawe/",
  }
];

const allRoutes = [
  { label: "Airport → Colombo", href: "/airport-to-colombo-taxi/" },
  { label: "Airport → Negombo", href: "/airport-to-negombo-taxi/" },
  { label: "Airport → Kandy", href: "/airport-to-kandy-taxi/" },
  { label: "Airport → Galle", href: "/airport-to-galle-taxi/" },
  { label: "Airport → Ella", href: "/airport-to-ella-taxi/" },
  { label: "Airport → Sigiriya", href: "/airport-to-sigiriya-taxi/" },
];