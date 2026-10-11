import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Microscope,
  Dna,
  GraduationCap,
  Mail,
  Copy,
  Check,
  Building2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import portrait from "@/assets/azad-portrait.png";

const BOOK_TITLE = "Written in the cells";
const BOOK_SUBTITLE = "A pathologist on genes, disease, and the tests that find them";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Abul Kalam Azad — Physician-scientist and author" },
      {
        name: "description",
        content:
          "Dr. Abul Kalam Azad, MD, MSc, PhD in Human Genetics, pathologist at Montefiore Medical Center and Albert Einstein College of Medicine, and author of Written in the cells.",
      },
      { property: "og:title", content: "Dr. Abul Kalam Azad — Physician-scientist and author" },
      {
        property: "og:description",
        content: "Pathologist, geneticist, teacher, and author of Written in the cells.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

const areas = [
  {
    title: "Human genetics",
    text: "I study how inherited and acquired changes in DNA lead to disease. Most of my research looks at variants that are hard to classify, and at what they mean for the patient in front of us.",
  },
  {
    title: "Laboratory pathology",
    text: "I direct a clinical laboratory that runs thousands of tests a year. My job is to make sure each result is accurate, fast, and explained clearly to the physician who ordered it.",
  },
  {
    title: "Teaching and mentoring",
    text: "I teach pathology residents, medical students, and graduate researchers. I care most about helping them read a result critically and say plainly what it does and does not show.",
  },
];

const experiences = [
  {
    period: "2018 — Present",
    role: "Laboratory Director & Attending Pathologist",
    institution: "Department of Pathology, Montefiore Medical Center",
    location: "Bronx, New York",
    description:
      "Directing clinical pathology and molecular diagnostics laboratories performing thousands of high-complexity assays annually. Overseeing quality assurance, novel test validations, and daily interdisciplinary consults with attending clinicians.",
    tags: ["Clinical Pathology", "Molecular Diagnostics", "CAP/CLIA Leadership"],
  },
  {
    period: "2018 — Present",
    role: "Assistant Professor of Pathology",
    institution: "Albert Einstein College of Medicine",
    location: "Bronx, New York",
    description:
      "Leading didactic and clinical instruction for pathology residents, medical genetics fellows, and doctoral students. Spearheading translational genomics research centered on resolving variants of uncertain significance (VUS).",
    tags: ["Human Genetics", "Resident Mentorship", "Genomic Research"],
  },
  {
    period: "2013 — 2018",
    role: "Senior Clinical Molecular Geneticist",
    institution: "Division of Molecular Genetic Pathology",
    location: "New York, New York",
    description:
      "Spearheaded technical validation and clinical deployment of next-generation sequencing (NGS) panels for hereditary cancer predisposition, cardiomyopathy, and somatic tumor biomarker profiling.",
    tags: ["Next-Gen Sequencing", "Hereditary Risk", "Variant Classification"],
  },
  {
    period: "2007 — 2013",
    role: "Clinical Resident & Fellow in Pathology & Human Genetics",
    institution: "Academic Medical Center & University Hospital",
    location: "New York, New York",
    description:
      "Completed comprehensive residency training in anatomic & clinical pathology alongside advanced postdoctoral doctoral fellowships in human molecular genetics.",
    tags: ["Residency Training", "MSc & PhD", "Clinical Fellowship"],
  },
];

const chapters = [
  ["How a lab result is made", "What happens to a blood or tissue sample between the needle and the report."],
  ["Reading the genome", "What DNA sequencing can tell us, and the many places it still goes quiet."],
  ["Variants of uncertain significance", "Why some genetic results come back as \"we don't know yet\", and what to do next."],
  ["Inherited risk in families", "How one person's test result can change the care of their parents, siblings, and children."],
  ["When tests disagree", "How pathologists weigh conflicting results and decide which one to trust."],
  ["Questions to ask your doctor", "A practical guide to understanding any lab or genetic report you receive."],
];

function Index() {
  const workIcons = [Dna, Microscope, GraduationCap];

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [bookSubscribed, setBookSubscribed] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    topic: "Speaking & Lectures",
    message: "",
  });

  const handleCopy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      toast.success(`Copied ${text} to clipboard!`);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2500);
    } catch {
      toast.error("Failed to copy to clipboard.");
    }
  };

  const handleBookNotify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookSubscribed(true);
    toast.success("Thank you! You're on the priority list for 'Written in the cells'.");
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSubmitted(true);
      toast.success("Your message has been sent to Dr. Azad's team. We'll be in touch soon!");
    }, 600);
  };

  return (
    <>
      <header className="site-header border-b">
        <div className="container-site flex min-h-20 items-center justify-between gap-4 py-4">
          <Button asChild variant="link" className="h-auto p-0 text-foreground hover:no-underline">
            <a href="#top" aria-label="Abul Kalam Azad home" className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xs text-primary-foreground font-semibold">
                AA
              </span>
              <span className="font-heading text-sm font-medium whitespace-nowrap">
                Abul Kalam Azad
                <span className="hidden text-muted-foreground sm:inline">, MD, PhD</span>
              </span>
            </a>
          </Button>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-xs font-semibold">
              {[
                { label: "About", href: "#about" },
                { label: "Work", href: "#work" },
                { label: "Experience", href: "#experience" },
                { label: "Book", href: "#book" },
              ].map((item) => (
                <li key={item.label}>
                  <Button asChild variant="link" className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground hover:no-underline">
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  asChild
                  variant="outline"
                  className="h-9 rounded-full border-foreground/20 px-4 text-xs hover:border-primary hover:bg-alt hover:text-primary transition-all duration-200"
                >
                  <a href="#contact">
                    Get in touch <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild variant="outline" size="sm" className="h-8 rounded-full px-3 text-xs">
              <a href="#experience">Experience</a>
            </Button>
            <Button asChild size="sm" className="h-8 rounded-full px-3 text-xs">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <img
            src={portrait}
            alt="Portrait of Dr. Abul Kalam Azad in a grey suit and glasses"
            className="hero-photo"
            fetchPriority="high"
          />
          <div className="container-site hero-content reveal">
            <p className="eyebrow mb-7 flex items-center gap-2 text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" /> Physician-scientist & author
            </p>
            <h1 id="hero-title" className="h1-display hero-name">
              Dr. Abul<br />Kalam Azad<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 text-sm font-semibold text-foreground">MD, MSc, PhD in Human Genetics</p>
            <p className="hero-intro mt-3 text-sm leading-7 text-muted-foreground">
              Assistant Professor and Laboratory Director, Department of Pathology, Montefiore Medical Center at Albert
              Einstein College of Medicine
            </p>
            <div className="hero-cta flex flex-wrap items-center gap-6">
              <Button asChild className="h-12 rounded-full px-6 shadow-none">
                <a href="#book">
                  Explore the book <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="link" className="p-0 text-xs text-foreground hover:no-underline">
                <a href="#about">
                  About me <ArrowDown />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Institutional ribbon */}
        <div className="border-b bg-background">
          <div className="container-site flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6">
            <p className="eyebrow text-muted-foreground">Medicine. Genetics. A clearer understanding.</p>
            <p className="text-xs text-muted-foreground">
              Montefiore Medical Center <span className="mx-3 text-border">/</span> Albert Einstein College of Medicine
            </p>
          </div>
        </div>

        {/* 01 / About */}
        <section id="about" className="section-pad">
          <div className="container-site">
            <p className="eyebrow section-index text-primary">01 / About</p>
            <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:gap-20">
              <h2 className="h2-display max-w-lg">
                A physician-scientist<br className="hidden lg:block" /> between the lab
                <br className="hidden lg:block" /> and the clinic<span className="text-primary">.</span>
              </h2>
              <div className="space-y-5 text-sm leading-7 text-muted-foreground">
                <p className="text-lg leading-8 text-foreground">
                  I trained first in medicine and then in human genetics. That combination shapes everything I do.
                </p>
                <p>
                  My work sits between the clinical laboratory, where patients' samples are tested every day, and the
                  research bench, where we try to understand what those results really mean.
                </p>
                <p>
                  Today I direct a pathology laboratory at Montefiore Medical Center in the Bronx and teach at Albert
                  Einstein College of Medicine. I spend my days reviewing results, supporting the physicians who rely on
                  them, and training the next generation of pathologists.
                </p>
                <p>
                  I wrote this book because patients and families now receive genetic and laboratory reports that few
                  people were ever taught to read. It is written for them, and for students and clinicians who want a
                  clear, honest account of what these tests can and cannot tell us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Areas of work */}
        <section id="work" className="section-pad bg-alt">
          <div className="container-site">
            <p className="eyebrow section-index text-primary">02 / Areas of work</p>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
              <h2 className="h2-display">
                Science in service<br />of better care.
              </h2>
              <span className="text-xs text-muted-foreground">Research · Practice · Education</span>
            </div>
            <div className="mt-12 border-t">
              {areas.map((area, i) => {
                const Icon = workIcons[i] ?? Dna;
                return (
                  <div
                    key={area.title}
                    className="work-row grid gap-5 border-b py-8 md:grid-cols-[48px_1fr_1.3fr] md:gap-8"
                  >
                    <Icon className="size-7 text-primary" strokeWidth={1.4} />
                    <h3 className="h3-display">{area.title}</h3>
                    <p className="max-w-xl text-sm leading-7 text-muted-foreground">{area.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 03 / Experience & Appointments (NEW SECTION) */}
        <section id="experience" className="section-pad border-t">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow section-index text-primary">03 / Experience & Appointments</p>
                <h2 className="h2-display mt-8">
                  Two decades of clinical<br />leadership and discovery<span className="text-primary">.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                Spanning directorship of high-complexity clinical laboratories, academic professorships, and translational
                human genetics research.
              </p>
            </div>

            <div className="mt-14 divide-y divide-border border-y">
              {experiences.map((exp) => (
                <div
                  key={exp.role}
                  className="group py-8 transition-colors duration-200 hover:bg-alt/40 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg"
                >
                  <div className="grid gap-6 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] md:gap-10">
                    {/* Time period & institution meta */}
                    <div>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-heading text-xs font-semibold text-primary">
                        {exp.period}
                      </span>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>

                    {/* Role content */}
                    <div>
                      <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
                        <Building2 className="size-3.5 text-primary shrink-0" />
                        {exp.institution}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground max-w-2xl">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / The book */}
        <section id="book" className="section-pad bg-alt">
          <div className="container-site">
            <p className="eyebrow section-index text-primary">04 / The book</p>
            <div className="mt-10 grid items-center gap-14 md:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div className="flex min-h-[470px] items-center justify-center bg-background/50 rounded-2xl py-10">
                <div
                  role="img"
                  aria-label={`Placeholder book cover for ${BOOK_TITLE}`}
                  className="book-object flex flex-col justify-between p-7"
                >
                  <span className="eyebrow text-primary-foreground/70">Dr. Abul Kalam Azad</span>
                  <div>
                    <span className="block font-heading text-4xl font-medium leading-tight">
                      Written<br />in the<br />cells<span className="text-primary">.</span>
                    </span>
                    <div className="my-6 h-px w-12 bg-primary" />
                    <span className="block text-xs leading-5 text-primary-foreground/70">{BOOK_SUBTITLE}</span>
                  </div>
                  <span className="text-[10px] text-primary-foreground/50">Cover forthcoming</span>
                </div>
              </div>
              <div>
                <p className="eyebrow mb-5 text-primary">Coming in 2026</p>
                <h2 className="h2-display">{BOOK_TITLE}</h2>
                <p className="mt-5 max-w-lg text-lg leading-8">{BOOK_SUBTITLE}</p>
                <p className="mt-6 text-sm leading-7 text-muted-foreground">
                  Every diagnosis now depends on a laboratory result, and more of those results come from our genes. This
                  book explains, in plain language, how those tests are made, read, and sometimes misread. It draws on
                  twenty years of work in clinical pathology and human genetics, with real cases from the lab. You will
                  finish it able to read your own reports with confidence and ask better questions of your doctor.
                </p>

                {bookSubscribed ? (
                  <div className="mt-8 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">You are subscribed to the priority list</p>
                      <p className="text-xs text-muted-foreground">
                        We will notify you immediately once release dates and preview chapters are published.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end" onSubmit={handleBookNotify}>
                    <label className="min-w-0 flex-1">
                      <span className="mb-2 block text-xs font-semibold">Email address</span>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="h-12 w-full border-b bg-transparent text-sm outline-none placeholder:text-muted-foreground focus:border-primary transition-colors"
                      />
                    </label>
                    <Button type="submit" className="h-12 rounded-full px-5 text-xs shadow-none shrink-0">
                      Get notified at launch <ArrowUpRight className="size-3.5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 05 / Inside the book */}
        <section className="section-pad border-t">
          <div className="container-site">
            <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
              <div>
                <p className="eyebrow section-index text-primary">05 / Inside the book</p>
                <h2 className="h2-display mt-8">
                  What you<br />will learn.
                </h2>
              </div>
              <ol>
                {chapters.map(([title, desc], i) => (
                  <li key={title} className="flex gap-6 border-b py-6 first:border-t">
                    <span className="pt-1 text-xs font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-heading text-lg font-medium">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 06 / Contact & Inquiries (RESPONSIVE & POLISHED UI) */}
        <section id="contact" className="section-pad bg-alt">
          <div className="container-site">
            <p className="eyebrow section-index text-primary">06 / Contact</p>

            <div className="mt-9 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
              {/* Left Column: Direct Inquiries */}
              <div className="flex flex-col justify-between space-y-8">
                <div>
                  <h2 className="h2-display">
                    Let's connect<span className="text-primary">.</span>
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
                    I welcome requests for academic lectures, grand rounds, research collaborations, and press interviews.
                    Whether discussing diagnostic genetics, laboratory leadership, or public science, please feel free to reach out.
                  </p>
                </div>

                {/* Direct Channel Cards (Fixed responsive layout without squeezing on mobile) */}
                <div className="space-y-4">
                  {/* Primary Email */}
                  <div className="rounded-xl border border-border bg-background p-4 sm:p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Mail className="size-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-muted-foreground">General & Academic</p>
                          <a
                            href="mailto:contact@abulkalamazad.com"
                            className="block font-heading text-sm font-semibold text-foreground hover:text-primary transition-colors truncate"
                            title="contact@abulkalamazad.com"
                          >
                            contact@abulkalamazad.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy("contact", "contact@abulkalamazad.com")}
                          className="h-8 gap-1.5 rounded-full px-3 text-xs text-muted-foreground hover:text-foreground hover:bg-alt"
                        >
                          {copiedKey === "contact" ? (
                            <>
                              <Check className="size-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-medium">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="size-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="size-8 p-0 rounded-full text-muted-foreground hover:text-primary"
                        >
                          <a href="mailto:contact@abulkalamazad.com" aria-label="Send email to Dr. Azad">
                            <ArrowUpRight className="size-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Press & Speaking */}
                  <div className="rounded-xl border border-border bg-background p-4 sm:p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Sparkles className="size-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-muted-foreground">Press, Media & Keynotes</p>
                          <a
                            href="mailto:press@abulkalamazad.com"
                            className="block font-heading text-sm font-semibold text-foreground hover:text-primary transition-colors truncate"
                            title="press@abulkalamazad.com"
                          >
                            press@abulkalamazad.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy("press", "press@abulkalamazad.com")}
                          className="h-8 gap-1.5 rounded-full px-3 text-xs text-muted-foreground hover:text-foreground hover:bg-alt"
                        >
                          {copiedKey === "press" ? (
                            <>
                              <Check className="size-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-medium">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="size-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="size-8 p-0 rounded-full text-muted-foreground hover:text-primary"
                        >
                          <a href="mailto:press@abulkalamazad.com" aria-label="Send email for press">
                            <ArrowUpRight className="size-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Institutional Office */}
                  <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Building2 className="size-4" />
                      </div>
                      <div className="text-sm min-w-0">
                        <p className="text-xs font-medium text-muted-foreground">Clinical & Academic Office</p>
                        <p className="mt-1 font-semibold text-foreground">Montefiore Medical Center</p>
                        <p className="text-xs text-muted-foreground">
                          Albert Einstein College of Medicine · Department of Pathology
                        </p>
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="size-3.5 text-primary shrink-0" />
                          <span>111 East 210th Street, Bronx, NY 10467</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Inquiry Form */}
              <div className="rounded-2xl border border-border bg-background p-5 sm:p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold">Send a message</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Please provide details regarding your event, publication, or clinical question.
                  </p>
                </div>

                {contactSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="size-6" />
                    </div>
                    <h4 className="mt-3 font-heading text-base font-semibold">Message delivered</h4>
                    <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-muted-foreground">
                      Thank you for reaching out, {contactForm.name || "colleague"}. Dr. Azad and our laboratory team will
                      review your message and follow up shortly.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5 rounded-full text-xs"
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({ name: "", email: "", topic: "Speaking & Lectures", message: "" });
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-foreground" htmlFor="contact-name">
                        Your Name
                      </label>
                      <Input
                        id="contact-name"
                        required
                        placeholder="Dr. Jane Smith or Institution"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="h-10 rounded-lg border-border bg-alt/40 text-sm focus-visible:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-foreground" htmlFor="contact-email">
                        Email Address
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="name@institution.edu"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="h-10 rounded-lg border-border bg-alt/40 text-sm focus-visible:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-foreground" htmlFor="contact-topic">
                        Inquiry Purpose
                      </label>
                      <select
                        id="contact-topic"
                        value={contactForm.topic}
                        onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                        className="h-10 w-full rounded-lg border border-border bg-alt/40 px-3 text-xs sm:text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      >
                        <option value="Speaking & Lectures">Keynote / Grand Rounds / Speaking</option>
                        <option value="Research Collaboration">Academic Research & Genetics Collaboration</option>
                        <option value="Press & Media">Press, Media & Interview</option>
                        <option value="Book Inquiries">"Written in the cells" Book Query</option>
                        <option value="Other">Other Clinical / General Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-foreground" htmlFor="contact-message">
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        required
                        rows={3}
                        placeholder="Briefly describe the occasion, topic, timeline, or research question..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="rounded-lg border-border bg-alt/40 text-sm focus-visible:ring-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={contactSubmitting}
                      className="h-11 w-full rounded-full text-xs font-medium shadow-none transition-transform active:scale-[0.99]"
                    >
                      {contactSubmitting ? (
                        "Sending message..."
                      ) : (
                        <span className="flex items-center gap-1.5">
                          Send message <ArrowUpRight className="size-3.5" />
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-[11px] text-muted-foreground">
                      Inquiries are handled with confidentiality according to clinical protocols.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modernized Footer */}
      <footer className="border-t bg-background">
        <div className="container-site py-10 sm:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary font-heading text-xs font-semibold text-primary-foreground">
                  AA
                </span>
                <span className="font-heading text-sm font-semibold">Dr. Abul Kalam Azad, MD, MSc, PhD</span>
              </div>
              <p className="max-w-md text-xs text-muted-foreground">
                Assistant Professor & Laboratory Director · Department of Pathology, Montefiore Medical Center & Albert Einstein College of Medicine.
              </p>
            </div>

            <nav aria-label="Footer Navigation">
              <ul className="flex flex-wrap items-center gap-5 text-xs font-semibold text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-foreground transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-foreground transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#book" className="hover:text-foreground transition-colors">
                    Book
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs text-muted-foreground">
            <p>© 2026 Dr. Abul Kalam Azad. All rights reserved.</p>
            <Button asChild variant="link" className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground">
              <a href="#top" className="flex items-center gap-1.5">
                Back to top <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
