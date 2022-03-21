import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "woah dude, this is awesome! ",
      id: 1,
    },

    {
      user: "thereladamsavage",
      text: "Like ! ",
      id: 2,
    },

    {
      user: "mapvault",
      text: "Niceeee! ! ",
      id: 3,
    },
    {
      user: "seda",
      text: "superrr! ! ",
      id: 4,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up! ",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "love this",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="raffagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
       <Card
        accountName="mapvault"
        storyBorder={true}
        image="https://picsum.photos/800"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={90}
        hours={4}
      />
       <Card
        accountName="datalacak"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="seda"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsOne}
        likedByText="seda"
        likedByNumber={47}
        hours={12}
      />
    </div>
  );
}

export default Cards;
