export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Navigation Links */}
          <nav className="flex gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Simal Shakha. All rights reserved.
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:gap-4 mt-2">
              <a
                href="mailto:sshakha350@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                sshakha350@gmail.com
              </a>
              <a
                href="tel:9860916855"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                9860916855
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.08 2.91.83.09-.64.34-1.09.62-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.74 1.03A9.52 9.52 0 0 1 12 7.5c.86.003 1.72.115 2.54.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.4.2 2.43.1 2.69.64.7 1.03 1.6 1.03 2.69 0 3.83-2.35 4.68-4.59 4.93.35.3.66.91.66 1.83v2.7c0 .26.16.58.67.48A10.006 10.006 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.847 20h-3.006v-9.337h3.006v9.337zm-1.503-10.633c-.957 0-1.733-.777-1.733-1.733 0-.957.777-1.734 1.733-1.734.956 0 1.733.777 1.733 1.734 0 .956-.777 1.733-1.733 1.733zm13.35 10.633h-3.006v-4.769c0-1.137-.023-2.6-1.583-2.6-1.584 0-1.828 1.238-1.828 2.519v4.85h-3.006v-9.337h2.886v1.275h.041c.402-.761 1.383-1.563 2.847-1.563 3.046 0 3.61 2.005 3.61 4.613v5.013z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
