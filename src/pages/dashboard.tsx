import { useState } from "react";
import SearchAndFilter from "../components/searchAndfilter";
import { FilterTypes } from "../global-types/types";
import UserLists from "../components/userLists";

const Dashboard = () => {
  const [filter, setFilter] = useState<FilterTypes>(FilterTypes.None);
  const [itemToFind, setItemToFind] = useState<string>("");

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-row gap-2  ">
        <div id="Sidebar" className="flex w-[15vw] flex-col">
          <div className="flex h-max w-full rounded-lg">
            <SearchAndFilter
              filterController={[filter, setFilter]}
              searchController={[itemToFind, setItemToFind]}
            ></SearchAndFilter>
          </div>
          <div className=" flex h-full w-full rounded-lg">
            <UserLists></UserLists>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
