import { Feature } from "./Feature";

export const Features = () => {
  return (
    <div className="relative flex flex-col lg:flex-row gap-10 mt-10 sm:mt-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-56 rotate-[30deg] bg-gradient-to-tr from-purple to-darkPurple opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <Feature
        title="Live user monitoring"
        imageUrl="/about1.jpg"
        description="Gain real-time insights into user behavior with our Live User Monitoring feature. Track user interactions, monitor session activities, and analyze engagement patterns instantly. Elevate your understanding of user engagement and make data-driven decisions to optimize your platform's performance like never before."
      />
      <Feature
        title="Insights"
        imageUrl="/about2.svg"
        description="
        Revolutionize your decision-making process with our robust insights. Going beyond mere data, our analytics provide a transformative understanding of your website's performance. From discerning user trends to formulating impactful strategies, immerse yourself in the knowledge needed to elevate your online presence and drive sustained success."
      />
    </div>
  );
};
