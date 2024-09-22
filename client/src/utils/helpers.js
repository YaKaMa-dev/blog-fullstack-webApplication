export const stringAvatar = (name) => {
  if (!name) return {};
  const splitName = name.split(" ");
  return {
    children: `${splitName[0][0]}${splitName[1] ? splitName[1][0] : ""}`,
  };
};
