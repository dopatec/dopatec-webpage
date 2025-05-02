import { Contact } from '../components/Contact';

// Enkel sidkomponent som använder Contact-komponenten
export function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Contact />
    </div>
  );
}
