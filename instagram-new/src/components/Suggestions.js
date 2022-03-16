import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Sizin için öneriler</div>
        <a href="/">Hepsini Gör</a>
      </div>

      <Profile
        caption="diğer kişi takip ediyor + 3"
        urlText="Takip et"
        iconSize="medium"
        captionSize="small"
        
      />
      <Profile
        caption="diğer kişi takip ediyor + 9"
        urlText="Takip et"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
       
      />
      <Profile
        caption="diğer kişi takip ediyor + 8"
        urlText="Takip et"
        iconSize="medium"
        captionSize="small"
        
      />
      <Profile
        caption="diğer kişi takip ediyor + 1"
        urlText="Takip et"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
           <Profile
        caption="diğer kişi takip ediyor + 1"
        urlText="Takip et"
        iconSize="medium"
        captionSize="small"
        
      />
  
  
    </div>
  );
}

export default Suggestions;
