export default function TermsPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p>Last updated: June 03, 2024</p>
        <p>By using QRBuild, you agree to the following terms and conditions.</p>

        <h2>1. Use of Service</h2>
        <p>QRBuild provides a free QR code generation tool. You are responsible for the content you embed in the QR codes you generate. We do not monitor or control the content of generated codes.</p>

        <h2>2. No Warranty</h2>
        <p>The service is provided &quot;as is&quot; without any warranties. We do not guarantee that the service will always be available or that the generated codes will be scannable by all devices.</p>

        <h2>3. Limitation of Liability</h2>
        <p>QRBuild and its creators shall not be liable for any damages arising from the use of the service or the inability to use the service.</p>

        <h2>4. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of the new terms.</p>
      </div>
    </div>
  );
}
