const MyHeader = () => {
  return (
    <div className="grid h-full w-full grid-cols-3 items-center gap-2 rounded-md border-2 md:p-3">
      <div className="w-[40%]"></div>
      <h1 className="text-center text-lg font-medium md:text-xl">
        My Book Of Shows
      </h1>
      <div className="pr-2 text-right">User</div>
    </div>
  );
};

export default MyHeader;
