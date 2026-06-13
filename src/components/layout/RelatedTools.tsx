import { ArrowRight } from "lucide-react";

export default function RelatedTools() {
  const tools = [
    {
      name: "PDF Utility",
      description: "Merge, split, and compress PDFs instantly.",
      url: "https://pdfutility.app",
    },
    {
      name: "Resume Forge",
      description: "Build professional resumes in minutes.",
      url: "https://resumeforge.alfo.online",
    },
    {
      name: "Palette Flow",
      description: "Generate and export beautiful color palettes.",
      url: "https://paletteflow.alfo.online",
    },
    {
      name: "Compress Pro",
      description: "Optimize images without losing quality.",
      url: "https://compresspro.alfo.online",
    },
  ];

  return (
    <section className="py-16 bg-surface mt-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Related Tools</h2>
            <p className="text-muted">Explore more free utilities from the alfo.online ecosystem.</p>
          </div>
          <a href="https://alfo.online/tools" target="_blank" rel="noopener noreferrer" className="text-cta font-bold flex items-center gap-2 hover:underline">
            View all tools <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex flex-col hover:bg-bg hover:border-cta transition-colors group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-cta transition-colors">{tool.name}</h3>
              <p className="text-muted text-sm mb-4 flex-grow">{tool.description}</p>
              <div className="flex items-center text-sm font-bold text-cta gap-1">
                Open Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
