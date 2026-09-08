"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { profile } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="06" title="Get in touch" />
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <p className="text-lg text-muted">
              Have a role, a project, or a question? Send a message — it lands
              straight in my inbox.
            </p>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="text-text hover:text-accent">
                  {profile.email}
                </a>
              </li>
              <li className="text-muted">{profile.phone}</li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener" className="text-text hover:text-accent">
                  {profile.githubHandle}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="text-text hover:text-accent">
                  {profile.linkedinHandle}
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Name"
                  className={field}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-err" : undefined}
                  {...register("name")}
                />
                {errors.name && (
                  <p id="name-err" className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={field}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-err" : undefined}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-err" className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                placeholder="Subject (optional)"
                className={field}
                {...register("subject")}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Message"
                className={field}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "msg-err" : undefined}
                {...register("message")}
              />
              {errors.message && (
                <p id="msg-err" className="mt-1 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* honeypot */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
              {...register("company")}
            />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              animate={status === "error" ? { x: [0, -8, 8, -6, 6, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending"
                ? "Sending…"
                : status === "success"
                  ? "Sent ✓"
                  : status === "error"
                    ? "Try again"
                    : "Send message"}
            </motion.button>

            <p aria-live="polite" className="text-xs text-muted">
              {status === "success" && "Thanks — I'll get back to you soon."}
              {status === "error" &&
                "Something went wrong. Email me directly if it persists."}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
