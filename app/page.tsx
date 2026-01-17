import BlurFade from "@/components/ui/BlurFade";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumeCard } from "@/components/ExperienceItem";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 py-12 sm:py-24 px-6 md:px-0 max-w-2xl mx-auto overflow-hidden">

      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm Diptanu 
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={8}>
                <p className="max-w-[600px] md:text-xl text-muted-foreground">
                  I love building things. I am a software engineer passionate about AI, ML, and extensive web development.
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
              <div className="rounded-full border overflow-hidden w-28 h-28 bg-gray-100 dark:bg-zinc-800">
                {/* Placeholder for Profile Image */}
                <img src="http://media.licdn.com/dms/image/v2/D5603AQESt-giQjdFLw/profile-displayphoto-scale_400_400/B56ZnXTiFOI4Ag-/0/1760253847742?e=1770249600&v=beta&t=eti-5kzvfUhqkICyspFaEs0VPMUY0kG1yJ-O8pLbews" alt="Profile" className="object-cover w-full h-full" />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-4">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            I am currently a student exploring the depths of artificial intelligence and machine learning.
            I enjoy creating efficient and scalable web applications. My journey involves rigorous hacking
            in hackathons and building open-source projects.
          </p>
        </BlurFade>
      </section>

      {/* Work Experience Section */}
      <section id="experience">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {[
            {
              title: "Software Engineer Intern",
              company: "Tech Corp",
              dates: "2024 - Present",
              location: "Remote",
              description: "Implemented new features for the user dashboard and optimized database queries.",
              image: "",
            },
            {
              title: "Frontend Developer",
              company: "Startup Inc",
              dates: "2023 - 2024",
              location: "San Francisco, CA",
              description: "Built the landing page using Next.js and Tailwind CSS, increasing conversion by 20%.",
              image: "",
            }
          ].map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                title={work.title}
                description={work.description}
                dates={work.dates}
                location={work.location}
                image={work.image}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {[
            {
              school: "University of Technology",
              degree: "B.Tech in Computer Science",
              dates: "2021 - 2025",
              location: "City, Country",
              description: "Focused on Algorithms, Data Structures, and AI.",
              image: "",
            },
          ].map((edu, id) => (
            <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={edu.school}
                title={edu.school}
                description={edu.degree}
                dates={edu.dates}
                location={edu.location}
                image={edu.image}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {[
              "Python", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
              "Node.js", "PostgreSQL", "Docker", "Git", "Framer Motion", "Java"
            ].map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {[
              {
                title: "Portfolio Website",
                href: "https://example.com",
                dates: "Jan 2024 - Feb 2024",
                active: true,
                description:
                  "A minimalist portfolio website built with Next.js and Tailwind CSS.",
                technologies: [
                  "Next.js",
                  "Typescript",
                  "PostgreSQL",
                  "TailwindCSS",
                  "Framer Motion",
                ],
                links: [
                  {
                    type: "Website",
                    href: "https://example.com",
                    icon: <Globe className="size-3" />,
                  },
                  {
                    type: "Source",
                    href: "https://github.com/example/portfolio",
                    icon: <Github className="size-3" />,
                  },
                ],
                image: "",
                video: "",
              },
              {
                title: "AI Chatbot",
                href: "https://example.com",
                dates: "Nov 2023 - Dec 2023",
                active: true,
                description:
                  "An AI-powered chatbot application utilizing the latest LLMs for natural conversation.",
                technologies: [
                  "Next.js",
                  "Typescript",
                  "OpenAI API",
                  "TailwindCSS",
                ],
                links: [
                  {
                    type: "Website",
                    href: "https://example.com",
                    icon: <Globe className="size-3" />,
                  },
                ],
                image: "",
                video: "",
              }
            ].map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Hackathons</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {[
                {
                  title: "HackNITR 4.0",
                  dates: "Jan 2023",
                  location: "Online",
                  description: "Developed a web application for tracking carbon footprint.",
                },
                {
                  title: "Smart India Hackathon",
                  dates: "Aug 2023",
                  location: "New Delhi",
                  description: "Built a solution for optimizing traffic flow using AI.",
                }
              ].map((project, id) => (
                <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                  <li className="relative ml-10 py-4">
                    <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white dark:bg-black dark:border-white/10">
                        <div className="text-xs font-bold">{project.title[0]}</div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-start gap-1">
                      {project.dates && (
                        <time className="text-xs text-muted-foreground">{project.dates}</time>
                      )}
                      <h2 className="font-semibold leading-none">{project.title}</h2>
                      {project.location && (
                        <p className="text-sm text-muted-foreground">{project.location}</p>
                      )}
                      {project.description && (
                        <span className="prose dark:prose-invert text-sm text-muted-foreground">
                          {project.description}
                        </span>
                      )}
                    </div>
                  </li>
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href="https://twitter.com/placeholder"
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I'll respond whenever I can. I will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </main>
  );
}
