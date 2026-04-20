import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      {/* Skip navbar/footer — standalone page */}
      <div className="nf-root">

        {/* Giant 404 */}
        <p className="nf-code">404</p>

        {/* Divider */}
        <div className="nf-divider" />

        {/* Text block */}
        <div className="nf-body">
          <h1 className="nf-title">Page not found</h1>
          <p className="nf-desc">
            Only the home page is cooked and ready to serve&nbsp;🍳<br />
            The rest is still in the kitchen.
          </p>
        </div>

        {/* Button */}
        <Link href="/" className="nf-btn">
          ← Go back home
        </Link>

      </div>
    </>
  );
}
