"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import { buildWifiString } from "@/lib/qr-utils";

const wifiSchema = z.object({
  ssid: z.string().min(1, "SSID is required"),
  password: z.string().optional(),
  security: z.enum(["WPA", "WEP", "nopass"]),
  hidden: z.boolean(),
});

type WifiValues = z.infer<typeof wifiSchema>;

export default function WiFiTab({ onUpdate }: { onUpdate: (val: string) => void }) {
  const { register, watch, formState: { errors } } = useForm<WifiValues>({
    resolver: zodResolver(wifiSchema),
    defaultValues: {
      security: "WPA",
      hidden: false,
    }
  });

  const values = watch();

  useEffect(() => {
    if (values.ssid) {
      onUpdate(buildWifiString({
        ssid: values.ssid,
        password: values.password,
        security: values.security,
        hidden: values.hidden
      }));
    }
  }, [values, onUpdate]);

  return (
    <div className="space-y-4">
      <div>
        <label className="label">Network Name (SSID)</label>
        <input {...register("ssid")} placeholder="MyHomeWiFi" className="input-field" />
        {errors.ssid && <p className="text-cta text-xs mt-1">{errors.ssid.message}</p>}
      </div>

      <div>
        <label className="label">Password</label>
        <input {...register("password")} type="password" placeholder="••••••••" className="input-field" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">Security</label>
          <select {...register("security")} className="input-field">
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">None</option>
          </select>
        </div>
        <div className="flex items-center pt-8">
          <input {...register("hidden")} type="checkbox" id="hidden-wifi" className="accent-cta mr-2 h-4 w-4" />
          <label htmlFor="hidden-wifi" className="text-sm font-medium">Hidden Network</label>
        </div>
      </div>
    </div>
  );
}
