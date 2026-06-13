import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { breakoutNotes } from "@/data/resources";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const note = breakoutNotes.find((n) => n.slug === params.slug);
    if (!note) throw notFound();
    return { note };
  },
  head: ({ loaderData }) => {
    const note = loaderData?.note;
    const title = note ? `${note.title} — Way Conference` : "Notes — Way Conference";
    const description = note?.excerpt ?? "Breakout session notes from Way Conference.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="bg-dark text-cream min-h-screen pt-32 px-5">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl tracking-wider">Notes not found.</h1>
        <Link to="/resources" className="inline-block mt-6 text-gold underline">
          Back to resources
        </Link>
      </div>
    </div>
  ),
  component: NoteDetail,
});

function NoteDetail() {
  const { note } = Route.useLoaderData();

  return (
    <div className="bg-cream text-dark min-h-screen">
      <article className="pt-32 md:pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-dark/60 hover:text-dark"
          >
            <ArrowLeft size={14} /> All resources
          </Link>

          <div className="eyebrow !text-dark/50 mt-8">{note.day}</div>
          <h1 className="font-display text-5xl md:text-7xl tracking-wider mt-4">
            {note.title}
          </h1>
          <div className="mt-4 text-dark/60">{note.speaker}</div>

          {note.pdfUrl && (
            <a
              href={note.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-dark text-cream text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px] hover:bg-dark-warm"
            >
              <Download size={14} /> Download PDF
            </a>
          )}

          <div className="mt-12 space-y-5 text-dark/80 leading-relaxed [&_h2]:font-display [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:tracking-wider [&_h2]:text-dark [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:tracking-wider [&_h3]:text-dark [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-dark [&_strong]:font-semibold [&_a]:text-gold [&_a]:underline">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {note.notesMarkdown}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
}
