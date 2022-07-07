/* globalRouter */
export const trending = (req, res) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whatsup",
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search");
/* videoRouter.js */
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => res.send("deleteVideo");
export const upload = (req, res) => res.send("Upload");
