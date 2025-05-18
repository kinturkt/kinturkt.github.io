// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const Contact = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       console.log("Form data submitted:", formData);
//       toast({
//         title: "Message sent!",
//         description: "Thanks for reaching out. I'll get back to you soon.",
//       });
      
//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
      
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="section-padding bg-gray-50">
//       <div className="container-custom">
//         <h2 className="section-title text-center">Get In Touch</h2>
//         <p className="section-subtitle text-center mx-auto">
//           Have a project in mind or just want to say hello? Feel free to reach out!
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           <Card className="border-none shadow-md animate-slide-up">
//             <CardHeader className="bg-portfolio-primary text-white">
//               <CardTitle className="flex items-center">
//                 <Mail className="mr-2 h-5 w-5" />
//                 Email
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-6">
//               <CardDescription className="text-center text-gray-700 text-base">
//                 <a 
//                   href="mailto:hello@yourname.com" 
//                   className="hover:text-portfolio-primary transition-colors"
//                 >
//                   shahkintur@gmail.com
//                 </a>
//               </CardDescription>
//             </CardContent>
//           </Card>
          
//           <Card className="border-none shadow-md animate-slide-up" style={{ animationDelay: "100ms" }}>
//             <CardHeader className="bg-portfolio-secondary text-white">
//               <CardTitle className="flex items-center">
//                 <Phone className="mr-2 h-5 w-5" />
//                 Phone
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-6">
//               <CardDescription className="text-center text-gray-700 text-base">
//                 <a 
//                   href="tel:+1234567890" 
//                   className="hover:text-portfolio-primary transition-colors"
//                 >
//                   +1 (682) 307-0426
//                 </a>
//               </CardDescription>
//             </CardContent>
//           </Card>
          
//           <Card className="border-none shadow-md animate-slide-up" style={{ animationDelay: "200ms" }}>
//             <CardHeader className="bg-portfolio-accent text-white">
//               <CardTitle className="flex items-center">
//                 <MapPin className="mr-2 h-5 w-5" />
//                 Location
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-6">
//               <CardDescription className="text-center text-gray-700 text-base">
//                 Arlington, Texas
//               </CardDescription>
//             </CardContent>
//           </Card>
//         </div>
        
//         <Card className="mt-12 border-none shadow-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "300ms" }}>
//           <CardHeader>
//             <CardTitle className="text-2xl text-portfolio-dark">Send a Message</CardTitle>
//             <CardDescription>
//               Fill out the form below and I'll get back to you as soon as possible.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium">
//                     Your Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label htmlFor="subject" className="text-sm font-medium">
//                   Subject
//                 </label>
//                 <Input
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Project Inquiry"
//                   required
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-medium">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project, ask a question, or just say hi!"
//                   rows={6}
//                   required
//                 />
//               </div>
              
//               <Button 
//                 type="submit" 
//                 className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center">
//                     Sending...
//                     <svg className="ml-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
//                     </svg>
//                   </span>
//                 ) : (
//                   <span className="flex items-center">
//                     Send Message
//                     <Send className="ml-2 h-4 w-4" />
//                   </span>
//                 )}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// src/components/Contact.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldjzkvb";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (err) {
      toast({
        title: "Error",
        description:
          "Oops, something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach
          out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="border-none shadow-md animate-slide-up">
            <CardHeader className="bg-portfolio-primary text-white">
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="text-center text-gray-700 text-base">
                <a
                  href="mailto:shahkintur@gmail.com"
                  className="hover:text-portfolio-primary transition-colors"
                >
                  shahkintur@gmail.com
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card
            className="border-none shadow-md animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <CardHeader className="bg-portfolio-secondary text-white">
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="text-center text-gray-700 text-base">
                <a
                  href="tel:+16823070426"
                  className="hover:text-portfolio-primary transition-colors"
                >
                  +1 (682) 307-0426
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          {/* <Card
            className="border-none shadow-md animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <CardHeader className="bg-portfolio-accent text-white">
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="text-center text-gray-700 text-base">
                Arlington, Texas
              </CardDescription>
            </CardContent>
          </Card> */}
        </div>

        <Card
          className="mt-12 border-none shadow-lg max-w-3xl mx-auto animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-portfolio-dark">
              Send a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, ask a question, or just say hi!"
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;