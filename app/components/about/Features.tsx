import { Feature } from "./Feature";

export const Features = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
      <Feature
        title="Recorded sessions"
        imageUrl="/hero.jpg"
        description="Embark on a comprehensive exploration of user engagement with our recorded sessions. Immerse yourself in a visual journey that unveils the intricacies of your audience's interaction on your website. Gain profound insights into user behavior and preferences, empowering you to optimize and enhance the overall user experience."
      />
      <Feature
        title="Insights"
        imageUrl="/hero.jpg"
        description="
        Revolutionize your decision-making process with our robust insights. Going beyond mere data, our analytics provide a transformative understanding of your website's performance. From discerning user trends to formulating impactful strategies, immerse yourself in the knowledge needed to elevate your online presence and drive sustained success."
      />
    </div>
  );
};
