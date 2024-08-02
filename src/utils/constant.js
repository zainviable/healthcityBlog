export const BASE_URL = "https://blog.healthcity.org.uk/api";
export const POPULATE_QUERY =
  "populate=author.authorImg&populate=blogImg&populate=categories&populate=tags";

export const multiTagQueryById = (tags) => {
  let str = "";
  tags?.map((item, index) => {
    if (index == 0) {
      str += `&filters[tags][id][$in][${index}]=${item}`;
      return;
    }
    str += `filters[tags][id][$in][${index}]=${item}`;
  });
  return str;
};
