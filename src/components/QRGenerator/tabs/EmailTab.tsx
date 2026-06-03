"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import { buildEmailString } from "@/lib/qr-utils";

const emailSchema = z.object({
  email: z.string().email("Valid email is required"),
  subject: z.string().optional(),
  body: z.string().optional(),
});

type EmailValues = z.infer<typeof emailSchema>;

export default function EmailTab({ onUpdate }: { onUpdate: (val: string) => void }) {
  const { register, watch, formState: { errors } } = useForm<EmailValues>({
    resolver: zodResolver(emailSchema),
  });

  const values = watch();

  useEffect(() => {
    if (values.email) {
      onUpdate(buildEmailString(values));
    }
  }, [values, onUpdate]);

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Recipient Email</label>
        <input {...register("email")} placeholder="hello@example.com" className="input-field" />
        {errors.email && <p className="text-cta text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="label">Subject (Optional)</label>
        <input {...register("subject")} placeholder="Feedback" className="input-field" />
      </div>

      <div>
        <label className="label">Message (Optional)</label>
        <textarea {...register("body")} placeholder="Enter your pre-filled message..." className="input-field min-h-[100px]" />
      </div>
    </div>
  );
}
