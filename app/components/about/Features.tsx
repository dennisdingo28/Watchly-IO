import { Feature } from "./Feature";

export const Features = () => {
  return (
    <div className="bg-purple p-6 rounded-sm grid grid-cols-2 gap-2">
      <Feature
        imageUrl="/hero.jpg"
        description="
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque voluptatibus quo sint non rem debitis dolor voluptas labore placeat suscipit quisquam pariatur, quae, cum similique enim possimus! Iure iusto ab ad fugiat. Voluptates delectus debitis quis accusamus cum id ab dolorum deserunt facere autem beatae repellat, expedita, maxime tempora!"
      />
      <Feature
        imageUrl="/hero.jpg"
        description="
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque voluptatibus quo sint non rem debitis dolor voluptas labore placeat suscipit quisquam pariatur, quae, cum similique enim possimus! Iure iusto ab ad fugiat. Voluptates delectus debitis quis accusamus cum id ab dolorum deserunt facere autem beatae repellat, expedita, maxime tempora!"
      />
    </div>
  );
};
