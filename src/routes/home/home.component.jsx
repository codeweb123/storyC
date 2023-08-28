import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

import "../../components/youtube/YoutubeEmbed.styles.scss";

import YoutubeEmbed from "../../components/youtube/YoutubeEmbed.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "You",
      imageUrl:
        "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 2,
      title: "Write",
      imageUrl:
        "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=972&q=80",
    },
    {
      id: 3,
      title: "Read",
      imageUrl:
        "https://images.unsplash.com/photo-1623031345438-387dd3c45e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80",
    },
    {
      id: 4,
      title: "Activities",
      imageUrl:
        "https://images.unsplash.com/photo-1524502461691-79a021fc4567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div>
      <div className="App">
        <h1>Become an effective writer!</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h3>
        <YoutubeEmbed embedId="cYqmNO6gr2Y" />
      </div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
