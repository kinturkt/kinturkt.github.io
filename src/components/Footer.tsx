import {
  Github,
  Linkedin,
  Mail,
  ArrowUp
} from "lucide-react";

import {
  SiHuggingface,
  SiMedium,
  SiGmail
} from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-portfolio-primary rounded-full hover:bg-portfolio-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

          {/* Name & title */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">Kintur Shah</h2>
            <p className="text-gray-300">AI/ML Engineer • Data Scientist</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/kinturkt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/in/kintur-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="https://huggingface.co/kinturkt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-primary transition-colors"
              aria-label="Hugging Face"
            >
              <SiHuggingface className="h-6 w-6" />
            </a>

            <a
              href="https://www.kaggle.com/kinturshah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-primary transition-colors"
              aria-label="Kaggle"
            >
              <img
                src="/logos/kaggle.png"
                alt="Kaggle"
                className="h-6 w-6"
              />
            </a>

            <a
              href="https://medium.com/@shahkintur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-primary transition-colors"
              aria-label="Medium"
            >
              <SiMedium className="h-6 w-6" />
            </a>

            <a
              href="mailto:shahkintur@gmail.com"
              className="hover:text-portfolio-primary transition-colors"
              aria-label="Email"
            >
              <SiGmail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center">
            <p>© {new Date().getFullYear()} Kintur Shah. All rights reserved.</p>
            <p className="mt-1">Designed & Developed by Kintur Shah</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;