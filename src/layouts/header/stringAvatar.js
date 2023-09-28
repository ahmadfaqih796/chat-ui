export const stringAvatar = (name, size) => {
  const fullname = name
    ?.split(" ")
    ?.map((n) => n[0])
    .join("");
  return {
    sx: {
      bgcolor: "gray",
      width: size,
      height: size,
    },
    children: fullname,
  };
};
