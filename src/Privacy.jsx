import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-paper text-ink px-6 py-24 max-w-3xl mx-auto">
      <Link to="/" className="eyebrow">&larr; Back home</Link>
      <h1 className="font-display text-4xl font-extrabold mt-6 mb-6">Privacy Policy</h1>
      <p className="font-body text-muted leading-relaxed mb-4">
        Bay's Auto Repair collects only the information you submit through our contact form
        (name, email, phone, vehicle details, and message) in order to respond to your
        inquiry. We do not sell or share your information with third parties.
      </p>
      <p className="font-body text-muted leading-relaxed">
        Questions about this policy can be sent to us via the contact form on our homepage.
      </p>
    </div>
  );
}
