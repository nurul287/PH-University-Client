import { FilterValue } from "antd/es/table/interface";
import { TQueryParams } from "src/types";

export const generateParams = (data: Record<string, FilterValue | null>) => {
  const filterParams: TQueryParams[] = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const filterValues = data[key] as string[];
      console.log(filterValues);
      filterValues?.forEach((item) => {
        filterParams.push({ field: key, value: item });
      });
    }
  }
  return filterParams;
};
