import { Feature } from "./Feature";

export const Features = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
    
      <Feature
        title="Recorded sessions"
        imageUrl="/hero.jpg"
        description="
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque voluptatibus quo sint non rem debitis dolor voluptas labore placeat suscipit quisquam pariatur, quae, cum similique enim possimus! Iure iusto ab ad fugiat. Voluptates delectus debitis quis accusamus cum id ab dolorum deserunt facere autem beatae repellat, expedita, maxime tempora!"
      />
      <Feature
        title="Insights"
        imageUrl="/hero.jpg"
        description="
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque voluptatibus quo sint non rem debitis dolor voluptas labore placeat suscipit quisquam pariatur, quae, cum similique enim possimus! Iure iusto ab ad fugiat. Voluptates delectus debitis quis accusamus cum id ab dolorum deserunt facere autem beatae repellat, expedita, maxime tempora!"
      />
    </div>
  );
};
