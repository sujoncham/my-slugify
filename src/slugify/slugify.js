const mySlugify = (title) => {
  const data = title.split(" ");
  const slug = data.join("-");
  return slug;
};

export default mySlugify;
