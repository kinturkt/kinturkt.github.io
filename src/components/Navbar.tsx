import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-bold text-portfolio-primary">
          Portfolio<span className="text-portfolio-accent">Website</span>
        </a>

        {/* Desktop Nav + Resume CTA */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-portfolio-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Resume Button */}
          <Button asChild variant="default" className="bg-portfolio-primary hover:bg-portfolio-secondary text-white">
            <a
              href="/Kintur_Shah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-portfolio-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Resume Link */}
            <a
              href="/Kintur_Shah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center space-x-1 bg-portfolio-primary text-white py-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;