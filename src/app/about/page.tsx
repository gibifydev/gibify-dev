import AboutComponent from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre'
}

export default function AboutPage() {
  return <AboutComponent />
}
