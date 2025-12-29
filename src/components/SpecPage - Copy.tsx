import type { PageSpec } from "@/site/spec";
import { HelpfulLinks } from "@/components/HelpfulLinks";
import { BookingStickyBar } from "@/components/BookingStickyBar"; // New: For conversion
import { Breadcrumbs } from "@/components/Breadcrumbs"; // New: For SEO/Navigation
import { ShareButton } from "@/components/ShareButton"; // New: For virality

export function SpecPage({
  page,
  children,
}: {
  page: PageSpec;
  children?: React.ReactNode;
}) {
  return (
    <article className="relative bg-background">
      {/* 1. IMMERSIVE HERO SECTION: Full width to grab attention */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Dynamic Background Image - Should come from page metadata */}
        <img 
          src={page.heroImage || "/images/default-sri-lanka.jpg"} 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[10s] hover:scale-105"
          alt={page.title}
        />
        {/* Cinematic Overlay: Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
        
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-screen-xl px-6 pb-16 lg:px-10">
          <Breadcrumbs className="mb-4 text-white/80" />
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white drop-shadow-md sm:text-7xl">
            {page.title}
          </h1>
          <div className="mt-6 flex items-center gap-4">
             {/* Dynamic Badge: e.g. "Best of 2026" or "Top Rated" */}
             <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
               ⭐ 4.9/5 Rating
             </span>
             <ShareButton title={page.title} />
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID: 2-Column layout for desktop (Content + Sidebar) */}
      <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Main Body (Left) */}
          <main className="lg:col-span-8 py-12">
            <p className="mb-10 text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6">
              {page.description}
            </p>
            
            <section className="prose prose-lg dark:prose-invert max-w-none space-y-16">
              {children}
            </section>
          </main>

          {/* Contextual Sidebar (Right) - Sticky to keep links in view */}
          <aside className="hidden lg:block lg:col-span-4 pt-12">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="mb-4 font-bold">Quick Assistance</h3>
                <HelpfulLinks page={page} />
              </div>
              
              {/* Trust/Expert Card */}
              <div className="rounded-2xl bg-muted p-6">
                <p className="text-sm font-medium">Chat with a Specialist</p>
                <button className="mt-3 w-full rounded-lg bg-foreground py-3 text-background font-bold transition-transform active:scale-95">
                  Book 15-min Video Call
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 3. CONVERSION STICKY BAR: Mobile and Desktop Floating Bar */}
      <BookingStickyBar 
        price={page.startPrice} 
        label="Private Driver: Sri Lanka" 
      />

      {/* 4. FOOTER CONTEXT */}
      <footer className="mt-20 border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
           <HelpfulLinks page={page} />
        </div>
      </footer>
    </article>
  );
}