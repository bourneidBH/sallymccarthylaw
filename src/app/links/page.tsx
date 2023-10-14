import Image from 'next/image'
import type { Metadata } from 'next'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  title: `Additional Resources - ${siteName}`,
  description: 'Helpful links to government patent, copyright, and other intellectual property law resources.',
}

export default function Links() {
  return (
    <main className="flex min-h-[calc(100vh-69px)] flex-col">

      <div className="p-4 container container-sm">
        <h1 className="text-primary">Links</h1>
        <p className="font-bold">
        For further resources see the following links: 
        </p>
        <ol>
          <li><a href="https://wisconsintechnologycouncil.com/" target="_blank">Wisconsin Technology Council</a></li>
          <li><a href="https://www.bioforward.org/" target="_blank">Wisconsin Biotechnology Association</a></li>
        </ol>
        <p className="font-bold">
        National and International Links: 
        </p>
        <ol>
          <li><a href="https://www.uspto.gov/" target="_blank">U.S. Patent & Trademark Office</a></li>
          <li><a href="https://www.copyright.gov/" target="_blank">U.S. Copyright Office</a></li>
          <li><a href="https://www.energy.gov/science-innovation" target="_blank">U.S. Department of Energy Inventions & Innovation Program</a></li>
          <li><a href="https://www.wipo.int/portal/en/index.html" target="_blank">World Intellectual Property Organization</a></li>
          <li><a href="https://www.aipla.org/" target="_blank">American Intellectual Property Law Association</a></li>
          <li><a href="https://www.icann.org/" target="_blank">Internet Corporation for Assigned Names and Numbers</a></li>
          <li><a href="https://www.inta.org/" target="_blank">International Trademark Association</a></li>
          <li><a href="https://www.invent.org/" target="_blank">National Inventors Hall of Fame</a></li>
          <li><a href="https://www.law.cornell.edu/" target="_blank">Cornell Law School Legal Information Institute</a></li>
          <li><a href="https://www.ipmall.info/" target="_blank">Franklin Pierce Law Center – IP Basics</a></li>
          <li><a href="https://www.americanbar.org/groups/intellectual_property_law/" target="_blank">American Bar Association, Intellectual Property Section</a></li>
        </ol>
      </div>
    </main>
  )
}
