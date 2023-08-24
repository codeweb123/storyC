import Directory from "./components/directory/directory.component";

const App = () => {
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
  return <Directory categories={categories} />;
};

export default App;
