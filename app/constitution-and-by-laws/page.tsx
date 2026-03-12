import Link from "next/link";

export default function ContactPage() {
  const documents = [
    { label: "View Constitution", file: "/constitution.pdf" },
    { label: "View Club Space Policy", file: "/club-space-policy.pdf" },
    { label: "View Committee & Staff Policy", file: "/committee-and-staff-policy.pdf" },
    { label: "View Equipment Loan Document", file: "/equipment-loan-document.pdf" },
    { label: "View Maker Space Policy", file: "/makers-space-policy.pdf" },
    { label: "View Compliance Policy", file: "/compliance-policy.pdf" },
    { label: "View Executive Order Policy", file: "/executive-order-policy.pdf" },
  ];

  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Constitution and Bylaws
          </h2>

          <p className="text-base sm:text-lg text-mainblack/70 max-w-4xl mb-8">
            The Society of Computer & Information Sciences (SOCIS) represents
            computing students at the University of Guelph.
          </p>

          <div className="flex flex-col gap-4 max-w-4xl">
            {documents.map((doc) => (
              <Link
                key={doc.file}
                href={doc.file}
                target="_blank"
                className="
                  w-full
                  flex items-center justify-center
                  px-6 py-3 sm:px-8 sm:py-4
                  bg-mainblack text-mainwhite
                  font-semibold rounded-lg
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-lg
                  text-base sm:text-xl
                "
              >
                {doc.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}