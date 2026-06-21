"use client";

import { useState, useEffect } from "react";
import { QRHistoryItem } from "@/types/qr.types";

const STORAGE_KEY = "qralfo_history";
const MAX_HISTORY = 5;

export const useQRHistory = () => {
  const [history, setHistory] = useState<QRHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  const addToHistory = (item: Omit<QRHistoryItem, "id" | "timestamp">) => {
    const newItem: QRHistoryItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: Date.now(),
    };

    const updated = [newItem, ...history.filter((h) => h.data !== item.data)].slice(0, MAX_HISTORY);
    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { history, addToHistory, clearHistory };
};
