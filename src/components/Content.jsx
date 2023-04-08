const content = [
  {
    key: "1",
    user_name: "Jake",
    imageURL: "/assets/box-puppy.jpg",
    tagline: "Water so good even Fido enjoys!",
  },
  {
    key: "2",
    user_name: "Samantha",
    imageURL: "/assets/dog-pool.jpg",
    tagline: "The perfect way to cool off on a hot day",
  },
  {
    key: "3",
    user_name: "Max",
    imageURL: "/assets/dog-drinking.jpg",
    tagline: "Drinking in style",
  },
  {
    key: "4",
    user_name: "Buddy",
    imageURL: "/assets/dog-beach.jpg",
    tagline: "Beach vibes",
  },
  {
    key: "5",
    user_name: "Rocky",
    imageURL: "/assets/dog-fountain.jpg",
    tagline: "Quench your thirst",
  },
];

export default function MyComponent() {
  return (
    <div>
      {content.map((item) => (
        <div key={item.key}>
          <h2>{item.user_name}</h2>
          <img src={process.env.PUBLIC_URL + item.imageURL} alt="post" />
          <p>{item.tagline}</p>
        </div>
      ))}
    </div>
  );
}
