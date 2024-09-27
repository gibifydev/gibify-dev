import BioComponent from "@/components/Bio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bio'
}

export default function BioPage() {
return (
  <BioComponent />
)

}