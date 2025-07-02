"use client"
import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

import { MotionConfig } from "framer-motion"
import { Navbar } from "@/components/ui/Shared/Navbar"
import { Footer } from "@/components/ui/Shared/Footer"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} >
      <div >
        <MotionConfig reducedMotion="user" >
        <Navbar/>
        {children}
        <Footer/>
      </MotionConfig>
      </div>
    </NextThemesProvider>
  )
}