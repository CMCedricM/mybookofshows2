import { useState, useEffect } from "react";

const UserLists = () => {
  return (
    <div className="mt-2 flex w-full flex-col rounded-md bg-blur-green p-2 backdrop-blur-sm">
      <div className="mt-2 w-full items-center justify-center rounded-md border-2 bg-white p-2 text-black">
        <h2 className="text-center">Your Lists</h2>
      </div>
    </div>
  );
};

export default UserLists;
