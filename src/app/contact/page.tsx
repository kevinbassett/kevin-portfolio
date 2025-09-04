import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Section title="Contact">
        <p className="text-gray-700">
          The fastest way to reach me is email:{" "}
          <a className="underline" href="mailto:kevinbassett11@gmail.com">
            kevinbassett11@gmail.com
          </a>
        </p>
      </Section>
    </>
  );
}
