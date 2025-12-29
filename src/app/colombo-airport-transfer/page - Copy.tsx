import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

const page = getPageById("hub_airport");

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ColomboAirportTransferPage() {
  return <SpecPage page={page} />;
}
