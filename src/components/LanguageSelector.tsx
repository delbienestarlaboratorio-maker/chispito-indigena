"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSelector() {
    const { lang, setLang } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: "espanol", name: "Español" },
        { code: "nahuatl", name: "Náhuatl" },
        { code: "maya", name: "Maya" },
        { code: "tzeltal", name: "Tzeltal" },
        { code: "tzotzil", name: "Tzotzil" },
        { code: "mixteco", name: "Mixteco" },
        { code: "zapoteco", name: "Zapoteco" },
        { code: "otomi", name: "Otomí" },
        { code: "totonaco", name: "Totonaco" },
        { code: "chol", name: "Ch'ol" },
        { code: "mazateco", name: "Mazateco" }
    ] as const;

    const currentLang = languages.find((l) => l.code === lang) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
            >
                <Globe size={16} />
                <span>{currentLang.name}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-40 max-h-80 overflow-y-auto rounded-xl shadow-lg py-1 z-50 overflow-x-hidden custom-scrollbar"
                        style={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => {
                                    setLang(l.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors ${lang === l.code
                                    ? "bg-blue-500/20 text-blue-400 font-bold"
                                    : "text-white/80 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {l.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
