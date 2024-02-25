import { Container } from "@/components/Container";
import { InfoText } from "@/components/InfoText";
import { Navbar } from "@/components/navbar/Navbar";
import { plans } from "@/constants";
import { Plan } from "./components/Plan";
import { Faq } from "./components/Faq";

const PricingPage = () => {
  return (
    <Container>
      <div className="pt-5">
        <Navbar />
      </div>
      <section className="mt-10">
        <h1 className="text-4xl font-semibold text-center">
          <InfoText>Limited offers!</InfoText>
        </h1>
        <p className="text-darkGray mt-4 text-sm text-center max-w-[600px] mx-auto">
          Find the perfect plan for your goals. Explore pricing options that
          offer unmatched value, tailored to meet your business needs.
        </p>
      </section>
      <section className="mt-10 flex flex-col md:flex-row justify-center gap-6">
        {plans.map((plan, idx) => (
          <Plan key={idx} plan={plan} />
        ))}
      </section>
      <section className="mt-10">
        <Faq/>
      </section>
    </Container>
  );
};

export default PricingPage;
