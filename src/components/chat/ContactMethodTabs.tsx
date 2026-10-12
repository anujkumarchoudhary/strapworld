"use client";

import React from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  Headset,
} from "lucide-react";

type ContactMethod = "chat" | "whatsapp" | "phone" | "email";

type ContactMethodTabsProps = {
  activeTab: ContactMethod;
  onTabChange: (tab: ContactMethod) => void;
  phoneNumber?: string;
  emailAddress?: string;
  whatsappNumber?: string;
};

const tabs: {
  id: ContactMethod;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "chat", label: "Live Chat", icon: MessageCircle },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "phone", label: "Call", icon: Phone },
  { id: "email", label: "Email", icon: Mail },
];

export default function ContactMethodTabs({
  activeTab,
  onTabChange,
  phoneNumber = "+911234567890",
  emailAddress = "hello@example.com",
  whatsappNumber = "911234567890",
}: ContactMethodTabsProps) {
  const handleTabClick = (tab: ContactMethod) => {
    if (tab === "whatsapp") {
      window.open(
        `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    if (tab === "phone") {
      window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
      return;
    }

    if (tab === "email") {
      window.location.href = `mailto:${emailAddress}`;
      return;
    }

    onTabChange(tab);
  };

  return (
    <div
      className="grid grid-cols-4 gap-1 border-b border-gray-200 bg-white p-2 sm:gap-2"
      role="tablist"
      aria-label="Choose a contact method"
    >
      {tabs.map(({ id, label, icon: Icon }) => {
        const active = activeTab === id;

        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => handleTabClick(id)}
            className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-xs font-medium transition-colors sm:flex-row sm:gap-2 sm:px-3 sm:py-3 sm:text-sm ${
              active
                ? "bg-blue-50 text-blue-700"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Icon size={18} className="shrink-0" />
            <span className="truncate">{label}</span>
          </button>
        );
      })}
    </div>
  );
}