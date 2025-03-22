import React from "react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="bg-slate-800 min-h-screen text-white">
        {children}
      </div>
  )
}
