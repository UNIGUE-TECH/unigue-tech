import FormInput from "../../ui/FormInput";
import FormTextArea from "../../ui/FormTextArea";
import Button from "../../ui/Button";

function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Ready to start your project? Contact us today and let's build
            something amazing together.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <form className="space-y-6">
            <FormInput
              label="Name"
              name="name"
              placeholder="Your name"
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
            <FormTextArea
              label="Message"
              name="message"
              placeholder="Tell us about your project..."
              required
            />
            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
