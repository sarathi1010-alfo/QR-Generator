"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import { buildVCardString } from "@/lib/qr-utils";

const vcardSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  organization: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  url: z.string().url().optional().or(z.literal("")),
});

type VCardValues = z.infer<typeof vcardSchema>;

export default function VCardTab({ onUpdate }: { onUpdate: (val: string) => void }) {
  const { register, watch, formState: { errors } } = useForm<VCardValues>({
    resolver: zodResolver(vcardSchema),
  });

  const values = watch();

  useEffect(() => {
    if (values.firstName && values.lastName) {
      onUpdate(buildVCardString(values as any));
    }
  }, [values, onUpdate]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">First Name</label>
          <input {...register("firstName")} placeholder="John" className="input-field" />
          {errors.firstName && <p className="text-cta text-xs mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="label">Last Name</label>
          <input {...register("lastName")} placeholder="Doe" className="input-field" />
          {errors.lastName && <p className="text-cta text-xs mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className="label">Organization</label>
        <input {...register("organization")} placeholder="Company Inc." className="input-field" />
      </div>

      <div>
        <label className="label">Phone Number</label>
        <input {...register("phone")} placeholder="+1 234 567 890" className="input-field" />
      </div>

      <div>
        <label className="label">Email</label>
        <input {...register("email")} placeholder="john@example.com" className="input-field" />
        {errors.email && <p className="text-cta text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="label">Website</label>
        <input {...register("url")} placeholder="https://example.com" className="input-field" />
        {errors.url && <p className="text-cta text-xs mt-1">{errors.url.message}</p>}
      </div>
    </div>
  );
}
